import React, { useEffect } from 'react'
import Contact from '../../components/Contact/Contact'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import HelmentContext from '../../components/HelmentContext/HelmentContext'

const ContactPage = () => {
    useEffect(() => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      })
    }, [])
  return (
    <>
    <HelmentContext 
                title="Contact Us - Madhav Tradelink"
                description="Get in touch with Madhav Tradelink for high-quality wooden products. Contact us via email at vigazwood@gmail.com or call us at +91-9953091185, +91-9716628415. Visit us at 1/38, WHS Timber Market, Kirti Nagar, Delhi -110015."
                keywords="contact us, Madhav Tradelink, wooden products, customer service, contact information, Delhi"
            />
      <Breadcrumb title="Contact Us" middle={{ url: '', text: '' }} last='Contact Us' />
      <Contact/>
    </>
  )
}

export default ContactPage