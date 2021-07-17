import React from "react";
import "../../styles/Integration.css";
import "../Introduction.css";
import Functions from "../../assets/pngs/integration.png";
import Graph from "../../assets/pngs/graph-integration.png";
import Csv from "../../assets/pngs/csv-integration.png";
import Trape from './Integration-trape';
import { useState } from "react";
export default function Integration() {
  const [next, setNext] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setNext(true);
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  };
  return (
    <div>
      {next ? (
        <Trape></Trape>
      ) : (
        <div className='integration-main'>
          <div className='integration-heading'>
            <h1>Integration</h1>
          </div>
          <div className='integration-content'>
            <h2>Introduction:</h2>
            <p>Let there be a function f(x) given by,</p>
            <img
              className='integration'
              src={Functions}
              alt='integration'
            ></img>
            <p>
              Where x0 is the lower limit and xn is the upper limit of the given
              integral. Before moving on to Trapezoidal and Simpson’s Rule, let
              us develop a basic concept of how to solve numerical problems
              based on integration in C language. Here, we consider the area
              under the graph f(x), taking f(x) = x3. We divide the total region
              into n number of parts with each part having an equal width along
              the x-axis. We can calculate the area under region 1 (say) by
              simply multiplying the width of the region along the x-axis (which
              is the same for all n regions) with the corresponding value of the
              function along y-axis for the initial value of x in region 1.
            </p>
            <p>
              Thus, summing up all the n areas would give us the required value
              of the definite integral.
            </p>
            <h2>Algorithm</h2>
            <p>1. Start</p>
            <p>2. Define Function f(x)</p>
            <p>3. Input a, b</p>
            <p>
              4. Set width = 0.001, area= 0 // Lower Width = Higher Accuracy
            </p>
            <p>
              <span>5. For x = a;</span>{" "}
              <span>
                x <span style={{ fontSize: "1.5em" }}>&#8249;</span> b
              </span>{" "}
              <span> ; x = x + width</span>
            </p>
            <p>6. y = x3</p>
            <p>7. area += y*width</p>
            <p>8. Print area as result</p>
            <p>9. Stop </p>
            <h2>OUTPUT WITH EXAMPLE:</h2>
            <p>
              In our particular problem we have taken function f(x) to be x3 :
            </p>
            <img className='graph' src={Graph} alt='graph'></img>
            <p>
              In our case, we have set the lower limit as 0.5 and the upper
              limit as 5. We are thus required to find out the area enclosed
              within the curve.
            </p>
            <p>
              The tabulated values of f(x) for different values of x are given
              below:
            </p>
            <img className='graph' src={Csv} alt='sheet'></img>
            <p>
              (NOTE: All the values of x and f(x) couldn’t be included in the
              screenshot since the number of rows is quite massive as the width
              has been set to 0.001)
            </p>
          </div>
          <div style={{ color: "transparent" }}>...</div>
          <div
            className='practical-button'
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <span>Trapezoidal Rule</span>
            <span>
              <i class='fa fa-chevron-right'></i>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
