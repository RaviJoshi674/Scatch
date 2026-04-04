const mongoose=require('mongoose');


const ownerSchema = mongoose.Schema({
    fullname : {
        type : String,
        minLenght : 3,
        trim : true
    },

    email : String,
    password : String,

    products : {
        typeof : Array,
        default : []
    },

    picture : Number,
    gstin : String
})

module.exports = mongoose.model("owner",ownerSchema);