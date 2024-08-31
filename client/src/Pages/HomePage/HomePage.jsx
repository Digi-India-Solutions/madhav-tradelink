import React, { useEffect } from 'react'
import DoorCategory from '../../components/DoorCategory/DoorCategory'
import KitchenCateHomePage from '../../components/KitchenCateHomePage/KitchenCateHomePage'
import Contact from '../../components/Contact/Contact'
import About from '../../components/About/About'
import './HomePage.css'

import b1 from './banner-1.jpg'
import b2 from './banner-2.jpg'
import b3 from './banner-3.jpg'
import SingleCategory from '../../components/SingleCategory/SingleCategory'
import SubCategoryPage from '../SubCategoryPage/SubCategoryPage'
import HelmentContext from '../../components/HelmentContext/HelmentContext'
const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <>
      <HelmentContext
          title="Vigaz - Madhav Tradelink"
          description="Welcome to Madhav Tradelink. We are a reputed manufacturer of high-quality wooden products including doors, modular kitchens, wardrobes, laminates, and veneers."
          keywords="home,Vigaz, Madhav Tradelink, wooden products, doors, modular kitchen, wardrobes, laminates, veneers"
      />
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={b1} className="d-block w-100" alt="Carousel Image" />
          </div>
          <div className="carousel-item">
            <img src={b2} className="d-block w-100" alt="Carousel Image" />
          </div>
          <div className="carousel-item">
            <img src={b3} className="d-block w-100" alt="Carousel Image" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <About />
      <SubCategoryPage/>
      {/* <DoorCategory />
      <KitchenCateHomePage /> */}

      <SingleCategory/>
      <Contact />
    </>
  )
}

export default HomePage