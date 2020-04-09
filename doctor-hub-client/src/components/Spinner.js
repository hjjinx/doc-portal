import React from "react";

import "./spinner.css";

export default class Spinner extends React.Component {
  render() {
    return (
      <div
        class="container"
        style={{
          display: "flex",
          WebkitBoxAlign: "center",
          MsFlexAlign: "center",
          alignItems: "center",
          WebkitBoxPack: "center",
          MsFlexPack: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#fffff",
        }}
      >
        <svg
          class="loader"
          style={{
            maxWidth: "15rem",
            width: "100%",
            height: "auto",
            strokeLinecap: "round",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 340 340"
        >
          <circle cx="170" cy="170" r="160" stroke="#2B65EC" />
          <circle cx="170" cy="170" r="135" stroke="#2B65EC" />
          <circle cx="170" cy="170" r="110" stroke="#2B65EC" />
          <circle cx="170" cy="170" r="85" stroke="#2B65EC" />
        </svg>
      </div>
    );
  }
}
