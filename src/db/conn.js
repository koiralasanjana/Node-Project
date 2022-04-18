const mongoose = require("mongoose");

//creating a db
mongoose.connect("mongodb://localhost:27017/nodeProject",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log ("connection successful");
}).catch((error)=>{
    console.log(error);
})
