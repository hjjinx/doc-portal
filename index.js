const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 6969;

var connection = mysql.createConnection({
  // Will replace with the provided database.
  host: "localhost",
  user: "root",
  password: "",
  database: "doctor",
  multipleStatements: true,
});
connection.connect((err) => {
  if (err) throw err;
  else console.log("Connected to SQL!");
});

app.get("/alldoctors", (req, res) => {
  connection.query(
    `SELECT * FROM doctors d JOIN clinics c ON d.clinicId=c.clinicId JOIN addresses a ON a.addressId=c.clinicId JOIN contacts co ON co.contactId=c.contactId;`,
    (err, data) => {
      if (err) {
        console.log("Unable to get data from SQL");
        console.error(err);
        res.json({
          message: "Unable to get data from SQL",
          error: err,
        });
        return;
      }
      res.json(data);
    }
  );
});

app.get("/doctor/:id", (req, res) => {
  const licenseNo = req.params.id;
  const query = `SELECT * FROM doctors d JOIN clinics c ON d.clinicId=c.clinicId JOIN addresses a ON a.addressId=c.clinicId JOIN contacts co ON co.contactId=c.contactId WHERE d.licenseNo="${licenseNo}";`;
  connection.query(query, (err, data) => {
    if (err) {
      console.log("Unable to get data from SQL");
      console.error(err);
      res.json({
        message: "Unable to get data from SQL",
        error: err,
      });
      return;
    }
    console.log(data);
    res.json({
      message: "Success",
      data,
    });
  });
});

app.post("/register/doctor", (req, res) => {
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
    email,
  } = req.body;

  let query = `INSERT INTO addresses(address, city, state, zipCode) VALUES(\'${address}\', \'${city}\', \'${state}\', ${zipCode});
               INSERT INTO contacts(phoneNumber, email) VALUES(${phoneNumber}, \'${email}\');`;
  connection.query(query, (err, data) => {
    if (err) {
      console.log("Unable to insert address/contact");
      console.error(err);
      res.json({
        message: "Unable to insert address/contact",
        error: err,
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
            error: err,
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
                error: err,
              });
              return;
            }
            res.json({ message: "Successfully inserted data", data: data3 });
          }
        );
      }
    );
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
