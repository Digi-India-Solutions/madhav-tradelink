const mongoose = require('mongoose');

const againSubCategorySchema = mongoose.Schema({
    categoryName :{
        type:String,
        required:[true,"Please Fill Category Name"]
    },
    subCategoryName :{
        type:String,
        required:[true,"Please Fill SubCategory Name"]
    },
    AgainSubCategoryName :{
        type:String,
        required:[true,"Please Fill Again SubCategory Name"]
    },
    againSubCategoryImg :{
        type:String
    },
    againSubCategoryDesc :{
        type:String
    },
})

const againSubCategoryDetail = mongoose.model('againSubCategoryDetail', againSubCategorySchema);
module.exports = againSubCategoryDetail;
