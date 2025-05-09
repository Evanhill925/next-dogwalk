// src/app/api/email/route.js
import { NextResponse } from "next/server"
import emailjs from "@emailjs/nodejs"

export async function POST(request) {
  try {
    // Initialize EmailJS with server side credentials
    emailjs.init({
      publicKey: process.env.EMAILJS_PUBLIC_KEY,
      privateKey: process.env.EMAILJS_PRIVATE_KEY, // This is secure here!
    })

    // Parse request body
    const body = await request.json()
    const {
      name,
      email,
      phone,
      petName,
      petType,
      serviceType,
      startDate,
      endDate,
      message,
      sendConfirmation,
    } = body

    // Send email to your account
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        reply_to: email,
        phone: phone,
        pet_name: petName,
        pet_type: petType,
        service_type: serviceType,
        start_date: startDate,
        end_date: endDate,
        message: message,
      }
    )

    // If requested, send confirmation email to customer
    if (sendConfirmation) {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_CONFIRM_TEMPLATE_ID,
        {
          name: name,
          email: email,
          petName: petName,
        }
      )
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Failed to send email:", error)
    // Return more detailed error information
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
        details: error.message,
        status: error.status,
        text: error.text
      },
      { status: 500 }
    )
  }
}
