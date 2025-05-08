import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaw,
} from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <Container className="px-md-4 px-lg-5">
          <Row>
            <Col lg={4} md={6} className="footer-contact mb-4 mb-md-0">
              <h3>Gingerella & Co</h3>
              <p>
                Professional pet sitting and dog walking services with love and
                care.
              </p>

              <div className="contact-info">
                <p>
                  <FaMapMarkerAlt className="icon" />
                  <span>123 Pet Street, Furry Town, FL 12345</span>
                </p>
                <p>
                  <FaPhone className="icon" />
                  <span>
                    <a href="tel:+11234567890">(123) 456-7890</a>
                  </span>
                </p>
                <p>
                  <FaEnvelope className="icon" />
                  <span>
                    <a href="mailto:info@pawsandwalks.com">
                      info@pawsandwalks.com
                    </a>
                  </span>
                </p>
              </div>

              <div className="social-links">
                <a href="#" className="facebook">
                  <FaFacebook />
                </a>
                <a href="#" className="instagram">
                  <FaInstagram />
                </a>
              </div>
            </Col>

            <Col lg={4} md={6} className="footer-links mb-4 mb-lg-0">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#info-section">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </Col>

            <Col lg={4} md={12} className="footer-newsletter">
              <h4>Service Areas</h4>
              <p>
                Serving the following areas with pet sitting and dog walking
                services:
              </p>
              <ul className="areas-list">
                <li>
                  <FaPaw className="paw-icon" /> Martinez
                </li>
                <li>
                  <FaPaw className="paw-icon" /> Danville
                </li>
                <li>
                  <FaPaw className="paw-icon" /> Walnut Creek
                </li>
                <li>
                  <FaPaw className="paw-icon" /> San Ramon
                </li>
                <li>
                  <FaPaw className="paw-icon" /> Pleasant Hill
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container className="px-md-4 px-lg-5">
          <div className="copyright">
            &copy; {currentYear} <strong>Gingerella & Co</strong>. All Rights
            Reserved
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
