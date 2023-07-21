import React from "react";
import './Header.css';

function Header() {
  return (
      <div className="businessDays">
        <ul className="dayOfWeek">
          <li>Monday-Friday: 10am - 6pm</li>
          <li>Saturday: 9am - 3pm</li>
          <li>Sunday: Closed</li>
        </ul>
        {/* <ul class="businessHours">
          <li>10am - 6pm</li>
          <li>9am - 3pm</li>
          <li>Closed</li>
        </ul> */}
      </div>
  );
}

export default Header;
