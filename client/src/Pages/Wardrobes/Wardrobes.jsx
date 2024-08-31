import React, { useEffect } from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

const Wardrobes = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    const productImages = [
        {
            img: "https://i.ibb.co/g3mTmh9/wardrobe-1-3e10f702d01bed5a6ae6.jpg"
        },
        {
            img: "http://localhost:3000/static/media/wardrobe-2.af5c353484823d30c2b1.jpeg"
        },
        {
            img: "https://i.ibb.co/wJkCt27/wardrobe-4-04c1b8ad888ce5f06dc8.jpg"
        },
        {
            img: "https://i.ibb.co/ydD7vd9/wardrobe-3-3bff2b4873cfd4f62745.jpg"
        },
        {
            img: "https://i.ibb.co/vj05JxG/wardrobe-2-af5c353484823d30c2b1.jpg"
        },
        {
            img: "https://i.ibb.co/g3mTmh9/wardrobe-1-3e10f702d01bed5a6ae6.jpg"
        },
        {
            img: "http://localhost:3000/static/media/wardrobe-2.af5c353484823d30c2b1.jpeg"
        },
        {
            img: "https://i.ibb.co/wJkCt27/wardrobe-4-04c1b8ad888ce5f06dc8.jpg"
        },
        {
            img: "https://i.ibb.co/ydD7vd9/wardrobe-3-3bff2b4873cfd4f62745.jpg"
        },
        {
            img: "https://i.ibb.co/vj05JxG/wardrobe-2-af5c353484823d30c2b1.jpg"
        },
        {
            img: "https://i.ibb.co/g3mTmh9/wardrobe-1-3e10f702d01bed5a6ae6.jpg"
        },
        {
            img: "http://localhost:3000/static/media/wardrobe-2.af5c353484823d30c2b1.jpeg"
        },
        {
            img: "https://i.ibb.co/wJkCt27/wardrobe-4-04c1b8ad888ce5f06dc8.jpg"
        },
        {
            img: "https://i.ibb.co/ydD7vd9/wardrobe-3-3bff2b4873cfd4f62745.jpg"
        },
        {
            img: "https://i.ibb.co/vj05JxG/wardrobe-2-af5c353484823d30c2b1.jpg"
        },
    ]
    return (
        <>
            <Breadcrumb title="Wardrobes" middle={{ url: '', text: '' }} last='Wardrobes' />
            <section className="product-page">
                <div className="container py-0 pb-4">

                    <div className="row">
                        <div className="col-md-8">
                            <div className="underline-head">
                                <h3>Wardrobes</h3>
                                <span className="line"></span>
                            </div>
                            <p>Besides security, interior smart doors and exterior smart doors redefine convenience & utility. In some smart locks, built-in Wi-Fi enables users to access notifications and see pictures of visitors entering or leaving the premises. You can always refer to the photo log in case of theft, burglary, or any other kind of security breach. </p>
                            <p>Besides security, interior smart doors and exterior smart doors redefine convenience & utility. In some smart locks, built-in Wi-Fi enables users to access notifications and see pictures of visitors entering or leaving the premises. You can always refer to the photo log in case of theft, burglary, or any other kind of security breach. </p>
                            <div className="points">
                                <div className="head">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minus sint officia cupiditate minima culpa.</div>
                                <ul>
                                    <li> <i className="fa-solid fa-shuffle"></i> Door frame can be matched with the same species of veneer used in the door</li>
                                    <li> <i className="fa-solid fa-shuffle"></i> Fully Veneer wrapped</li>
                                    <li> <i className="fa-solid fa-shuffle"></i> Door frame can be matched with the same species of veneer used in the door</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="https://i.ibb.co/NtRKcqT/laminate-db260bc571f231c09971.jpg" alt="product-image" width="100%" />
                        </div>
                    </div>

                    <div className="all-products">
                        <div className="pro-grid">
                            {productImages && productImages.map((item, index) => (
                                <img src={item.img} alt="product-image" width="100%" key={index} />
                            ))}
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Wardrobes