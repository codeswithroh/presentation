import React from "react";
import "../../styles/Integration.css";
import "../Introduction.css";
import IntegrationSimp from './Integration-Simp';
import Trape1 from "../../assets/pngs/trape/trape-1.png";
import Trape2 from "../../assets/pngs/trape/trape-2.png";
import Trape3 from "../../assets/pngs/trape/trape-3.png";
import Trape4 from "../../assets/pngs/trape/trape-4.png";
import Trape5 from "../../assets/pngs/trape/trape-5.png";
import Trape6 from "../../assets/pngs/trape/trape-6.png";
import Trape7 from "../../assets/pngs/trape/trape-7.png";
import { useState } from "react";
export default function IntegrationTrape() {
  const [nextnext, setNextNext] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setNextNext(true);
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  };
  return (
    <div>
      {nextnext ? (
        <IntegrationSimp></IntegrationSimp>
      ) : (
        <div className='integration-main'>
          <div className='integration-heading'>
            <h1>Integration</h1>
          </div>
          <div className='integration-content'>
            <h2>Trapezoidal Rule:</h2>
            <p>
              Trapezoidal rule is used for the purpose of Definite integration
              that helps make the coding easier The general formula for this
              rule is mentioned below:
            </p>
            <img className='graph' src={Trape1} alt='integration'></img>
            <p>Putting n = 1 in the aforementioned formula, we get</p>
            <img className='graph' src={Trape2} alt='integration'></img>
            <p>
              <span>
                Let the interval [a, b] be divided into n equal sub-intervals by
                the points a = x0 &#8249; x1 &#8249; x2 &#8249; … &#8249; xn =
                b, where xi = x0 + ih, i = 1, 2, 3,…, n. Applying the
                trapezoidal rule to each of the sub-intervals, one can find the
                formula as
              </span>
            </p>
            <img className='graph' src={Trape3} alt='integration'></img>
            <h2>Algorithm</h2>
            <p>1. Start</p>
            <p>2. Define Function f(x)</p>
            <p>3. Input lower_limit, upper_limit, sub_interval</p>
            <p>4. h = (lower_limit - upper_limit)/sub_interval</p>
            <p>5. integration = f(lower_limit) + f(upper_limit)</p>
            <p>6. i = 1</p>
            <p>7. While i &#8249;= sub_interval</p>
            <p style={{ marginLeft: "4em" }}>k = lower_limit + i * h</p>
            <p style={{ marginLeft: "4em" }}>
              integration = integration + 2*f(k) i = i+1
            </p>
            <p>8. integration = integration * h/2</p>
            <p>9. Print integration as result</p>
            <p>10. Stop</p>
            <h2>OUTPUT WITH EXAMPLE:</h2>
            <p>For example, let us take the following function f(x) :</p>
            <div style={{display:'flex' , flexDirection:'column', gap:'1em'}}>
                <img className='integration-special' src={Trape4} alt='graph'></img>
                <img className='graph-special' src={Trape5} alt='graph'></img>
            </div>
            <p>
              Now, as per our program the value comes out to be 0.8479. So we
              need to check whether the result is correct or not.
            </p>
            <p>
              The tabulated values of f(x) for different values of x are given
              below:
            </p>
            <img className='graph' src={Trape6} alt='sheet'></img>
            <p>By Trapezoidal rule, we have,</p>
            <img className='graph' src={Trape7} alt='sheet'></img>
            <p>Thus, our program is quite accurate</p>
          </div>
          <div style={{ color: "transparent" }}>...</div>
          <div
            className='practical-button'
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <span>Simpson's Rule</span>
            <span>
              <i class='fa fa-chevron-right'></i>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
