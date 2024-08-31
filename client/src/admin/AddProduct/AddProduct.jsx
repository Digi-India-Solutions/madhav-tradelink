import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [innerSubCategories, setInnerSubCategories] = useState([]);
  const [formData, setFormData] = useState({
    categoryName: '',
    subCategoryName: '',
    AgainSubCategoryName: '',
    productName: '',
    productDescriptions: [],
    productPoints: {
      heading: '',
      points: [],
    },
    productImages: [],
  });

  useEffect(() => {
    // Fetch categories, subcategories, and inner subcategories
    const fetchData = async () => {
      try {
        const [categoriesRes, subCategoriesRes, innerSubCategoriesRes] = await Promise.all([
          axios.get('http://localhost:6519/api/v1/get-all-category'),
          axios.get('http://localhost:6519/api/v1/get-all-subcategory'),
          axios.get('http://localhost:6519/api/v1/get-all-inner-subcategory')
        ]);
        setCategories(categoriesRes.data.data.map(item => item.categoryName));
        setSubCategories(subCategoriesRes.data.data.map(item => item.subCategoryName));
        setInnerSubCategories(innerSubCategoriesRes.data.data.map(item => item.AgainSubCategoryName));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleInputListChange = (index, event, fieldName) => {
    const { value } = event.target;
    const updatedList = [...formData[fieldName]];
    updatedList[index] = value;
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: updatedList
    }));
  };

  const handleAddInput = (fieldName) => {
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: [...prevData[fieldName], '']
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post('http://localhost:6519/api/v1/create-product', formData);
      console.log(response.data);
      toast.success('Product Added Successfully !!');
      window.location.href = '/all-products';
    } catch (error) {
      console.error('Error : ', error);
      toast.error(error.response.data.message);
    }
  };

  const handlePointChange = (index, event) => {
    const newPoints = [...formData.productPoints.points];
    newPoints[index] = event.target.value;
    setFormData({
      ...formData,
      productPoints: {
        ...formData.productPoints,
        points: newPoints
      }
    });
  };

  const handleAddPoint = () => {
    setFormData({
      ...formData,
      productPoints: {
        ...formData.productPoints,
        points: [...formData.productPoints.points, ''] // Add a new empty point
      }
    });
  };

  const handleRemovePoint = (index) => {
    const newPoints = [...formData.productPoints.points];
    newPoints.splice(index, 1);
    setFormData({
      ...formData,
      productPoints: {
        ...formData.productPoints,
        points: newPoints
      }
    });
  };
  const pointsList = formData.productPoints ? formData.productPoints.points : [];

  return (
    <>
      <ToastContainer />
      <section className="breadCmb">
        <div>
          <h2>Add Products</h2>
          <ul>
            <li><Link to="/admin/dashboard">Home / </Link></li>
            <li><Link to="/all-products">Our Products / </Link></li>
            <li>Create Product</li>
          </ul>
        </div>
      </section>

      <section className="forms">
        <div className="container">
          <form className="row" onSubmit={handleSubmit}>

            <div className="col-md-3">
              <label htmlFor="categoryName" className="form-label">Select Category</label>
              <select id="categoryName" onChange={handleChange} value={formData.categoryName} name='categoryName' className="form-select">
                <option>Select the Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="col-md-3">
              <label htmlFor="subCategoryName" className="form-label">Select Sub Category</label>
              <select id="subCategoryName" onChange={handleChange} value={formData.subCategoryName} name='subCategoryName' className="form-select">
                <option>Select the Sub Category</option>
                {subCategories.map((subCategory, index) => (
                  <option key={index} value={subCategory}>{subCategory}</option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <label htmlFor="AgainSubCategoryName" className="form-label">Select Inner Sub Category</label>
              <select id="AgainSubCategoryName" onChange={handleChange} value={formData.AgainSubCategoryName} name='AgainSubCategoryName' className="form-select">
                <option>Select the Inner Sub Category</option>
                {innerSubCategories.map((innerSubCategory, index) => (
                  <option key={index} value={innerSubCategory}>{innerSubCategory}</option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input type="text" className="form-control" value={formData.productName} name='productName' onChange={handleChange} id='productName' placeholder="Product Name" aria-label="Product Name" />
            </div>

            <div className="col-md-12">
              <label htmlFor="productDescriptions" className="form-label">Product Descriptions</label>
              {formData.productDescriptions.map((description, index) => (
                <textarea
                  key={index}
                  className="form-control mb-2"
                  value={description}
                  onChange={(event) => handleInputListChange(index, event, 'productDescriptions')}
                  placeholder={`Description ${index + 1}`}
                  aria-label={`Product Description ${index + 1}`}
                />
              ))}
              <br />
              <button type="button" className="btn btn-primary" onClick={() => handleAddInput('productDescriptions')}>
                Add Description
              </button>
            </div>


            <div>
              <div className="col-md-12">
                <label htmlFor="productPointsHeading" className="form-label">Product Points Heading</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.productPoints.heading}
                  name='heading'
                  onChange={(e) => setFormData({
                    ...formData,
                    productPoints: {
                      ...formData.productPoints,
                      heading: e.target.value
                    }
                  })}
                  id='productPointsHeading'
                  placeholder="Product Points Heading"
                  aria-label="Product Points Heading"
                />

              </div>

              <div className="col-md-12">
                <label htmlFor="productPoints" className="form-label">Product Points</label>
                {pointsList && pointsList.map((point, index) => (
                  <div key={index} className="row mb-2">
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={point}
                        onChange={(event) => handlePointChange(index, event)}
                        placeholder={`Point ${index + 1}`}
                        aria-label={`Product Point ${index + 1}`}
                      />
                    </div>
                    <div className="col-md-2">
                      <button type="button" className="btn btn-danger" onClick={() => handleRemovePoint(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <br />
                <button type="button" className="btn btn-primary" onClick={handleAddPoint}>
                  Add Point
                </button>
              </div>
            </div>

            <div className="col-md-12">
              <label htmlFor="productImages" className="form-label">Product Images</label>

              <div className="row">
                {/* ------ Add Multiple Images ----  */}
                {formData.productImages.map((image, index) => (
                  <div key={index} className=" col-md-4 mb-2">
                    <input
                      type="text"
                      className="form-control "
                      value={image}
                      onChange={(event) => handleInputListChange(index, event, 'productImages')}
                      placeholder={`Image URL ${index + 1}`}
                      aria-label={`Product Image ${index + 1}`}
                    />
                  </div>
                ))}

              </div>
              <button type="button" className="btn btn-primary" onClick={() => handleAddInput('productImages')}>
                Add Image
              </button>
            </div>


            <div className="col-md-12 text-center">
              <input type="reset" className="btn btn-warning text-white" /> &nbsp;
              <input type="submit" className="btn btn-success" value="Add Product" />
            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default AddProduct;
