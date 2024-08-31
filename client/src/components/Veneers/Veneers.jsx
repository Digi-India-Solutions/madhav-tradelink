import React from 'react'
import LineHead from '../LineHead/LineHead'
import { Link } from 'react-router-dom'

import VeneerImg from './veneer.jpeg'
import veneer1 from './veneer-1.jpeg'
import veneer2 from './veneer-2.jpeg'
import veneer3 from './veneer-3.jpeg'
import veneer4 from './veneer-4.jpeg'

const Veneers = () => {
    const veneerImges = [
        {
            id:1,
            img: veneer1
        },
        {
            id:2,
            img: veneer2
        },
        {
            id:3,
            img: veneer3
        },
        {
            id:4,
            img: veneer4
        },

    ]
  return (
    <>
        <section className="wardrobe">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <LineHead title="VIGAZ Veneers" />
                        <h3>Modular Veneers</h3>
                        <p>VIGAZ designs and creates wardrobes customized to your requirements and specifications. The wardrobes can easily be installed in one home, then dismantled and reinstalled in another home. Modular wardrobes use smart fittings to ensure optimum storage and usage, and you get the best price guaranteed.</p>
                        <p>The Veneers are factory finished using international machinery to create high quality products, which allows for consistent finish everytime. Starting with your materials and finishes, to customizing the exterior and interior, to finalizing the small details, VIGAZ is a one stop shop for your complete wardrobe solution.</p>
                        <div className="row">
                            {veneerImges && veneerImges.map((item,index)=>(
                                <div className="col-3 imag-grid">
                                    <img src={item.img} alt="Veneer Image" key={index} width="100%"/>
                                </div>
                            ))}
                        </div>

                        <Link to="" className="learn-more button1">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Show More</span>
                        </Link>
                    </div>
                    <div className="col-md-4 d-md-block d-none">
                        <img src={VeneerImg} alt="Veneer Image"  width="100%"/>
                    </div>
                </div>
            </div>    
        </section>  
    </>
  )
}

export default Veneers