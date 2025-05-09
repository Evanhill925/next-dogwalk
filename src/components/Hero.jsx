"use client"
import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import "./Hero.css"
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero-section">
      <Container fluid="md" className="px-md-4 px-lg-5">
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md={12} lg={6} className="hero-text px-4 px-md-5 mb-5 mb-lg-0">
            <h1 className="hero-title">Professional & Loving Pet Care</h1>
            <p className="hero-subtitle">
              Providing your furry family members with the care and attention
              they deserve
            </p>
            <div className="hero-buttons">
              <Button
                href="#services"
                className="primary-btn mb-3 mb-md-0"
                style={{ position: "relative", zIndex: 3 }}
              >
                My Services
              </Button>
              <Button
                href="#contact"
                className="secondary-btn"
                style={{ position: "relative", zIndex: 3 }}
              >
                Book Now
              </Button>
            </div>
          </Col>
          <Col xs={12} md={12} lg={5} className="hero-image-container">
            <div className="hero-image-wrapper">
              <Image
                src="/images/dog-walking1.jpg"
                alt="Dog"
                width={600}
                height={800}
                className="hero-image img-fluid"
                priority
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                  maxHeight: '600px'
                }}
                fill={false}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#FFECF2"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,138.7C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
