import React from "react";
import "../../styles/Differentiation.css";
import "../Introduction.css";
import Graph from "../../assets/pngs/graph.png";
import Csv from "../../assets/pngs/diff-csv.png";
import { Link } from "react-router-dom";
export default function Differentiation() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className='differentiation-main'>
      <div className='differentiation-heading'>
        <h1>Differentiation</h1>
      </div>
      <div className='differentiation-content'>
        <h2>Introduction:</h2>
        <p>
          Differentiating a function at any given point essentially means
          measuring the slope of the given function at that particular point
          say, x. Since the slope cannot be calculated for just a point, we
          consider two other points x - dx and x + dx. Here dx is very small
          say, 0.0001. Now, using the slope formula we can easily find out the
          derivative.
        </p>
        <p>We consider y = f(x) where f(x) = sin x.</p>
        <p>Hence, y1 = sin(x - dx) and y2 = sin (x + dx)</p>
        <p style={{ whiteSpace: "nowrap" }}>
          Using the slope formula: m = (y2 -y1)/((x + dx)-(x - dx)) = (y2 -
          y1)/2dx
        </p>
        <p>This is the formula that we will be using in our C program.</p>
        <h2>Algorithm</h2>
        <p>1. Start</p>
        <p>2. Input x</p>
        <p>3. Set h = 0.001 // h is our dx here</p>
        <p>4. y = sin x</p>
        <p>5. y1 = sin (x - h)</p>
        <p>6. y2 = sin (x + h)</p>
        <p>7. first = (y2 - y1) / 2h</p>
        <p>8. second = (y1 - 2y + y2) / h2</p>
        <p>9. Print first and second as results</p>
        <p>10. Stop</p>
        <p>
          Now, if we are required to find the slope between two given points
          say, x1 and x2 then we can just replace sin (x - h) with sin x1 and
          sin (x + h) with sin x2.{" "}
        </p>
        <h2>OUTPUT WITH EXAMPLE:</h2>
        <p>
          In our particular problem we have taken function f(x) to be sin x :
        </p>
        <img className='graph' src={Graph} alt='graph'></img>
        <p>
          In our case, we have taken all values of x ranging from 0 to 10 and
          presented the values in a tabular format. We know for a fact that the
          derivative of sin x is cos x. Now, the orange line in the
          aforementioned graph does resemble a cosine function and the gray line
          also resembles a negative sine function but, to be crystal clear we
          have reused the code. Only this time we have taken one particular
          point to check whether the result coincides with the one that we
          obtained in the table.
        </p>
        <img className='graph' src={Csv} alt='sheet'></img>
        <p>
          (NOTE: All the values couldn’t be included in the screenshot since the
          number of rows is quite massive as the difference between two
          consecutive values of x is only 0.01)
        </p>
      </div>
      <div style={{ color: "transparent" }}>...</div>
      <Link to='/integration'>
        <div onClick={handleClick} className='integration-button'>
          <span>Integration</span>
          <span>
            <i class='fa fa-chevron-right'></i>
          </span>
        </div>
      </Link>
    </div>
  );
}
