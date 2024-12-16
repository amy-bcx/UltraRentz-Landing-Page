import React from "react";

function aboutUs() {
  return (
    <div className="aboutUsContainer">
      <div className="aUsL">
        <div>
          <h2>Let's Talk</h2>
        </div>
        <div className="aUsL2">
          <a href="https://www.linkedin.com/in/bendeficrypto/">
            {" "}
            <h3>https://www.linkedin.com/in/bendeficrypto/</h3>
          </a>
          <h3 href="https://x.com/benpaymaster">https://x.com/benpaymaster</h3>
          <h3>benpaymaster@gmail.com</h3>
        </div>
      </div>
      <div className="aUsR">
        <div>
          <h2>Business Hours</h2>
        </div>
        <div className="aUsR2">
          <h3>Monday to Friday</h3>
          <h4>9:00 am to 6:00 pm</h4>
          <h3>Saturday</h3>
          <h4> 9:00 am to 12 noon</h4>
          <h4>Sunday by appointment only.</h4>
        </div>
      </div>
    </div>
  );
}
export default aboutUs;
