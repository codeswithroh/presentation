import React from "react";
import "../../styles/Integration.css";
import "../Introduction.css";
import { Link } from "react-router-dom";
import Simp1 from "../../assets/pngs/simp/simp-1.png";
import Simp2 from "../../assets/pngs/simp/simp-2.png";
import Simp3 from "../../assets/pngs/simp/simp-3.png";
import Simp4 from "../../assets/pngs/simp/simp-4.png";
import Simp5 from "../../assets/pngs/simp/simp-5.png";
import Simp6 from "../../assets/pngs/simp/simp-6.png";
import Simp7 from "../../assets/pngs/simp/simp-7.png";
import Nav from "./Nav";
export default function IntegrationSimp() {
  return (
    <div className='integration-main'>
      <Nav />
      <div className='integration-heading'>
        <h1>Integration</h1>
      </div>
      <div className='integration-content'>
        <h2>Simpson's Rule:</h2>
        <p>
          Simpson's 1/3rd rule is also used to find the Definite integration and
          gives much more accurate result than trapezoidal rule by consuming
          less steps and executing time. The general formula for this rule is
          mentioned below:
        </p>
        <img className='graph' src={Simp1} alt='integration'></img>
        <p>Putting n = 2 in the aforementioned formula, we get</p>
        <img className='graph' src={Simp2} alt='integration'></img>
        <p>
          We will be using the above formula for implementing Simpson’s 1/3rd
          rule. Now, let the interval [a, b] be divided into n (an even number)
          equal sub-intervals by the points x0, x1, x2, …, xn, where xi = x0 +
          ih. Then
        </p>
        <img className='graph' src={Simp3} alt='integration'></img>
        <p>
          This formula is known as Simpson’s 1/3rd rule for numerical
          integration.
        </p>
        <h2>Algorithm</h2>
        <p>1. Start</p>
        <p>2. Define Function f(x)</p>
        <p>3. Input lower_limit, upper_limit, sub_interval</p>
        <p>4. h = (lower_limit - upper_limit)/sub_interval</p>
        <p>5. integration = f(lower_limit) + f(upper_limit)</p>
        <p>6. i = 1</p>
        <p>7. While i &#8249;= sub_interval</p>
        <p style={{ marginLeft: "4em" }}>If i mod 2 = 0</p>
        <p style={{ marginLeft: "4em" }}>
          integration = integration + 2 * f(k)
        </p>
        <p style={{ marginLeft: "4em" }}>Else</p>
        <p style={{ marginLeft: "4em" }}>
          integration = integration + 4 * f(k)
        </p>
        <p style={{ marginLeft: "4em" }}>i = i + 1</p>
        <p style={{ marginLeft: "4em" }}>integration = integration * h/3</p>
        <p>8. integration = integration * h/3</p>
        <p>9. Print integration as result</p>
        <p>10. Stop</p>
        <h2>OUTPUT WITH EXAMPLE:</h2>
        <p>For example, let us take the following function f(x) :</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <img className='integration-special' src={Simp4} alt='graph'></img>
          <img className='graph-special' src={Simp5} alt='graph'></img>
        </div>
        <p>
          Now, as per our program the value comes out to be 1.7574. So we need
          to check whether the result is accurate or not.
        </p>
        <p>
          The tabulated values of f(x) for different values of x are given
          below:
        </p>
        <img className='graph' src={Simp6} alt='sheet'></img>
        <p>By Simpson's 1/3rd rule, we have,</p>
        <img className='graph' src={Simp7} alt='sheet'></img>
        <p>Thus, our program is quite accurate</p>
        <h2>Citations:</h2>
        <p><a style={{color:'white'}} href="http://mathforcollege.com/nm/mws/gen/07int/mws_gen_int_txt_simpson13.pdf">● Link 1</a></p>
      </div>
      <div style={{ color: "transparent" }}>...</div>
      <Link to='others'>
        <div
          className='practical-button'
        >
          <span>Practical Use</span>
          <span>
            <i class='fa fa-chevron-right'></i>
          </span>
        </div>
      </Link>
    </div>
  );
}
