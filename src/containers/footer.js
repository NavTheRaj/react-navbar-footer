import React from "react";
import Footer from "../components/footer";
import Icon from '../components/icons';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
          <Footer.Row>
          <Footer.Column>
            <Footer.Title>Pages</Footer.Title>
            <Footer.Link href="#">About Us</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
            <Footer.Link href="#">Careers</Footer.Link>
            <Footer.Link href="#">Location</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Software</Footer.Link>
            <Footer.Link href="#">Web Apps</Footer.Link>
            <Footer.Link href="#">Digital Marketing</Footer.Link>
            <Footer.Link href="#">IT Consult</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Find Us</Footer.Title>
            <Footer.Link href="#">About Us</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
            <Footer.Link href="#">Careers</Footer.Link>
            <Footer.Link href="#">Location</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Contact</Footer.Title>
            <Footer.Link href="#"><Icon className="fab fa-youtube"/>Youtube</Footer.Link>
            <Footer.Link href="#"><Icon className="fab fa-facebook-f"/>Facebook</Footer.Link>
            <Footer.Link href="#"><Icon className="fab fa-twitter"/>Twitter</Footer.Link>
            <Footer.Link href="#"><Icon className="fab fa-instagram"/>Instagram</Footer.Link>
          </Footer.Column>

          </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
 