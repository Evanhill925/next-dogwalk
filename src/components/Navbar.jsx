// import React, { useState } from "react"
// import { Navbar, Nav, Container } from "react-bootstrap"
// import { Link } from "react-router-dom"
// import "./Navbar.css"

// const Navigation = () => {
//   const [expanded, setExpanded] = useState(false)

//   return (
//     <Navbar
//       expanded={expanded}
//       expand="lg"
//       className="navbar-custom"
//       fixed="top"
//     >
//       <Container>
//         <Navbar.Brand as={Link} to="/" className="brand">
//           <span className="brand-name fs-1">Gingerella & Co</span>
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           onClick={() => setExpanded(expanded ? false : "expanded")}
//         />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto" onClick={() => setExpanded(false)}>
//             <Nav.Link as={Link} to="/" className="nav-link">
//               Home
//             </Nav.Link>
//             <Nav.Link as={Link} to="services" className="nav-link">
//               Services
//             </Nav.Link>
//             <Nav.Link as={Link} to="/about" className="nav-link">
//               About
//             </Nav.Link>
//             <Nav.Link as={Link} to="/contact" className="nav-link contact-btn">
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

// export default Navigation
"use client"
import React, { useState } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import "./Navbar.css"

const Navigation = () => {
  const [expanded, setExpanded] = useState(false)

  const closeNav = () => setExpanded(false)

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    closeNav()

    // Handle "Home" specially - scroll to top
    if (sectionId === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return
    }

    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className="navbar-custom"
      fixed="top"
      collapseOnSelect
    >
      <Container fluid="md">
        <Navbar.Brand
          href="#"
          className="brand"
          onClick={() => scrollToSection("top")}
        >
          <span className="brand-name">Gingerella & Co</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#"
              className="nav-link"
              onClick={() => scrollToSection("top")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#services"
              className="nav-link"
              onClick={() => scrollToSection("services")}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#info-section"
              className="nav-link"
              onClick={() => scrollToSection("info-section")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="nav-link contact-btn"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
