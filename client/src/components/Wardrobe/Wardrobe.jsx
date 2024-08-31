import React from 'react'
import LineHead from '../LineHead/LineHead'
import './Wardrobe.css'
import { Link } from 'react-router-dom'

import WardrobeImg from './wordrobe.jpeg'
import ward1 from './wardrobe-1.jpeg'
import ward2 from './wardrobe-2.jpeg'
import ward3 from './wardrobe-3.jpeg'
import ward4 from './wardrobe-4.jpeg'


const Wardrobe = () => {
    const wordrobeImg = [
        {
            id:1,
            img: ward1
        },
        {
            id:2,
            img: ward2
        },
        {
            id:3,
            img: ward3
        },
        {
            id:4,
            img: ward4
        },

    ]
  return (
    <>
        <section className="wardrobe">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <LineHead title="VIGAZ WARDROBE" />    
                        <h3>Modular Wardrobe</h3>
                        <p>VIGAZ designs and creates wardrobes customized to your requirements and specifications. The wardrobes can easily be installed in one home, then dismantled and reinstalled in another home. Modular wardrobes use smart fittings to ensure optimum storage and usage, and you get the best price guaranteed.</p>
                        <p>The wardrobes are factory finished using international machinery to create high quality products, which allows for consistent finish everytime. Starting with your materials and finishes, to customizing the exterior and interior, to finalizing the small details, VIGAZ is a one stop shop for your complete wardrobe solution.</p>
                        <div className="row">
                            {wordrobeImg && wordrobeImg.map((item,index)=>(
                                <div className="col-3 imag-grid">
                                    <img src={item.img} alt="Wardrobe Image" key={index} width="100%"/>
                                </div>
                            ))}
                        </div>

                        <Link className="learn-more button1">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Show More</span>
                        </Link>
                    </div>
                    <div className="col-md-4 d-md-block d-none">
                        <img src={WardrobeImg} alt="Wardrobe Image"  width="100%"/>
                    </div>
                </div>
            </div>    
        </section>  
    </>
  )
}

export default Wardrobe