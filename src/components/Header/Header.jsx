import React from 'react';
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const getMenuStyles = (openMenu) => {
    if (document.documentElement.clientWidth <= 800) {
      return {right: !openMenu && "-100%"}
    }
  }
 const handleClickScroll = (elementId) => {
   const element = document.getElementById(elementId);
   if (element) {
     console.log(element)
     element.scrollIntoView({ behavior: "smooth" });
   }
 };



    return (
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          {/* <img src="/logo.png" alt="logo" width={100} /> */}
          <div className="orange-circle" />
          <h1 className="orangeText">HavenHunt</h1>
          <OutsideClickHandler onOutsideClick={() => setOpenMenu(false)}>
            <div className=" flexCenter h-menu" style={getMenuStyles(openMenu)}>
              <a href="#" onClick={() => handleClickScroll("residencies")}>
                Residencies
              </a>
              <a href="#" onClick={() => handleClickScroll("values")}>
                Our Values
              </a>
              <a href="#" onClick={() => handleClickScroll("contact")}>
                Contact Us
              </a>
              <a href="#" onClick={() => handleClickScroll("getStarted")}>
                Get Started
              </a>
              <button
                className="button"
                onClick={() => handleClickScroll("contact")}
              >
                <a href="#">Contact</a>
              </button>
            </div>
          </OutsideClickHandler>
          <div
            className="menu-icon"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </section>
    );
}

export default Header