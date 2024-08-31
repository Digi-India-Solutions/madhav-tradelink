import React, { useEffect } from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import About from '../../components/About/About'
import HelmentContext from '../../components/HelmentContext/HelmentContext'

const AboutusPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <>
    <HelmentContext
                title="About Us - Madhav Tradelink"
                description="Learn more about Madhav Tradelink, a reputed manufacturer of high-quality wooden products established in 1976. We specialize in wooden doors, modular kitchens, wardrobes, laminates, and veneers."
                keywords="about us, Madhav Tradelink, wooden products, doors, modular kitchen, wardrobes, laminates, veneers, history, company information"
            />
        <Breadcrumb title="About Us" middle={{ url: '', text: '' }} last='About Us' />
        <About/>

        <section className="wardrobe about-us-p">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="underline-head">
                            <h3>Why Us </h3>
                            <span className="line"></span>
                        </div>
                        <p>The things that differentiate us from any other company in the market include:</p>
                        <ul>
                            <li>Commitment to high-quality products</li>
                            <li>Standardized packaging</li>
                            <li>Years of in-depth industrial expertise</li>
                            <li>Ethical business policies</li>
                            <li>Wide distribution network</li>
                            <li>Easy payment modes</li>
                        </ul>
                        
                    </div>
                    
                </div>
            </div>    
        </section>
    </>
  )
}

export default AboutusPage