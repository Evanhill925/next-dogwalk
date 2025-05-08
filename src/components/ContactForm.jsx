// import React, { useState, useEffect } from "react"
// import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
// import { FaPaw } from "react-icons/fa"
// import "./ContactForm.css"
// import emailjs from "@emailjs/browser"

// const ContactForm = () => {
//   const [validated, setValidated] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     petName: "",
//     petType: "Dog",
//     serviceType: "",
//     startDate: "",
//     endDate: "",
//     message: "",
//   })
//   const [showSuccess, setShowSuccess] = useState(false)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [dateError, setDateError] = useState("")

//   // Get today's date in YYYY-MM-DD format for date input min attribute
//   const today = new Date().toISOString().split("T")[0]

//   useEffect(() => {
//     // Initialize EmailJS
//     emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
//   }, [])

//   // Clear date error when dates change
//   useEffect(() => {
//     setDateError("")
//   }, [formData.startDate, formData.endDate])

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }))

//     // Validate end date when start date changes
//     if (name === "startDate" && formData.endDate && value > formData.endDate) {
//       setDateError("End date cannot be earlier than start date")
//     }

//     // Validate end date when it changes
//     if (
//       name === "endDate" &&
//       formData.startDate &&
//       value < formData.startDate
//     ) {
//       setDateError("End date cannot be earlier than start date")
//     }
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     const form = event.currentTarget

//     // Additional date validation before submission
//     if (formData.endDate < formData.startDate) {
//       setDateError("End date cannot be earlier than start date")
//       event.stopPropagation()
//       return
//     }

//     const sendConfirmationEmail = () => {
//       return emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_CONFIRM_TEMPLATE_ID,
//         {
//           name: formData.name,
//           email: formData.email,
//           petName: formData.petName,
//         }
//       )
//     }

//     if (form.checkValidity() === false) {
//       event.stopPropagation()
//       setValidated(true)
//       return
//     }

//     setIsSubmitting(true)

//     // EmailJS service
//     emailjs
//       .send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: formData.name,
//           reply_to: formData.email,
//           phone: formData.phone,
//           pet_name: formData.petName,
//           pet_type: formData.petType,
//           service_type: formData.serviceType,
//           start_date: formData.startDate,
//           end_date: formData.endDate,
//           message: formData.message,
//         }
//       )
//       .then((response) => {
//         console.log("Email sent successfully:", response)
//         setShowSuccess(true)
//         sendConfirmationEmail()

//         // Reset form after submission
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           petName: "",
//           petType: "Dog",
//           serviceType: "",
//           startDate: "",
//           endDate: "",
//           message: "",
//         })

//         // Hide success message after 5 seconds
//         setTimeout(() => {
//           setShowSuccess(false)
//         }, 5000)
//       })
//       .catch((error) => {
//         console.error("Failed to send email:", error)
//         // Handle error (add error state and display error message)
//       })
//       .finally(() => {
//         setIsSubmitting(false)
//         setValidated(true)
//       })
//   }

//   return (
//     <section id="contact" className="contact-section">
//       <Container className="px-md-4 px-lg-5">
//         <div className="section-title">
//           <h2>Book a Service</h2>
//           <p>
//             Need a pet sitter or dog walker? Fill out the form below and I'll
//             get back to you shortly!
//           </p>
//         </div>

//         <Row className="justify-content-center">
//           <Col lg={10}>
//             <div className="contact-form-wrapper">
//               <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group className="mb-4" controlId="name">
//                       <Form.Label>Your Name</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Enter your full name"
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Please provide your name.
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group className="mb-4" controlId="email">
//                       <Form.Label>Email Address</Form.Label>
//                       <Form.Control
//                         required
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email"
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Please provide a valid email.
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Col>
//                 </Row>

