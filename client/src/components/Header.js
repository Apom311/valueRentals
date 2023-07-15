import React from "react";

function Header() {
  return (
    <header>
      <h1>
        <span>V</span>ALUE
      </h1>
      <h2>HOME FURNISHINGS</h2>
      <hr id="line1"></hr>
      <hr id="line2"></hr>
      <hr id="line3"></hr>
      <hr id="line4"></hr>
      <div class="businessDays">
        <ul class="dayOfWeek">
          <li>Monday-Friday:</li>
          <li>Saturday:</li>
          <li>Sunday:</li>
        </ul>
        <ul class="businessHours">
          <li>10am - 6pm</li>
          <li>9am - 3pm</li>
          <li>Closed</li>
        </ul>
        <hr id="line5"></hr>
      </div>
    </header>
  );
}

export default Header;
