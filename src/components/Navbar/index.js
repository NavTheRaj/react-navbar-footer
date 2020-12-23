import React from "react";
import logo from '../../images/logo_prisma.png';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
            <img src={logo} style={{height:'65px',width:'60px'}}/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About Us
          </NavLink>

          <NavLink to="/services" activeStyle>
            Services
          </NavLink>

          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>

          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>

        {/* <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
