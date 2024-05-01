const express = require("express");
const{
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
}= require("../controllers/product.controller");



const router = express.Router();

router.post("/addProduct",createProduct)
router.get("/getProducts",getProducts)
router.get("/getProductById/:id",getProductById)
router.put("/updateProduct/:id",updateProduct)
router.delete("/deleteProduct/:id",deleteProduct)


module.exports=router;