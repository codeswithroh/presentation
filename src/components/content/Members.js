import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Members.css";
export default function Member() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className='member-container'>
      <div className='member-heading'>
        <h1>Members</h1>
      </div>
      <div className='member-card-container'>
        <div className='member-card'>
          <div className='member-pic1'></div>
          <div className='member-name'>Sanjana Dey</div>
          <div className='member-role'>Content Creator</div>
        </div>
        <div className='member-card'>
          <div className='member-pic2'></div>
          <div className='member-name'>Indradeep Thakur</div>
          <div className='member-role'>UI/UX Designer</div>
        </div>
        <div className='member-card'>
          <div className='member-pic3'></div>
          <div className='member-name'>Amrita Dutt</div>
          <div className='member-role'>Content Creator</div>
        </div>
        <div className='member-card'>
          <div className='member-pic4'></div>
          <div className='member-name'>Ayush Bose</div>
          <div className='member-role'>Content Creator</div>
        </div>
        <div className='member-card'>
          <div className='member-pic'></div>
          <div className='member-name'>Rohit Purkait</div>
          <div className='member-role'>Web Developer</div>
        </div>
      </div>
      <Link to='farewell'>
        <div className='farewell-button'>
          <span>Thank You</span>
          <span>
            <i class='fa fa-chevron-right'></i>
          </span>
        </div>
      </Link>
    </div>
  );
}
