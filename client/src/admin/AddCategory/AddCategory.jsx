import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = () => {
  const [formData,setData] = useState({
    categoryName: ''
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
      const response = await axios.post('http://localhost:6519/api/v1/create-category',formData);
      // console.log(response.data)
      toast.success("Category Added Successfully !!")
      window.location.href='/all-category'
    } catch (error) {
      console.log('Error : ',error)
      toast.error(error.response.data.message)
    }
  }

  return (
    <>
      <ToastContainer />
        <section className="breadCmb">
            <div>
                <h2>Add Category</h2>
                <ul>
                    <li><Link to="/admin/dashboard">Home / </Link></li>
                    <li><a href="/all-category">Our Category / </a></li>
                    <li>Create category</li>
                </ul>
            </div>
            <div className="btn1">
                
            </div>
        </section>

        <section className="forms">
          <div className="container">
            <form className="row" onSubmit={handleSubmit}>
              
                <div className="col-md-4">
                  <label for="product-name" className="form-label">Category Name</label>
                  <input required type="text" onChange={handleChange} name='categoryName' value={formData.categoryName} className="form-control" id='product-name' placeholder="Category name" aria-label="Product name" />
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

export default AddCategory