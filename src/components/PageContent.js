import circle from "../assets/svg-content/content-circle.svg";
import React from "react";
import "./PageContent.css";
import "./Introduction.css";
import { Link } from "react-router-dom";
export default function Pagecontent() {
  return (
    <div className='page-content'>
      <div className='page-content-circle'>
        <img src={circle} alt='' />
      </div>
      <div className='page-topic-title'>
        <h1 style={{textAlign:'left'}}>Numerical Computation</h1>
        <h3>Integration and differentiation with application</h3>
      </div>
      <div className='page-content-main'>
        <Link style={{ textDecoration: "none" }} to='/overview'>
          <div className='page-content-first'>
            <span id='number'>1</span>
            <span>Overview</span>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/history'>
          <div className='page-content-first'>
            <span id='number'>2</span>
            <span>History</span>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/differentiation'>
          <div className='page-content-first'>
            <span id='number'>3</span>
            <span>Differentiation</span>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/integration'>
          <div className='page-content-first'>
            <span id='number'>4</span>
            <span>Integration</span>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/others'>
          <div className='page-content-first'>
            <span id='number'>5</span>
            <span>Practical Uses</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
