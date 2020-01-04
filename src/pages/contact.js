import React from 'react'
import Layout from '../components/reusable/layout/layout'
import ContactFormSection from '../components/page/contact/contact-form-section/contact-form-section'
import Hero from '../components/reusable/hero/hero'

const Contact = () => {
  return (
    <Layout>
      <Hero 
        title="Get in Touch"
      />
      <ContactFormSection />
    </Layout>
  )
}

export default Contact
