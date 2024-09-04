import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const SubCategoryProductPage = () => {
  
  const {category,subcategory} = useParams();
  console.log(category,subcategory);

  const [product,setProduct] = useState([]);

  const handleEffect = async ()  =>{
    try {
      const res = await axios.get("https://api.vigaz.in/api/v1/get-all-product");
      // console.log(res.data.data);
      const filterProduct = res.data.data.filter((item)=>item.categoryName === category && item.subCategoryName === subcategory && !item.AgainSubCategoryName);
      console.log(filterProduct)
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

  }, [subcategory])

  return (
    <>    
    {product && product.map((item,index)=>(
      <div key={index}>
        <Breadcrumb title={item.categoryName} middle={{url:`/product/${item.categoryName}/${item.subCategoryName}`,text:`${item.categoryName}`}}  last={item.productName} />
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

export default SubCategoryProductPage