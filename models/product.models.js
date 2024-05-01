const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productSchema = new schema({
    name :{
        type: String,
    },
    price :{
        type: Number
    },
    description :{
        type: String
    },
   
});
const product = mongoose.model("product",productSchema);
module.exports = product;
