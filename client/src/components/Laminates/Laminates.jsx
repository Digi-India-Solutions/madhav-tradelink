import React from 'react'
import LineHead from '../LineHead/LineHead'
import { Link } from 'react-router-dom'

import LaminateImg from './laminate.jpeg'
import laminate1 from './laminate-1.jpeg'
import laminate2 from './laminate-2.jpeg'
import laminate3 from './laminate-3.jpeg'
import laminate4 from './laminate-4.jpeg'

const Laminates = () => {
    const laminateImges = [
        {
            id:1,
            img: laminate1
        },
        {
            id:2,
            img: laminate2
        },
        {
            id:3,
            img: laminate3
        },
        {
            id:4,
            img: laminate4
        },

    ]
  return (
    <>
        <section className="wardrobe bg-light">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-md-8">
                        <LineHead title="VIGAZ Laminates" />
                        <h3>Modular Laminates</h3>
                        <p>VIGAZ designs and creates wardrobes customized to your requirements and specifications. The wardrobes can easily be installed in one home, then dismantled and reinstalled in another home. Modular wardrobes use smart fittings to ensure optimum storage and usage, and you get the best price guaranteed.</p>
                        <p>The wardrobes are factory finished using international machinery to create high quality products, which allows for consistent finish everytime. Starting with your materials and finishes, to customizing the exterior and interior, to finalizing the small details, VIGAZ is a one stop shop for your complete wardrobe solution.</p>
                        <div className="row">
                            {laminateImges && laminateImges.map((item,index)=>(
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
                        <img src={LaminateImg} alt="Wardrobe Image"  width="100%"/>
                    </div>
                </div>
            </div>    
        </section>  
    </>
  )
}

export default Laminates