"use client"
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
        <Container fluid="md" className="px-md-4 px-lg-5">
          <Row className="gy-4">
            <Col xs={12} md={6} lg={4} className="footer-contact mb-4 mb-md-0">
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

              <div className="social-links mt-3">
                <a href="#" className="facebook me-3">
                  <FaFacebook />
                </a>
                <a href="#" className="instagram">
                  <FaInstagram />
                </a>
              </div>
            </Col>

            <Col xs={12} md={6} lg={4} className="footer-links mb-4 mb-lg-0">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#">Home</a>
                </li>
                <li className="mb-2">
                  <a href="#services">Services</a>
                </li>
                <li className="mb-2">
                  <a href="#info-section">About</a>
                </li>
                <li className="mb-2">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </Col>

            <Col xs={12} md={12} lg={4} className="footer-newsletter">
              <h4>Service Areas</h4>
              <p>
                Serving the following areas with pet sitting and dog walking
                services:
              </p>
              <Row className="areas-list">
                <Col xs={6} sm={4} lg={6}>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <FaPaw className="paw-icon" /> Martinez
                    </li>
                    <li className="mb-2">
                      <FaPaw className="paw-icon" /> Danville
                    </li>
                    <li className="mb-2">
                      <FaPaw className="paw-icon" /> Walnut Creek
                    </li>
                  </ul>
                </Col>
                <Col xs={6} sm={4} lg={6}>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <FaPaw className="paw-icon" /> San Ramon
                    </li>
                    <li className="mb-2">
                      <FaPaw className="paw-icon" /> Pleasant Hill
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom mt-4">
        <Container fluid="md" className="px-md-4 px-lg-5">
          <div className="copyright text-center py-3">
            &copy; {currentYear} <strong>Gingerella & Co</strong>. All Rights
            Reserved
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
