import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditSubCategory = () => {
    const {id} = useParams()
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
    const handleFetch = async()=>{
        try {
            const res = await axios.get('https://api.vigaz.in/api/v1/get-all-subcategory');
            // console.log(res.data.data)
            const product = res.data.data
            const fillterProduct = product.filter((item)=> item._id === id)
            // console.log(fillterProduct)
            setData({
                categoryName: fillterProduct[0].categoryName,
                subCategoryName: fillterProduct[0].subCategoryName,
                subCategoryImg: fillterProduct[0].subCategoryImg,
                subCategoryDesc: fillterProduct[0].subCategoryDesc
            })
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            const submitResponse = await axios.post(`https://api.vigaz.in/api/v1/update-subcategory/${id}`,formData);
            // console.log(submitResponse)
            toast.success("Sub Category Updated Successfully")
            window.location.href='/all-sub-category'
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.msg)
        }
    }


    const [categories,setCategory] = useState([]);
    const handleCategory = async()=>{
        try {
            const res = await axios.get('https://api.vigaz.in/api/v1/get-all-category');
            // console.log("i am cat",res.data)
            setCategory(res.data.data)
        } catch (error) {
            console.error("i am cat errro",error)
        }
      }
    
    useEffect(()=>{
        handleFetch();
        handleCategory()
    },[id])
  return (
    <>
        <ToastContainer />
        <section className="breadCmb">
            <div>
                <h2>Edit Sub Category</h2>
                <ul>
                    <li><Link to="/admin/dashboard">Home / </Link></li>
                    <li><a href="/all-category">Our Sub Category / </a></li>
                    <li>Edit Sub Category</li>
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
                    <option name='categoryName' value={formData.categoryName}>{formData.categoryName}</option>
                    {categories && categories.map((item, index) => (
                      <option key={index} value={item.categoryName}>{item.categoryName}</option>
                    ))}
                  </select>
                </div>

                <div className="col-md-4">
                  <label for="product-name" className="form-label">Sub Category Name</label>
                  <input required type="text" onChange={handleChange} name='subCategoryName' value={formData.subCategoryName} className="form-control" id='product-name' placeholder="Category name" aria-label="Product name" />
                </div>

                <div className="col-md-4">
                  <label for="subCategoryImg" className="form-label">Sub Category Image</label>
                  <input required type="text" value={formData.subCategoryImg} name='subCategoryImg' onChange={handleChange} className="form-control" id='subCategoryImg' placeholder="Image URL" aria-label="Product Image" />
                </div>
                <div className="col-md-12">
                  <label for="productDesc" className="form-label">Product Description</label>
                  <textarea className="form-control" value={formData.subCategoryDesc} name='subCategoryDesc' onChange={handleChange} id="subCategoryDesc" placeholder="Sub Category Description"></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <input type="reset" className='btn btn-warning text-white'  /> &nbsp;
                  <input type="submit" className='btn btn-success'  value="Save Category Changes" />
                </div>
              
            </form>
          </div>
        </section>
    </>
  )
}

export default EditSubCategory