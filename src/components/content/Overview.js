import React from "react";
import "../../styles/overview.css";
import "../Introduction.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";
export default function OverView() {
  return (
    <div className='overview-main'>
      <Nav />
      <div className='overview-heading'>
        <h1>Overview</h1>
      </div>
      <div className='overview-content'>
        <p>
          In numerical analysis, numerical integration constitutes a broad
          family of algorithms for calculating the numerical value of a definite
          integral, and by extension, the term is also sometimes used to
          describe the numerical solution of differential equations. The basic
          problem considered by numerical integration is to compute an
          approximate solution to a definite integral. In numerical analysis,
          numerical differentiation describes algorithms for estimating the
          derivative of a mathematical function or function subroutine using
          values of the function and perhaps other knowledge about the function.
          It can also be defined as the problem of approximating the derivative
          of a function using values of the function.
        </p>
      </div>
      <div style={{color:"transparent"}}>...</div>
      <Link to="/history">
          <div className="history-button">
              <span>History</span><span><i class="fa fa-chevron-right"></i></span>
          </div>
      </Link>
    </div>
  );
}
