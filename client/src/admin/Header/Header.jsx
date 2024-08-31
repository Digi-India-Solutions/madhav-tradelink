import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const AdminHeader = () => {
const [open,setOpen] = useState(false)
const handleOpen = ()=>{
  setOpen(!open)
}

const [SidebarOpen,setSidebarOpen] = useState(false)
const handleSideBar =()=>{
  setSidebarOpen(!SidebarOpen)
}

const handleLogOut =()=>{
  sessionStorage.clear('admin')
  window.location.href = "/admin"
  // return <LoginPage/>
}  
  return (
    <>
      <nav className="navbar admin-navbar bg-admin">
        <div className="logo_item">
          <i className="bx bx-menu" onClick={handleSideBar} id="sidebarOpen"></i>
          Madhav TradeLinks
        </div>
        <div className="navbar_content">
          <i className="bi bi-grid"></i>
          <i className='bx bx-sun' id="darkLight"></i>
          <i className='bx bx-bell' ></i>
        </div>
      </nav>
      {/* <!-- sidebar --> */}
      <nav className={`sidebar ${SidebarOpen ? "close" : ""} `} >
      {/* <nav className="sidebar" > */}
        <div className="menu_content">
          <ul className="menu_items">
            <div className="menu_title menu_editor"></div>
            {/* <!-- duplicate these li tag if you want to add or remove navlink only --> */}
            
            <li className="item">
              <Link to={'/admin/dashboard'} className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bxs-magic-wand"></i>
                </span>
                <span className="navlink">Home</span>
              </Link>
            </li>
            <li className="item">
              <Link to={'/all-category'} className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-filter"></i>
                </span>
                <span className="navlink">All Category</span>
              </Link>
            </li>
            <li className="item">
              <Link to={'/all-sub-category'} className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-filter"></i>
                </span>
                <span className="navlink">All Sub Category</span>
              </Link>
            </li>
            <li className="item">
              <Link to={'/all-inner-sub-category'} className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-filter"></i>
                </span>
                <span className="navlink">Inner Sub Category</span>
              </Link>
            </li>
            <li className="item">
              <Link to={'/all-products'} className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-loader-circle"></i>
                </span>
                <span className="navlink">All Products</span>
              </Link>
            </li>
          </ul>
          {/* <!-- Sidebar Open / Close --> */}
          <div className="bottom_content">
            <div className="bottom expand_sidebar">
              <span> LOG OUT</span>
              <i className='bx bx-log-in'onClick={handleLogOut} ></i>
            </div>
            <div className="bottom collapse_sidebar">
              <span> LOG OUT</span>
              <i className='bx bx-log-out' onClick={handleLogOut} ></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default AdminHeader