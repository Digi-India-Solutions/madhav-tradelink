import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import HelmentContext from '../../components/HelmentContext/HelmentContext'


const ProductPage = () => {
  
  const {name} = useParams();
  console.log(name);

  const [product,setProduct] = useState([]);

  const handleEffect = async ()  =>{
    try {
      const res = await axios.get("https://api.vigaz.in/api/v1/get-all-product");
      console.log(res.data.data);
      const filterProduct = res.data.data.filter((item)=>item.productName === name);
      // console.log(filterProduct)

      setProduct(filterProduct);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    handleEffect();

  }, [name])

  return (
    <>    
    {product && product.map((item,index)=>(
      <div key={index}>
        <HelmentContext 
            title={`${item.productName} - Madhav Tradelink`}
            description={`Discover the features of ${item.productName}. ${item.productDesc.join(' ')}`}
            keywords={`${item.productName}, ${item.categoryName}, Madhav Tradelink, wooden products`}
          />
        <Breadcrumb title={item.categoryName} middle={{url:'',text:''}}  last={item.productName} />
        <section className="product-page">
          <div className="container py-0 pb-4">

            <div className="row">
              <div className="col-md-12">
                <div className="underline-head">
                  <h3>{item.productName}</h3>
                  <span className="line"></span>
                </div>
                {item.productDesc.map((desc)=>(
                  <p key={index}>{desc}</p>
                ))}
                <div className="points">
                  <div className="head">{item.productPoints.heading}</div>
                  <ul>
                    {item.productPoints.points.map((point,poindex)=>(
                      <li key={poindex}> <i className="fa-solid fa-shuffle"></i> {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <div className="col-md-4">
                <img src={item.productImage[0]} alt={item.productName} width="100%"/>
              </div> */}
            </div>

            <div className="all-products">
                <div className="pro-grid">
                  {item.productImage && item.productImage.map((proimg,proindex)=>(
                    <img src={proimg} alt="product-image" width="100%" key={proindex}/>
                  ))}
                </div>
            </div>
          </div>

        </section>
      </div>
    ))}

    </>
  )
}

export default ProductPage