const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const ProductModel = require('./models/Users')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/ArtGallery")

app.post('/register', (req, res) => {
    const{username,email,pass}= req.body
    try{
        const check= collection.findOne({email: email})
        if(check){ //failure condition
            res.json("exist")
        }
        else{ //success condition
            ProductModel.create(req.body).then(users=>res.json(users)).catch(err => res.json(err))
        }
    }
    catch(e){res.json("notexist")}
})

// app.get('/getFinal', (req, res) => {
//     ProductModel.find().then(products=>res.json(products)).catch(err => res.json(err))
// })

app.listen(3000, () => {
    console.log("server is running")
})

 