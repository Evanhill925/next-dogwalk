"use client"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaPaw, FaClock, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa"
import "./GeneralInfo.css"
import Image from 'next/image';

const GeneralInfo = () => {
  return (
    <section id="info-section">
      <Container fluid="md" className="px-md-4 px-lg-5">
        <Row className="gx-5">
          <Col xs={12} md={12} lg={5} className="mb-5 mb-lg-0 order-2 order-lg-1">
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
          <Col xs={12} md={12} lg={7} className="order-1 order-lg-2 mb-5 mb-lg-0">
            <div className="info-image-container">
              <div className="info-image-stack">
                <div className="info-image top">
                <Image
                  src="/images/pet-sitter-1.png"
                  alt="Pet sitter with dog"
                  width={500}
                  height={300}
                  className="img-fluid"
                  priority
                />
                </div>
                <div className="info-image bottom">
                <Image
                  src="/images/pet-sitter-2.png"
                  alt="Pet sitter with cat"
                  width={500}
                  height={300}
                  className="img-fluid"
                  priority
                />
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
