"use client"
import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import {
  FaWalking,
  FaHome,
  FaDog,
  FaCat,
  FaBriefcaseMedical,
  FaHeart,
} from "react-icons/fa"
import "./Services.css"

const Services = () => {
  const services = [
    {
      icon: <FaWalking className="service-icon" />,
      title: "Dog Walking",
      description:
        "Regular walks tailored to your dog's energy level and needs",
      color: "blue",
    },
    {
      icon: <FaHome className="service-icon" />,
      title: "Pet Sitting",
      description: "In-home care for your pets while you're away",
      color: "pink",
    },
    {
      icon: <FaDog className="service-icon" />,
      title: "Puppy Care",
      description:
        "Special care for young puppies including potty breaks and playtime",
      color: "blue",
    },
    {
      icon: <FaCat className="service-icon" />,
      title: "Cat Visits",
      description:
        "Feeding, litter box cleaning, and play time for your feline friends",
      color: "pink",
    },
    {
      icon: <FaBriefcaseMedical className="service-icon" />,
      title: "Medication Administration",
      description: "Safe and timely administration of prescribed medications",
      color: "blue",
    },
    {
      icon: <FaHeart className="service-icon" />,
      title: "Special Needs Care",
      description: "Tender loving care for elderly or special needs pets",
      color: "pink",
    },
  ]

  return (
    <section id="services" className="services-section">
      <Container fluid="md" className="px-md-4 px-lg-5">
        <div className="section-title text-center mb-5">
          <h2>My Services</h2>
          <p className="mx-auto" style={{ maxWidth: "700px", position: "relative", zIndex: 11 }}>
            Comprehensive pet care services to meet your furry friend's needs
          </p>
        </div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col xs={12} sm={6} lg={4} key={index} className="mb-4">
              <Card className={`service-card service-${service.color} h-100`}>
                <div className="service-icon-wrapper">{service.icon}</div>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Services
