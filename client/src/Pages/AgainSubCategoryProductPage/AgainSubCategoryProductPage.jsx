import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import LineHead from '../../components/LineHead/LineHead';

const AgainSubCategoryProductPage = () => {
    const {subcategory} = useParams()
    const [product,setProduct] = useState([]);
    const handleFetch = async()=>{
        try {
            const innerResponse = await axios.get('http://localhost:6519/api/v1/get-all-inner-subcategory');
            const cat = innerResponse.data.data;
            // console.log(subcategory)
            // console.log(cat)
            const fillter = cat.filter((item)=>item.subCategoryName === subcategory)
            setProduct(fillter)
        } catch (error) {
            console.log(error)
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
    {console.log(product)}
        <section className=' kitchenCate'>
            <div className="container my-5">
                <LineHead title={subcategory} />
                <div className="grid-4">
                    {product && product.map((item,index)=>(
                        <Link to={`/product/${item.categoryName}/${item.subCategoryName}/${item.AgainSubCategoryName}`} className="single-kitch" key={index}>
                            <div className="head">
                                <h4>{item.AgainSubCategoryName}</h4>
                                <img src={item.againSubCategoryImg} alt="kitchen-icon" />
                            </div>
                            <p className='desc'>{item.againSubCategoryDesc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default AgainSubCategoryProductPage