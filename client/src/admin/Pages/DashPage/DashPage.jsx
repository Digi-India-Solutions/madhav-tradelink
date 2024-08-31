import React from 'react'
import { Link } from 'react-router-dom'
import './DashPage.css'

const DashPage = () => {
    return (
        <>
            <div className="dashboard-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-2 text-center">
                            <h1>Welcome To Vigaz Admin Panel</h1>
                        </div>

                        <div className="col-12">
                            <div className="dash-grid row gap-1">
                                <Link to="/all-category" className="single-dash col-sm-3 ">
                                    <div className="flex">
                                        <h4>All Categories</h4>
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                </Link>
                                <Link to="/all-sub-category" className="single-dash col-sm-3 ">
                                    <div className="flex">
                                        <h4>All Sub Categories</h4>
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                </Link>
                                <Link to="/all-inner-sub-category" className="single-dash col-sm-3 ">
                                    <div className="flex">
                                        <h4>All Inner Sub-Categories</h4>
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                </Link>
                                <Link to="/all-products" className="single-dash col-sm-3 ">
                                    <div className="flex">
                                        <h4>All Products</h4>
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashPage