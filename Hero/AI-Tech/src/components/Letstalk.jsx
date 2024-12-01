import { Container } from "react-bootstrap";
import footerimg from "../assets/AIfooter.svg";
import { Link } from "react-router-dom";
// import letsimg from '../assets/letstalk.svg'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Letstalk = () => {
  return (
    <div className="container-fluid">
      <Container className="Lets-footer" fluid>
        {/* <Link to="/Contact">
          {" "}
          <div className="lets-talk-container"></div>
        </Link> */}
        <div className="Footer">
          <div className="footer-img">
            <img src={footerimg} alt="" />
            <div className="footer-content">
              <div className="footer-icon">
                <a href="https://www.facebook.com/bfcmediacode/" target="_blank">
                  <FaFacebookF className="footer-icons fb" />
                </a>
                <a href="https://www.instagram.com/bfc.media?igsh=MTFiYngyZHNsZzBjbw==" target="_blank">
                  <FaInstagram className="footer-icons insta" />
                </a>
                <a href="https://www.linkedin.com/company/billionaire-frequency-code-media" target="_blank">
                  <FaLinkedinIn className="footer-icons linkedin" />
                </a>
                <a href="https://x.com/bfcmedia1549" target="_blank">
                  <FaXTwitter className="footer-icons twitter" />
                </a>
              </div>
              <div className="footer-media">
                <a href="tel:09840488033">
                  <FaPhone />
                  +91 9840488033
                </a>
                <a href="https://maps.app.goo.gl/V9dHSPCHy4ASWmJ97" target="_blank">
                  <FaLocationDot />
                  View On Map
                </a>
                <a href="mailto:ai.blockchain@bfc-media.com">
                  <IoMdMail /> &nbsp;ai.blockchain@bfc-media.com
                </a>
              </div>
              <div className="footer-bottom">
                <h1 className="copyright">
                  Copyright © 2024.All rights reserved.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Letstalk;
