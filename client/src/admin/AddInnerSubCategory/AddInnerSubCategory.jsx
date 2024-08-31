import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddInnerSubCategory = () => {

  // Categories 
  const [categories,setCategory] = useState([]);
  const [subCategories,setSubCategory] = useState([]);


  // Sub Categories 
  const [formData,setData] = useState({
    categoryName: '',
    subCategoryName: '',
    AgainSubCategoryName:'',
    againSubCategoryImg: '',
    againSubCategoryDesc:''
  })

  const handleChange=(event,index)=>{
    const {name,value} = event.target;
    setData(prevData =>({
      ...prevData,
      [name]:value
    }))
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post('http://localhost:6519/api/v1/create-inner-subcategory',formData);
      // console.log(response.data)
      toast.success("Inner Sub Category Added Successfully !!")
      window.location.href='/all-inner-sub-category'
    } catch (error) {
      console.log('Error : ',error)
      toast.error(error.response.data.message)
    }
  }
  const handleCategory = async()=>{
    try {
        const res = await axios.get('http://localhost:6519/api/v1/get-all-category');
        // console.log("i am cat",res.data)
        setCategory(res.data.data)
    } catch (error) {
        console.error("i am cat errro",error)
    }
  }
  const handleSubCategory = async()=>{
    try {
        const res = await axios.get('http://localhost:6519/api/v1/get-all-subcategory');
        // console.log("i am cat",res.data)
        setSubCategory(res.data.data)
    } catch (error) {
        console.error("i am cat errro",error)
    }
  }
  useEffect(() => {
    handleCategory()
    handleSubCategory()
  }, []);

  return (
    <>
      <ToastContainer />
        <section className="breadCmb">
            <div>
                <h2>Add Inner Sub Category</h2>
                <ul>
                    <li><Link to="/admin/dashboard">Home / </Link></li>
                    <li><a href="/all-inner-sub-category">Our Inner Sub Category / </a></li>
                    <li>Create Inner Sub category</li>
                </ul>
            </div>
            <div className="btn1">
                
            </div>
        </section>

        <section className="forms">
          <div className="container">
            <form className="row" onSubmit={handleSubmit}>
              
                <div className="col-md-4">
                  <label for="product-name1" className="form-label">Category Name</label>
                  <select id="inputState" className="form-select" onChange={handleChange} name="categoryName" value={formData.categoryName}>
                  <option value="Select Category" >Select Category</option>
                    {categories && categories.map((item, index) => (
                      <option key={index}  value={item.categoryName}>{item.categoryName}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="product-name2" className="form-label">Sub Category</label>
                  <select id="inputState" className="form-select" onChange={handleChange} name="subCategoryName" value={formData.subCategoryName}>
                    <option value="Select Sub Category" name="subCategoryName" >Select Sub Category</option>
                    {subCategories && subCategories.map((item1, ind) => (
                      <option key={ind} value={item1.subCategoryName}>{item1.subCategoryName}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="product-name" className="form-label">Inner Sub Category Name</label>
                  <input type="text" onChange={handleChange} name='AgainSubCategoryName' value={formData.AgainSubCategoryName} className="form-control" placeholder="Inner SubCategory" aria-label="Product name" />
                </div>
                <div className="col-md-4">
                  <label for="selectImage" className="form-label">Sub Category Image</label>
                  <input type="text" value={formData.againSubCategoryImg} name='againSubCategoryImg' onChange={handleChange} className="form-control" id='selectImage' placeholder="Image URL" aria-label="Product Image" />
                </div>
                <div className="col-md-12">
                  <label for="productDesc" className="form-label">Inner Sub Category Description</label>
                  <textarea className="form-control" value={formData.againSubCategoryDesc} name='againSubCategoryDesc' onChange={handleChange} id="subCategoryDesc" placeholder="Sub Category Description"></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <input type="reset" className='btn btn-warning text-white'  /> &nbsp;
                  <input type="submit" className='btn btn-success'  value="Add Inner Category" />
                </div>
              
            </form>
          </div>
        </section>
    </>
  )
}

export default AddInnerSubCategory