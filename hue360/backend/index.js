const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const ProductModel = require('./models/Users')
const nodemailer = require("nodemailer");


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/ArtGallery")

app.post('/registerCheck', async (req, res) => {
    const{name,email,pass}= req.body
    try{
        const check= await ProductModel.findOne({email: email})
        if(check){ //failure condition
            res.json("exist")
        }
        else{ //success condition
            res.json("notexist")
        }
    }
    catch(e){console.log(e)}
})


app.post('/buyMail', async (req, res) => {
    const {email}= req.body;
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            auth: {
              user: "sidduultralegend@gmail.com",
              pass: "knuv bumj czlo eybj",
            },
          });
          const info = await transporter.sendMail({
            from: 'sidduultralegend@gmail.com', // sender address
            to: email, // list of receivers
            subject: "Greetings ", // Subject line
            text: "This mail is to confirm that you have successfully purchased our art item", // plain text body
            html: "<b>Purchase confirmed</b>", // html body
          });
          console.log("info",info);
          res.json(users,info);

    } catch (error) {
        console.log(error);
    }
})


app.post('/loginCheck', async (req, res) => {
    const{email,pass}= req.body
    try{
        const check= await ProductModel.findOne({
            email: email,
            pass: pass,
          });
        if(check){ //success condition
            res.json(check.name)
        }
        else{ //failure condition
            res.json("fal")
        }
    }
    catch(e){console.log(e)}
})

app.post('/register',async (req, res) => {
    const users = await ProductModel.create(req.body);
    const {email}= req.body;
    console.log("reg stared")
        try {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                auth: {
                  user: "sidduultralegend@gmail.com",
                  pass: "knuv bumj czlo eybj",
                },
              });
              const info = await transporter.sendMail({
                from: 'sidduultralegend@gmail.com', // sender address
                to: email, // list of receivers
                subject: "Greetings!", // Subject line
                text: "You've successfully been registered to Hue360. Get ready to immerse yourself in a world of art", // plain text body
                html: "<b>Registration successful</b>", // html body
              });
              console.log("info",info);
              res.json(users,info);
    
        } catch (error) {
            console.log(error);
        }
    })
    

    // try {
    //     const {email}= req.body;
    //     Email.send({
    //         // Host : "smtp.elasticemail.com",
    //         // Username : "kvktemp142@gmail.com",
    //         // Port: 2525,
    //         // Password : "4AA722B5E793D2FA19AADB4A5C72D00FFA25",
    //         SecureToken: "3a0c8d4e-d1d4-416b-b31b-2c1efa525b75",
    //         To : email,
    //         From : "kvktemp142@gmail.com",
    //         Subject : "Thanks for buying",
    //         Body : "hiiiiiiiii"
    //     }).then(
    //       message => alert(message)
    //     );

    // } catch (error) {
        
    // }


// app.get('/getFinal', (req, res) => {
//     ProductModel.find().then(products=>res.json(products)).catch(err => res.json(err))
// })
const port = 8000
app.listen(port, () => {
    console.log("server is running on port: " +port)
})

 