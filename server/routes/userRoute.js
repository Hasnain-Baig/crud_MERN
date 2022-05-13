const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()
const userModel = require("../models/userModel")

// getUsers
router.get('/', (req, res) => {
    userModel.find({}, (error, result) => {
        if (error) {
            res.json(error)
        }
        else {
            res.json(result)
        }
    })
})

// getUsersById
router.get('/:id', async (req, res) => {
    const id=req.params.id;

    userModel.findById(id,(error,result)=>{
        if (error){
            res.json(error)
        }
        else{
            console.log(result)
            res.json(result)
        }    
    })
})

// addUsers
router.post('/', async (req, res) => {
    const user = req.body;
    user._id=mongoose.Types.ObjectId();
    const newUser = new userModel(user);
    await newUser.save();
    res.json(user)
})

//update
router.put('/:id', async (req, res) => {
    const id=req.params.id;
    const name=req.body.name;
    const age=req.body.age;
    const username=req.body.username;

    userModel.findByIdAndUpdate(id,{name:name,age:age,username:username},(error,result)=>{
        if (error){
            res.json(error)
        }
        else{
            // console.log(result);
            res.json({_id:id,name:name,age:age,username:username})
        }    
    })
})

//delete
router.delete('/:id', async (req, res) => {

    const id=req.params.id;

    userModel.findByIdAndDelete(id,(error,result)=>{
        if (error){
            res.json(error)
        }
        else{
            res.json(result)
        }    
    })

})

module.exports = router;