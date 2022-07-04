import React from "react";

function Footer() {
  var today = new Date();
  var year = today.getFullYear();

  return (
    <div>
      <footer>
        <p>Copyright ⓒ {year} by Valiantlynx</p>
      </footer>
    </div>
  );
}

export default Footer;
