import React from "react";
import "../../styles/History.css";
import "../Introduction.css";
import { Link } from "react-router-dom";
export default function History() {
  return (
    <div className='history-main'>
      <div className='history-heading'>
        <h1>History</h1>
      </div>
      <div className='history-content'>
        <p>
          Numerical algorithms are at least as old as the Egyptian Rhind papyrus
          (c. 1650 BC), which describes a root-finding method for solving a
          simple equation. Ancient Greek mathematicians made many further
          advancements in numerical methods. In particular, Eudoxus of Cnidus
          (c. 400–350 BC) created and Archimedes (c. 285–212/211 BC) perfected
          the method of exhaustion for calculating lengths, areas, and volumes
          of geometric figures. When used as a method to find approximations, it
          is in much in the spirit of modern numerical integration and
          differentiation; and it was an important precursor to the development
          of calculus by Isaac Newton (1642–1727) and Gottfried Leibniz
          (1646–1716).
        </p>
      </div>
      <div style={{color:"transparent"}}>...</div>
      <Link to='/differentiation'>
        <div className='differentiation-button'>
          <span>Differentiation</span>
          <span>
            <i class='fa fa-chevron-right'></i>
          </span>
        </div>
      </Link>
    </div>
  );
}
