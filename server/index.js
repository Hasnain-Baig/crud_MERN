// MONGODB =======> username=admin , password=czwnjrnoTE8aoDsx

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path=require('path')
const mainRoute=require("./routes/mainRoute")
const userRoute=require("./routes/userRoute")
const cors=require('cors');

const port = process.env.PORT || 4000

// mongoose.connect("mongodb+srv://admin:czwnjrnoTE8aoDsx@first.u4stp.mongodb.net/test");
mongoose.connect("mongodb+srv://admin:czwnjrnoTE8aoDsx@first.u4stp.mongodb.net/mern-tutor1?retryWrites=true&w=majority")
.then(()=>{console.log("MONOGO DB CONNECTED")})
.catch((err)=>{console.log("Connection Error:",err)})

app.use(express.json());//for using req.body
app.use(cors());//for react and express connection

//if(process.env.NODE_ENV){
//app.use(express.static('client/build'));
//}

app.use(express.static(path.join(__dirname+'/public')));
app.use("/apis",mainRoute);
app.use("/apis/users",userRoute);


// LISTENING PORT
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}/apis`)
})