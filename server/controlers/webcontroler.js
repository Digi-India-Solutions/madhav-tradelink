const againSubCategoryDetail = require('../models/againSubCategory.model');
const categorySchema = require('../models/category.model');
const productDetail = require('../models/product.model');
const subCategoryDetail = require('../models/subCategory.model');

// category
exports.createCategory = async (req, res) => {
    try {
        console.log(req.body)
        const { categoryName } = req.body;
        if (!categoryName) {
            return res.status(403).json({
                success: false,
                message: "Please Provide All Fields !!"
            })
        }

        const existingCategory = await categorySchema.findOne({ categoryName: categoryName });
        if (existingCategory) {
            return res.status(403).json({
                success: false,
                message: "Category Name Already Exists !!"
            });
        }

        const newCategory = new categorySchema({
            categoryName
        })
        await newCategory.save();
        res.status(200).json({
            success: true,
            data: newCategory,
            message: "Category Created Successfully !!"
        })
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.getAllCategory = async (req, res) => {
    try {
        const getAllCate = await categorySchema.find();
        if (getAllCate.length === 0) {
            return res.status(403).json({
                success: false,
                msg: "Product Not Found"
            })
        }
        res.status(200).json({
            success: true,
            data: getAllCate,
            msg: "All Categories Found"
        })

    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const checkCate = await categorySchema.deleteOne({ _id: id })
        if (!checkCate) {
            return res.status(403).json({
                success: false,
                msg: "category Not Found"
            })
        }
        res.status(200).json({
            success: true,
            msg: "Category Deleted Succesfully !!"
        })
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const updates = req.body;

        // Check if there are no fields to update
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                success: false,
                msg: "No fields to update."
            });
        }

        const options = { new: true }; // Return the modified document
        const updatedCategory = await categorySchema.findByIdAndUpdate(categoryId, updates, options);
        if (!updatedCategory) {
            return res.status(404).json({
                success: false,
                msg: "CategorySchema not found."
            });
        }

        res.status(200).json({
            success: true,
            msg: "Category updated successfully.",
            data: updatedCategory
        });
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}


