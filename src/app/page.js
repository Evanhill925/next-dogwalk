// src/app/page.js
"use client"

import ContactForm from "@/components/ContactForm"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import GeneralInfo from "@/components/GeneralInfo"
import Footer from "@/components/Footer"
import { BootstrapClient } from "@/utils/bootstrap"
import ResponsiveViewport from "@/components/ResponsiveViewport"

export default function Home() {
  return (
    <BootstrapClient>
      <ResponsiveViewport />
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <GeneralInfo />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </BootstrapClient>
  )
}
