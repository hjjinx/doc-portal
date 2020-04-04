const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 6969;

var connection = mysql.createConnection({
  // Will replace with the provided database.
  host: "localhost",
  user: "root",
  password: "",
  database: "testdoctor",
  multipleStatements: true
});
connection.connect(err => {
  if (err) throw err;
  else console.log("Connected to SQL!");
});

app.get("/alldoctors", (req, res) => {
  connection.query(
    `SELECT * FROM doctors d JOIN clinics c ON d.clinicId=c.clinicId JOIN addresses a ON a.addressId=c.clinicId JOIN contacts co ON co.contactId=c.contactId;`,
    (err, data) => {
      if (err) console.log("Could not get all doctors");
      console.log(data);
      res.json(data);
    }
  );
});

app.post("/addDoctor", (req, res) => {
  console.log(req.body);
  const {
    licenseNo,
    firstName,
    lastName,
    speciality,
    workingHours,
    clinicName,
    address,
    city,
    state,
    zipCode,
    phoneNumber,
    email
  } = req.body;

  connection.query(
    `INSERT INTO addresses(address, city, state, zipCode) VALUES(\'${address}\', \'${city}\', \'${state}\', \'${zipCode}\');
    INSERT INTO contacts(phoneNumber, email) VALUES(\'${phoneNumber}\', \'${email}\');`,
    (err, data) => {
      if (err) {
        console.log("Unable to insert address/contact");
        console.error(err);
        res.json({
          message: "Unable to insert address/contact",
          error: err
        });
        return;
      }
      const addressId = data[0].insertId;
      const contactId = data[1].insertId;
      connection.query(
        `INSERT into clinics(clinicName, addressid, contactId) VALUES (\'${clinicName}\', \'${addressId}\', \'${contactId}\');`,
        (err, data2) => {
          if (err) {
            console.log("Unable to insert clinic");
            console.error(err);
            res.json({
              message: "Unable to insert clinic",
              error: err
            });
            return;
          }
          const clinicId = data2.insertId;
          connection.query(
            `INSERT INTO doctors (licenseNo, firstName, lastName, speciality, workingHours, clinicId) VALUES(\'${licenseNo}\', \'${firstName}\', \'${lastName}\', \'${speciality}\', \'${workingHours}\', \'${clinicId}\')`,
            (err, data3) => {
              if (err) {
                console.log("Unable to insert doctor");
                console.error(err);
                res.json({
                  message: "Unable to insert doctor",
                  error: err
                });
                return;
              }
              console.log(data3);
              res.json(data3);
            }
          );
        }
      );
    }
  );
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
