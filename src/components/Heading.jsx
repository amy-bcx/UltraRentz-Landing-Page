import React from "react";

//const num = "12";
// const currentDate = new Date();
// const year = currentDate.getFullYear();

const hours = new Date().getHours();
const day = hours < 12 ? "Morning" : hours <= 17 ? "Afternoon" : "Evening";
const timeOfDay = hours < 12 ? "#f5b22a" : hours <= 17 ? "#fe2df4" : "#491af6";

function Heading() {
  return (
    <header>
      <div className="menu">
        <a href="">Home</a>
        <a href="">Fund</a>
        <a href="">Contact</a>
      </div>
      <div className="selected">
        <h1 className="heading" contentEditable="true" spellCheck="false">
          <span style={{ color: timeOfDay }}>Ultra</span>Rentz
        </h1>
        <h4>
          <i>A seamless Renting App</i>
        </h4>
      </div>
      <div className="rightMenu">
        <a href="">Language</a>
        <a href="">Log In </a>
      </div>
    </header>
  );
}
export default Heading;
