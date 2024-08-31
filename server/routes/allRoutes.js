const express = require('express');
const { createCategory, getAllCategory, deleteCategory, updateCategory } = require('../controlers/webcontroler');
const { createSubCategory, getAllSubCategory, deleteSubCategory, updateSubCategory, createAgainSubCategory, getAllAgainSubCategory, deleteAgainSubCategory, updateAgainSubCategory, createProduct, getAllProduct, deleteProduct, updateProduct } = require('../controlers/webcontroler');

const route = express.Router();

// categories
route.post('/create-category',createCategory);
route.get('/get-all-category',getAllCategory);
route.delete('/delete-category/:id',deleteCategory);
route.post('/update-category/:id',updateCategory);

//  Sub categories
route.post('/create-subcategory',createSubCategory);
route.get('/get-all-subcategory',getAllSubCategory);
route.delete('/delete-subcategory/:id',deleteSubCategory);
route.post('/update-subcategory/:id',updateSubCategory);

// Again Sub categories
route.post('/create-inner-subcategory',createAgainSubCategory);
route.get('/get-all-inner-subcategory',getAllAgainSubCategory);
route.delete('/delete-inner-subcategory/:id',deleteAgainSubCategory);
route.post('/update-inner-subcategory/:id',updateAgainSubCategory);

// Product
route.post('/create-product',createProduct);
route.get('/get-all-product',getAllProduct);
route.delete('/delete-product/:id',deleteProduct);
route.post('/update-product/:id',updateProduct); 


module.exports = route