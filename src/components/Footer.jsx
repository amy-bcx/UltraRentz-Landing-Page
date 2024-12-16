import React from "react";

const hours = new Date().getHours();
const day = hours < 12 ? "Morning" : hours <= 17 ? "Afternoon" : "Evening";
const timeOfDay = hours < 12 ? "#f5b22a" : hours <= 17 ? "#fe2df4" : "#491af6";
const name = "AmanDev";

function Footer() {
  return (
    <footer>
      <p>
        Created by <i> {name}</i>
      </p>
      <p>Copyright © {new Date().getFullYear()}</p>
    </footer>
  );
}
export default Footer;