// Sub category
exports.createSubCategory = async (req, res) => {
    try {
        console.log(req.body)
        const { categoryName, subCategoryName, subCategoryImg, subCategoryDesc } = req.body;
        if (!categoryName || !subCategoryName) {
            return res.status(403).json({
                success: false,
                message: "Please Provide All Fields !!"
            })
        }

        const existingSubCategory = await subCategoryDetail.findOne({ subCategoryName: subCategoryName });
        if (existingSubCategory) {
            return res.status(403).json({
                success: false,
                message: "Sub-Category Already Exists !!"
            });
        }

        const newSubCategory = new subCategoryDetail({
            categoryName,
            subCategoryName,
            subCategoryImg,
            subCategoryDesc
        })
        await newSubCategory.save();
        res.status(200).json({
            success: true,
            data: newSubCategory,
            message: "Sub-Category Created Successfully !!"
        })
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.getAllSubCategory = async (req, res) => {
    try {
        const getAllSubCate = await subCategoryDetail.find();
        if (getAllSubCate.length === 0) {
            return res.status(403).json({
                success: false,
                msg: "Sub Category Not Found"
            })
        }
        res.status(200).json({
            success: true,
            data: getAllSubCate,
            msg: "All Sub-Categories Found"
        })

    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.deleteSubCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const checkSubCate = await subCategoryDetail.deleteOne({ _id: id })
        if (!checkSubCate) {
            return res.status(403).json({
                success: false,
                msg: "Sub category Not Found"
            })
        }
        res.status(200).json({
            success: true,
            msg: "Sub Category Deleted Succesfully !!"
        })
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.updateSubCategory = async (req, res) => {
    try {
        const subCategoryId = req.params.id;
        const updates = req.body;

        // Check if there are no fields to update
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                success: false,
                msg: "No fields to update."
            });
        }

        const options = { new: true }; // Return the modified document
        const updatedSubCategory = await subCategoryDetail.findByIdAndUpdate(subCategoryId, updates, options);
        if (!updatedSubCategory) {
            return res.status(404).json({
                success: false,
                msg: "subCategorySchema not found."
            });
        }
        res.status(200).json({
            success: true,
            msg: "Sub Category updated successfully.",
            data: updatedSubCategory
        });
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}


// Again Sub category
exports.createAgainSubCategory = async (req, res) => {
    try {
        console.log(req.body)
        const { categoryName, subCategoryName, AgainSubCategoryName, againSubCategoryImg, againSubCategoryDesc } = req.body;
        if (!categoryName || !subCategoryName || !AgainSubCategoryName) {
            return res.status(403).json({
                success: false,
                message: "Please Provide All Fields !!"
            })
        }

        const existingAgainSubCategory = await againSubCategoryDetail.findOne({ AgainSubCategoryName: AgainSubCategoryName });
        if (existingAgainSubCategory) {
            return res.status(403).json({
                success: false,
                message: "Again-Sub-Category Already Exists !!"
            });
        }

        const newAgainSubCategory = new againSubCategoryDetail({
            categoryName,
            subCategoryName,
            AgainSubCategoryName,
            againSubCategoryImg,
            againSubCategoryDesc
        })
        await newAgainSubCategory.save();
        res.status(200).json({
            success: true,
            data: newAgainSubCategory,
            message: "Inner Sub-Category Created Successfully !!"
        })
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.getAllAgainSubCategory = async (req, res) => {
    try {
        const getAllAgainSubCate = await againSubCategoryDetail.find();
        if (getAllAgainSubCate.length === 0) {
            return res.status(403).json({
                success: false,
                msg: "Again Sub Category Not Found"
            })
        }
        res.status(200).json({
            success: true,
            data: getAllAgainSubCate,
            msg: "All Again Sub-Categories Found"
        })

    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.deleteAgainSubCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const checkAgainSubCate = await againSubCategoryDetail.deleteOne({ _id: id })
        if (!checkAgainSubCate) {
            return res.status(403).json({
                success: false,
                msg: "Again Sub category Not Found"
            })
        }
        res.status(200).json({
            success: true,
            msg: "Again Sub Category Deleted Succesfully !!"
        })
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.updateAgainSubCategory = async (req, res) => {
    try {
        const AgainSubCategoryId = req.params.id;
        const updates = req.body;

        // Check if there are no fields to update
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                success: false,
                msg: "No fields to update."
            });
        }

        const options = { new: true }; // Return the modified document
        const updatedAgainSubCategory = await againSubCategoryDetail.findByIdAndUpdate(AgainSubCategoryId, updates, options);
        if (!updatedAgainSubCategory) {
            return res.status(404).json({
                success: false,
                msg: "AgainSubCategorySchema not found."
            });
        }
        res.status(200).json({
            success: true,
            msg: "Again Sub Category updated successfully.",
            data: updatedAgainSubCategory
        });
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

// Product 
exports.createProduct = async (req, res) => {
    try {
        console.log(req.body);
        const {
            categoryName,
            subCategoryName,
            AgainSubCategoryName,
            productImages,
            productName,
            productDescriptions,
            productPoints
        } = req.body;

        const emptyFields = [];

        if (!categoryName) {
            emptyFields.push('categoryName');
        }
        if (!productName) {
            emptyFields.push('productName');
        }
        if (!productDescriptions) {
            emptyFields.push('productDescriptions');
        }

        if (emptyFields.length > 0) {
            return res.status(403).json({
                success: false,
                message: `Please Provide All Fields !! Empty fields: ${emptyFields.join(', ')}`
            });
        }

        const existingProduct = await productDetail.findOne({ productName: productName });
        if (existingProduct) {
            return res.status(403).json({
                success: false,
                message: "Product Name Already Exists !!"
            });
        }

        const newProduct = new productDetail({
            categoryName,
            subCategoryName,
            AgainSubCategoryName,
            productImage: productImages,
            productName,
            productDesc: productDescriptions, // Make sure to match the schema field name
            productPoints
        });

        console.log(newProduct);
        await newProduct.save();
        res.status(200).json({
            success: true,
            data: newProduct,
            message: "Product Created Successfully !!"
        });
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

exports.getAllProduct = async (req, res) => {
    try {
        const getAllProduct = await productDetail.find();
        if (getAllProduct.length === 0) {
            return res.status(403).json({
                success: false,
                msg: "Product Not Found"
            })
        }
        res.status(200).json({
            success: true,
            data: getAllProduct,
            msg: "All Product Found"
        })

    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const checkProduct = await productDetail.deleteOne({ _id: id })
        if (!checkProduct) {
            return res.status(403).json({
                success: false,
                msg: "Product Not Found"
            })
        }
        res.status(200).json({
            success: true,
            msg: "Product Deleted Succesfully !!"
        })
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
exports.updateProduct = async (req, res) => {
    try {
        console.log(req.body);
        const productId = req.params.id;
        const updates = req.body;

        // Check if there are no fields to update
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                success: false,
                msg: "No fields to update."
            });
        }

        // Map productDescriptions to productDesc if it exists in the updates
        if (updates.productDescriptions) {
            updates.productDesc = updates.productDescriptions;
            delete updates.productDescriptions; // Remove the alias field to avoid conflicts
        }

        // Handle merging of productImages if provided
        if (updates.productImages) {
            const existingProduct = await productDetail.findById(productId);
            if (!existingProduct) {
                return res.status(404).json({
                    success: false,
                    msg: "Product not found."
                });
            }
            
            // Merge existing and new images, avoiding duplicates
            updates.productImage = [...new Set([...existingProduct.productImage, ...updates.productImages])];
            delete updates.productImages; // Remove the alias field to avoid conflicts
        }

        const options = { new: true }; // Return the modified document
        const updatedProduct = await productDetail.findByIdAndUpdate(productId, updates, options);

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                msg: "Product not found."
            });
        }

        console.log("Updated product:", updatedProduct);

        res.status(200).json({
            success: true,
            msg: "Product updated successfully.",
            data: updatedProduct
        });
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}



