import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import Wardrobes from './Pages/Wardrobes/Wardrobes';
import AboutusPage from './Pages/AboutusPage/AboutusPage'
import ContactPage from './Pages/ContactPage/ContactPage';
import { useEffect, useState } from 'react';
import AdminHeader from './admin/Header/Header';
import Login from './admin/auth/Login';
import Dashboard from './admin/Dashboard/Dashboard';
import SubCategoryPage from './Pages/SubCategoryPage/SubCategoryPage';
import HeaderProduct from './Pages/ProductPage/HeaderProduct';
import SubCategoryProductPage from './Pages/SubCategoryProductPage/SubCategoryProductPage';
import InnerSubCategoryProductPage from './Pages/InnerSubCategoryProductPage/InnerSubCategoryProductPage';
import AgainSubCategoryProductPage from './Pages/AgainSubCategoryProductPage/AgainSubCategoryProductPage';
import OurCategoryPage from './Pages/OurCategoryPage/OurCategoryPage';

function App() {
  const getAdminStatus = sessionStorage.getItem('admin') || false
  // console.log(getAdminStatus)
  const [adminLogin, setAdminLogin] = useState(false)
  useEffect(() => {
    setAdminLogin(getAdminStatus)
  }, [getAdminStatus])

  // console.log(adminLogin)
  return (
    <>

      {getAdminStatus ? (
        <>
        <Dashboard/>

        </>
      ) : (
        <>

          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutusPage />} />
            <Route path='/contact-us' element={<ContactPage />} />
            <Route path='/product-page' element={<ProductPage />} />
            <Route path='/wardrobes' element={<Wardrobes />} />
            <Route path='/our-category' element={<OurCategoryPage />} />
            <Route path='/admin' element={<Login />} />

            {/* --- This is only for to show the category and there subcategory on page ---  */}
            {/* <Route path='/category/:categoryname/:subcatename' element={<SubCategoryPage/>} /> */}

            {/* -- These 3 Routes are for the [product page] with thrise conditions --  */}
            <Route path='/product/:category/:subcategory' element={<SubCategoryProductPage />} />
            <Route path='/product/:category/:subcategory/:innerSubCategory' element={<InnerSubCategoryProductPage />} />
            <Route path='/Category/:name' element={<ProductPage />} />
            <Route path='/AgainSub/:category/:subcategory' element={<AgainSubCategoryProductPage />} />

            <Route path='/product-page/:name' element={<HeaderProduct />} />
            {/* <Route path='/category/:subcate/:name' element={<ProductPage />} /> */}
          </Routes>
          <Footer />
        </>
      )}




    </>
  );
}

export default App;
