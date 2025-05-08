// // src/app/page.js
// "use client" // Add this if your component uses React hooks or state

// import YourMainComponent from "@/components/YourMainComponent"

// export default function Home() {
//   return <YourMainComponent />
// }

import ContactForm from "@/components/ContactForm"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import GeneralInfo from "@/components/GeneralInfo"
import Footer from "@/components/Footer"

export default function Home() {
  return (
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
  )
}
