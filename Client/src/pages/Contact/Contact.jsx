import React from 'react'
import ContactBanner from './ContactBanner'
import ContactForm from './ContactForm'
import ContactMap from './ContactMap'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <ContactForm />
      <ContactMap />
      <Footer />
    </>
  )
}

export default Contact