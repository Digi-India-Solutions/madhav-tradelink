const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({
    categoryName :{
        type:String,
        required:[true,"Please Fill Category Name"]
    },
    subCategoryName :{
        type:String,
        required:[true,"Please Fill SubCategory Name"]
    },
    subCategoryImg :{
        type:String
    },
    subCategoryDesc :{
        type:String
    },
})

const subCategoryDetail = mongoose.model('subCategoryDetail', subCategorySchema);
module.exports = subCategoryDetail;
