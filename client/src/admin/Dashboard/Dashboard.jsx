import React from 'react'
import AdminHeader from '../Header/Header'
import { Link, Route, Routes } from 'react-router-dom'
import AdminCategory from '../Pages/AdminCategory/AdminCategory'
import './Dashboard.css'
import AddCategory from '../AddCategory/AddCategory'
import EditCategory from '../editCategory/EditCategory'
import SubCategoryPage from '../Pages/SubCategoryPage/SubCategoryPage'
import AddSubCategory from '../AddSubCategory/AddSubCategory'
import EditSubCategory from '../EditSubCategory/EditSubCategory'
import AdminInnerSubCatePage from '../Pages/AdminInnerSubCate/AdminInnerSubCate'
import AddInnerSubCategory from '../AddInnerSubCategory/AddInnerSubCategory'
import EditInnerSubCategory from '../EditInnerSubCategory/EditInnerSubCategory'
import AdminProductPage from '../Pages/AdminProductPage/AdminProductPage'
import AddProduct from '../AddProduct/AddProduct'
import EditProduct from '../editProduct/EditProduct'
import DashPage from '../Pages/DashPage/DashPage'

const Dashboard = () => {
  return (
    <>
        <AdminHeader/>
        <div className='rightSidebar bg-admin' >
          
            <Routes>

                {/* Category Routes ---  */}
                <Route path={"/admin/dashboard"} element={<DashPage/>}/>
                
                <Route path={"/all-category"} element={<AdminCategory/>}/>
                <Route path={"/create-category"} element={<AddCategory/>}/>
                <Route path={"/edit-category/:id"} element={<EditCategory/>}/>

                {/* // Sub Category Routes  */}
                <Route path={"/all-sub-category"} element={<SubCategoryPage/>}/>
                <Route path={"/create-sub-category"} element={<AddSubCategory/>}/>
                <Route path={"/edit-sub-category/:id"} element={<EditSubCategory/>}/>

                {/* // Inner Sub Category Routes  */}
                <Route path={"/all-inner-sub-category"} element={<AdminInnerSubCatePage/>}/>
                <Route path={"/create-inner-sub-category"} element={<AddInnerSubCategory/>}/>
                <Route path={"/edit-inner-sub-category/:id"} element={<EditInnerSubCategory/>}/>
                
                {/* // Product Routes / */}
                <Route path={"/all-products"} element={<AdminProductPage/>}/>
                <Route path={"/create-product"} element={<AddProduct/>}/>
                <Route path={"/edit-product/:id"} element={<EditProduct/>}/>

            </Routes>
        </div>
    </>
  )
}

export default Dashboard