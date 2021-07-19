import React, { useEffect } from "react";
import "../../styles/Integration.css";
import "../Introduction.css";
import { Link } from "react-router-dom";
import Prac1 from "../../assets/pngs/prac/prac-1.png";
import Prac2 from "../../assets/pngs/prac/prac-2.png";
import Prac3 from "../../assets/pngs/prac/prac-3.png";
import Prac4 from "../../assets/pngs/prac/prac-4.png";
import Prac5 from "../../assets/pngs/prac/prac-5.png";
import Prac6 from "../../assets/pngs/prac/prac-6.png";
import Prac7 from "../../assets/pngs/prac/prac-7.png";
import Prac8 from "../../assets/pngs/prac/prac-8.png";
import Prac9 from "../../assets/pngs/prac/prac-9.png";
import Nav from "./Nav";

export default function Others() {
  useEffect(()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  },[])
  return (
    <div className='integration-main'>
      <Nav />
      <div className='integration-heading'>
        <h1>Practical Uses</h1>
      </div>
      <div className='integration-content'>
        <p>
          Like mentioned before numerical analysis is just a method to make
          really close approximations which is why it finds several uses in
          fields of science and engineering where solving equations by normal
          procedures becomes painful. Some of such uses are as follows :
        </p>
        <p>1. Finding areas and volumes</p>
        <p>
          Historically one of the first uses of this method was done by the
          ancient Babylonians who used the trapezoidal rule to integrate the
          motion of Jupiter along the ecliptic. They called it the Quadrature
          (which means to calculate area)
        </p>
        <img className='graph' src={Prac1} alt='integration'></img>
        <p>
          It was also used to find the design of SWATH (Small Waterplane Area
          Twin Hull) which is actually a ship design that minimizes the hull
          cross sectional area and the ship’s volume at the sea surface where
          the wave energy is located and thus maximizes the stability at high
          seas and high speeds
        </p>
        <img className='graph' src={Prac2} alt='integration'></img>
        <p>
          2. It was used to design famous architectures like THE PETRONAS TOWERS
          and THE SYDNEY OPERA HOUSE.
        </p>
        <img className='graph' src={Prac3} alt='integration'></img>
        <p style={{ textAlign: "center" }}>THE SYDNEY OPERA HOUSE</p>
        <img className='graph' src={Prac4} alt='integration'></img>
        <p style={{ textAlign: "center" }}>THE PETRONAS TOWER</p>
        <p>
          3. Sampling is basically the reduction of a continuous-time signal to
          a discrete-time signal. The original signal is retrievable from a
          sequence of samples. This conversion is very essential in digital
          communication. At the receiving end where we want to obtain the
          original signal we need to integrate these sequenced samples and since
          the integrand f(x) is known only at certain points and is not
          continuous we use numerical integration to solve it
        </p>
        <img className='graph' src={Prac5} alt='graph'></img>
        <p>4. Weather Forecasting</p>
        <p>
          We first record the initial conditions
          (temperature,humidity,pressure,etc) of a place with the help of
          satellites and observe how it changes over a period of time. We then
          mathematically model the scenario with a bunch of differential
          equations and to predict the future weather we need to solve them
          which can prove to be very difficult or impossible without the help of
          numerical methods
        </p>
        <img className='graph' src={Prac6} alt='graph'></img>
        <p>5. Bayes Theorem</p>
        <img className='graph' src={Prac7} alt='integration'></img>
        <p>
          Estimating the integral in the denominator can be a serious problem in
          machine learning algorithms where the probability distributions can
          take complex forms. Thus, approximate and randomized integrations
          prove to be helpful.
        </p>
        <p>6. Radar Guns</p>
        <p>
          When it is pointed and fired at a car on a highway. The gun determines
          the time and the distance at which the radar hits the moving car and
          with the help of numerical differentiation the speed of the car can be
          estimated
        </p>
        <img className='graph' src={Prac8} alt='sheet'></img>
        <p>7. Analyze Data</p>
        <p>
          It can be employed to analyze the graphed datas of big corporations
          and estimate their profit and losses.
        </p>
        <img className='graph' src={Prac9} alt='sheet'></img>
        <p>Thus, our program is quite accurate</p>
        <h2>Citations:</h2>
        <p>●	<a style={{color:'white'}} href="https://en.wikipedia.org/wiki/Sampling_(signal_processing)">Sampling (signal processing) - Wikipedia</a></p>
      </div>
      <div style={{ color: "transparent" }}>...</div>
      <Link to='members'>
        <div className='practical-button'>
          <span>Members</span>
          <span>
            <i class='fa fa-chevron-right'></i>
          </span>
        </div>
      </Link>
    </div>
  );
}
