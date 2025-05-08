import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaPaw, FaClock, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa"
import "./GeneralInfo.css"
import dogImage1 from "../assets/pet-sitter-1.png"
import dogImage2 from "../assets/pet-sitter-2.png"

const GeneralInfo = () => {
  return (
    <section id="info-section">
      <Container className="px-md-4 px-lg-5">
        <Row>
          <Col lg={4} className="mb-5 mb-lg-0">
            <div className="info-content">
              <h2 className="info-title">
                Professional Pet Care You Can Trust
              </h2>
              <p className="info-text">
                With over 6 years of experience as a veterinary technician, I
                provide professional, reliable, and compassionate care for pets
                of all shapes and sizes. My expertise ensures your furry family
                members receive the attention and support they deserve,
              </p>
              <p className="info-text">
                CPR and first-aid certified, I treat each pet as if they were my
                own, ensuring they receive the attention, exercise, and
                affection they deserve.
              </p>

              <div className="info-features">
                <div className="info-feature">
                  <div className="info-icon-wrapper blue">
                    <FaPaw className="info-icon" />
                  </div>
                  <div className="info-feature-text">
                    <h4>Experienced & Professional</h4>
                    <p>Caring for pets with love and expertise</p>
                  </div>
                </div>
                <div className="info-feature">
                  <div className="info-icon-wrapper pink">
                    <FaClock className="info-icon" />
                  </div>
                  <div className="info-feature-text">
                    <h4>Flexible Scheduling</h4>
                    <p>Morning, afternoon, and evening availability</p>
                  </div>
                </div>
                <div className="info-feature">
                  <div className="info-icon-wrapper blue">
                    <FaMapMarkerAlt className="info-icon" />
                  </div>
                  <div className="info-feature-text">
                    <h4>Serving Local Areas</h4>
                    <p>Providing services within a 12-mile radius</p>
                  </div>
                </div>
                <div className="info-feature">
                  <div className="info-icon-wrapper pink">
                    <FaShieldAlt className="info-icon" />
                  </div>
                  <div className="info-feature-text">
                    <h4>Fully Insured & Certified</h4>
                    <p>For your peace of mind and pet's safety</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="info-image-container">
              <div className="info-image-stack">
                <div className="info-image top">
                  <img src={dogImage1} alt="Pet sitter with dog" />
                </div>
                <div className="info-image bottom">
                  <img src={dogImage2} alt="Pet sitter with cat" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default GeneralInfo
