import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'
import LineHead from '../LineHead/LineHead';

const SingleCategory = () => {
    const [singleCategory,setSingleCategory] = useState([]);
    const handleFetch = async () => {
        try {
            const res = await axios.get('https://api.vigaz.in/api/v1/get-all-product');
            // console.log(res.data.data);
    
            const filterSingleCate = res.data.data.filter(item => 
                (!item.subCategoryName && !item.AgainSubCategoryName) // Check for null or undefined
            );
            // console.log(filterSingleCate);
            setSingleCategory(filterSingleCate);
        } catch (error) {
            console.error(error);
        }
    }
    
    
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        handleFetch()
    },[])
  return (
    <>
    <div className="singleCate-flex">

        {singleCategory && singleCategory.map((item,index)=>(
            <section className="wardrobe" key={index}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <LineHead title={item.categoryName} />
                            <h3>{item.productName}</h3>
                            {item.productDesc && item.productDesc.map((desc,ind)=>(
                                <p key={ind}>{desc}</p>
                            ))}
                            
                            <div className="row">
                            {item.productImage && item.productImage.slice(0, 4).map((image, index) => (
                                <div className="col-3 imag-grid" key={index}>
                                    <img src={image} alt={item.productName} width="100%" />
                                </div>
                            ))}
                            </div>

                            <Link to={`/Category/${item.productName}`} className="learn-more button1">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Show More</span>
                            </Link>
                        </div>
                        <div className="col-md-4 d-md-block d-none">
                            <img src={item.productImage[0]} alt={item.productName}  width="100%"/>
                        </div>
                    </div>
                </div>    
            </section> 
        ))}

    </div>

    </>
  )
}

export default SingleCategory