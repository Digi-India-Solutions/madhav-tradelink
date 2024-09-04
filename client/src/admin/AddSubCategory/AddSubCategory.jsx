import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddSubCategory = () => {

  // Categories 
  const [categories,setCategory] = useState([]);


  // Sub Categories 
  const [formData,setData] = useState({
    categoryName: '',
    subCategoryName: '',
    subCategoryImg: '',
    subCategoryDesc:''
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
    try {
      const response = await axios.post('https://api.vigaz.in/api/v1/create-subcategory',formData);
      // console.log(response.data)
      toast.success("Sub Category Added Successfully !!")
      window.location.href='/all-sub-category'
    } catch (error) {
      console.log('Error : ',error)
      toast.error(error.response.data.message)
    }
  }
  const handleCategory = async()=>{
    try {
        const res = await axios.get('https://api.vigaz.in/api/v1/get-all-category');
        // console.log("i am cat",res.data)
        setCategory(res.data.data)
    } catch (error) {
        console.error("i am cat errro",error)
    }
  }
  useEffect(() => {
    handleCategory()
  }, []);

  return (
    <>
      <ToastContainer />
        <section className="breadCmb">
            <div>
                <h2>Add Sub Category</h2>
                <ul>
                    <li><Link to="/admin/dashboard">Home / </Link></li>
                    <li><a href="/all-sub-category">Our Sub Category / </a></li>
                    <li>Create Sub category</li>
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
                    {categories && categories.map((item, index) => (
                      <option key={index} value={item.categoryName}>{item.categoryName}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="product-name" className="form-label">Sub Category Name</label>
                  <input type="text" onChange={handleChange} name='subCategoryName' value={formData.subCategoryName} className="form-control" id='product-name' placeholder="Category name" aria-label="Product name" />
                </div>
                <div className="col-md-4">
                  <label for="selectImage" className="form-label">Sub Category Image</label>
                  <input type="text" value={formData.subCategoryImg} name='subCategoryImg' onChange={handleChange} className="form-control" id='selectImage' placeholder="Image URL" aria-label="Product Image" />
                </div>
                <div className="col-md-12">
                  <label for="productDesc" className="form-label">Product Description</label>
                  <textarea className="form-control" value={formData.subCategoryDesc} name='subCategoryDesc' onChange={handleChange} id="subCategoryDesc" placeholder="Sub Category Description"></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <input type="reset" className='btn btn-warning text-white'  /> &nbsp;
                  <input type="submit" className='btn btn-success'  value="Add Category" />
                </div>
              
            </form>
          </div>
        </section>
    </>
  )
}

export default AddSubCategory