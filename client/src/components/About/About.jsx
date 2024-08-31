import React from 'react'
import LineHead from '../LineHead/LineHead'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
        <section className="wardrobe about-us-p">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <LineHead title="About us" />    
                        <h2>Madhav Tradelink</h2>
                        <p>We <strong>“Madhav Tradelink”</strong> incorporation in the year <strong>1976</strong>, are a <strong>Sole Proprietorship (Individual) Firm</strong>, known as the reputed manufacturer of the best quality <strong>wooden doors , modular kitchen and wardrobes</strong> and more. Provided products are made from high grade quality production material at our vendors ultramodern and well equipped facility. To suit the application needs of our precious clients, we are offering our products in various specifications. Our offered products are highly demanded and appreciated by our clients for their excellent finish and superior quality.</p>
                        <p>Under the management of our Mentor <strong>“Rohit Patel (Owner)”</strong>, we have gained the extraordinary position in the industry. Our experts meticulously checked the entire range to make sure that our products are free from all kinds of faults. Each product is supervised under quality control cells to rectify errors. </p>
                        
                        <Link to="/about-us" className="learn-more button1">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Know More</span>
                        </Link>
                    </div>
                    
                </div>
            </div>    
        </section>
    </>
  )
}

export default About