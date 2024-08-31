const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    categoryName :{
        type:String,
        required:[true,"Please Fill Category Name"]
    },
    subCategoryName :{
        type:String
    },
    AgainSubCategoryName :{
        type:String
    },
    productName :{
        type:String,
        required:[true,"Please Fill Product Name"]
    },
    productDesc :{
        type:[String]
    },
    productImage: {
        type:[String]
    },
    productPoints:{
        heading:{
            type:String
        },
        points:{
            type:[String]
        }
    }
})

const productDetail = mongoose.model('productDetail', productSchema);
module.exports = productDetail;