//                 <Row>
//                   <Col md={6}>
//                     <Form.Group className="mb-4" controlId="phone">
//                       <Form.Label>Phone Number</Form.Label>
//                       <Form.Control
//                         required
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="Enter your phone number"
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Please provide your phone number.
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group className="mb-4" controlId="petName">
//                       <Form.Label>{`Pet's Name(s)`}</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         name="petName"
//                         value={formData.petName}
//                         onChange={handleChange}
//                         placeholder="Enter your pet's name"
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Please provide your pet's name.
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Col>
//                 </Row>

//                 <Row>
//                   <Col md={6}>
//                     <Form.Group className="mb-4" controlId="petType">
//                       <Form.Label>Pet Type</Form.Label>
//                       <Form.Select
//                         required
//                         name="petType"
//                         value={formData.petType}
//                         onChange={handleChange}
//                       >
//                         <option value="Dog">Dog</option>
//                         <option value="Cat">Cat</option>
//                         <option value="Both">Both (Dog & Cat)</option>
//                         <option value="Other">Other</option>
//                       </Form.Select>
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group className="mb-4" controlId="serviceType">
//                       <Form.Label>Service Needed</Form.Label>
//                       <Form.Select
//                         required
//                         name="serviceType"
//                         value={formData.serviceType}
//                         onChange={handleChange}
//                       >
//                         <option value="">Select service</option>
//                         <option value="Dog Walking">Dog Walking</option>
//                         <option value="Pet Sitting">Pet Sitting</option>
//                         <option value="Pet Sitting O">
//                           Pet Sitting(Overnight)
//                         </option>
//                         <option value="Puppy Care">Puppy Care</option>
//                         <option value="Cat Visits">Cat Visits</option>
//                         <option value="Medication Administration">
//                           Medication Administration
//                         </option>
//                         <option value="Special Needs Care">
//                           Special Needs Care
//                         </option>
//                       </Form.Select>
//                       <Form.Control.Feedback type="invalid">
//                         Please select a service.
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Col>
//                 </Row>

//                 <Row>
//                   <Col md={6}>
//                     <Form.Group className="mb-4" controlId="startDate">
//                       <Form.Label>Start Date</Form.Label>
//                       <Form.Control
//                         required
//                         type="date"
//                         name="startDate"
//                         value={formData.startDate}
//                         onChange={handleChange}
//                         min={today}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Please select a start date.
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Col>

//                   <Col md={6}>
//                     <Form.Group className="mb-4" controlId="endDate">
//                       <Form.Label>End Date</Form.Label>
//                       <Form.Control
//                         required
//                         type="date"
//                         name="endDate"
//                         value={formData.endDate}
//                         onChange={handleChange}
//                         min={formData.startDate || today}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Please select an end date.
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Col>
//                 </Row>

//                 {dateError && (
//                   <Row>
//                     <Col>
//                       <Alert variant="danger" className="mb-4">
//                         {dateError}
//                       </Alert>
//                     </Col>
//                   </Row>
//                 )}

//                 <Form.Group className="mb-4" controlId="message">
//                   <Form.Label>Additional Details</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={4}
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Please provide any additional details about your pet's needs, schedule preferences, or special requirements"
//                   />
//                 </Form.Group>
//                 <div className="text-center">
//                   <Button
//                     type="submit"
//                     className="submit-btn"
//                     disabled={isSubmitting || !!dateError}
//                   >
//                     {isSubmitting ? "Sending..." : "Submit Request"}
//                   </Button>
//                 </div>
//               </Form>
//               {showSuccess && (
//                 <Alert
//                   variant="success"
//                   onClose={() => setShowSuccess(false)}
//                   dismissible
//                 >
//                   <div className="d-flex align-items-center">
//                     <FaPaw className="me-2" />
//                     <span>
//                       Thank you! Your request has been submitted successfully.
//                     </span>
//                   </div>
//                 </Alert>
//               )}
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <div className="contact-wave">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//           <path
//             fill="#D6F0FA"
//             fillOpacity="1"
//             d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           ></path>
//         </svg>
//       </div>
//     </section>
//   )
// }

// export default ContactForm
"use client"
import React, { useState, useEffect } from "react"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import { FaPaw } from "react-icons/fa"
// No need to import EmailJS here as we'll use our backend API

