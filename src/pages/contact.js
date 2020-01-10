import React from 'react'
import Layout from '../components/reusable/layout/layout'
import ContactFormSection from '../components/page/contact/contact-form-section/contact-form-section'
import Hero from '../components/reusable/hero/hero'
import SEO from '../components/reusable/seo/seo'

const Contact = () => {
  return (
    <Layout>
      <SEO 
        title="Contact"
      />
      <Hero 
        title="Get in Touch"
      />
      <ContactFormSection />
    </Layout>
  )
}

export default Contact
