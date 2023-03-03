const mongoose = require('mongoose');
const ArticlesSchema = new mongoose.Schema({
    id : {
        type : String,
        required : true
        // maxLength : 25
    },
    title : {
        type : String
    },
    description : {
        type : String
    },
    markdown :{
        type : String
    }
});

const article = mongoose.model('article', ArticlesSchema);

module.exports = article;