const ContactForm = () => {
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    petType: "Dog",
    serviceType: "",
    startDate: "",
    endDate: "",
    message: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [dateError, setDateError] = useState("")

  // Get today's date in YYYY-MM-DD format for date input min attribute
  const today = new Date().toISOString().split("T")[0]

  // Clear date error when dates change
  useEffect(() => {
    setDateError("")
  }, [formData.startDate, formData.endDate])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    // Validate end date when start date changes
    if (name === "startDate" && formData.endDate && value > formData.endDate) {
      setDateError("End date cannot be earlier than start date")
    }

    // Validate end date when it changes
    if (
      name === "endDate" &&
      formData.startDate &&
      value < formData.startDate
    ) {
      setDateError("End date cannot be earlier than start date")
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget

    // Additional date validation before submission
    if (formData.endDate < formData.startDate) {
      setDateError("End date cannot be earlier than start date")
      event.stopPropagation()
      return
    }

    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
      return
    }

    setIsSubmitting(true)

    try {
      // Call our secure backend API instead of EmailJS directly
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sendConfirmation: true, // Tell backend to also send confirmation email
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email")
      }

      console.log("Email sent successfully:", data)
      setShowSuccess(true)

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        petName: "",
        petType: "Dog",
        serviceType: "",
        startDate: "",
        endDate: "",
        message: "",
      })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Failed to send email:", error)
      // Handle error (add error state and display error message)
    } finally {
      setIsSubmitting(false)
      setValidated(true)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <Container className="px-md-4 px-lg-5">
        <div className="section-title">
          <h2>Book a Service</h2>
          <p>
            Need a pet sitter or dog walker? Fill out the form below and I'll
            get back to you shortly!
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="contact-form-wrapper">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4" controlId="name">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4" controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4" controlId="phone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your phone number.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4" controlId="petName">
                      <Form.Label>{`Pet's Name(s)`}</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="petName"
                        value={formData.petName}
                        onChange={handleChange}
                        placeholder="Enter your pet's name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your pet's name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4" controlId="petType">
                      <Form.Label>Pet Type</Form.Label>
                      <Form.Select
                        required
                        name="petType"
                        value={formData.petType}
                        onChange={handleChange}
                      >
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Both">Both (Dog & Cat)</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4" controlId="serviceType">
                      <Form.Label>Service Needed</Form.Label>
                      <Form.Select
                        required
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                      >
                        <option value="">Select service</option>
                        <option value="Dog Walking">Dog Walking</option>
                        <option value="Pet Sitting">Pet Sitting</option>
                        <option value="Pet Sitting O">
                          Pet Sitting(Overnight)
                        </option>
                        <option value="Puppy Care">Puppy Care</option>
                        <option value="Cat Visits">Cat Visits</option>
                        <option value="Medication Administration">
                          Medication Administration
                        </option>
                        <option value="Special Needs Care">
                          Special Needs Care
                        </option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        Please select a service.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4" controlId="startDate">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        min={today}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please select a start date.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-4" controlId="endDate">
                      <Form.Label>End Date</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        min={formData.startDate || today}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please select an end date.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {dateError && (
                  <Row>
                    <Col>
                      <Alert variant="danger" className="mb-4">
                        {dateError}
                      </Alert>
                    </Col>
                  </Row>
                )}

                <Form.Group className="mb-4" controlId="message">
                  <Form.Label>Additional Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide any additional details about your pet's needs, schedule preferences, or special requirements"
                  />
                </Form.Group>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting || !!dateError}
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </Button>
                </div>
              </Form>
              {showSuccess && (
                <Alert
                  variant="success"
                  onClose={() => setShowSuccess(false)}
                  dismissible
                >
                  <div className="d-flex align-items-center">
                    <FaPaw className="me-2" />
                    <span>
                      Thank you! Your request has been submitted successfully.
                    </span>
                  </div>
                </Alert>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="contact-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#D6F0FA"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default ContactForm
