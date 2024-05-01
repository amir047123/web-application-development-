const express = require ("express")
const app = express();
const cors = require ("cors");

const product = require ("./routes/product.route");






// middleware 
 app.use(express.json());
 app.use(cors());



 app.use("/api/v1/products",product);


 app.get("/",(req,res,_next)=>{
    res.send("Server is Running Successfully");
 })

 module.exports = app;