import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Nav.css";

export default function Nav() {
  const [show, setShow] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar-button' onClick={() => setShow(!show)}>
        {show?<i style={{color:'white'}} class="fa fa-times fa-2x"></i>:<i style={{color:'white'}} class="fa fa-bars fa-2x"></i>}
      </div>
      {show ? (
        <div className='navbar-content'>
          <Link to="/overview">
            <h2>Overview</h2>
          </Link>
          <Link to="/history">
            <h2>History</h2>
          </Link>
          <Link to="/differentiation">
            <h2>Differentiation</h2>
          </Link>
          <Link to="/integration">
            <h2>Integration</h2>
          </Link>
          <Link to="others">
            <h2>Practical Uses</h2>
          </Link>
          <Link to="members">
            <h2>Members</h2>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
