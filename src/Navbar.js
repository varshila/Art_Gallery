import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div style = {{float: "right", marginRight: "30px"}}>
      <Link to="/art-gallery">Art Gallery</Link>
      <span> </span>
      <Link to="/contact-us">Contact Us</Link>
    </div>
  );
};

export default Navbar;