const mongoose = require ("mongoose")
const dotenv = require ("dotenv").config();

const app = require ("./app");

const port = process.env.PORT || 8080;

const start = async () =>{

    try{
        await mongoose.connect(process.env.DB_URl,{
            useNewUrlParser:true, 
            useUnifiedTopology : true ,
        });
        console.log("Database Connected Successfully!!!");

        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        })
    }catch(err){
        console.error(err);
        console.error("Error connecting to MongoDB");
    }


};

start();