import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper" id='footer'>
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <span className='orangeText'>HavenHunt</span>
          <span className="secondaryText">
            Our vision is to make available, homes for everyone
            <br /> at affordable rates{" "}
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Address</span>
          <span className="secondaryText">DD1 Magodo, Lagos Nigeria</span>
         
        </div>
      </div>
    </section>
  );
}

export default Footer