const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const ProductModel = require('./models/Users')
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "sidduultralegend@gmail.com",
      pass: "lqrs vhpx amrc ujvm",
    },
  });

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
    console.log("reg stared")
    const {email}= req.body;

    try {
          const info = await transporter.sendMail({
            from: 'sidduultralegend@gmail.com', // sender address
            to: email, // list of receivers
            subject: "Greetings ", // Subject line
            text: "This mail is to confirm that you have successfully purchased our art item", // plain text body
            html: "<b>Purchase confirmed</b>", // html body
          });
          console.log("info",info);
          res.status(200).json(users,info);

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
    const {name,email,pass}= req.body
    const username = String(name);
    const users = await ProductModel.create(req.body);
    console.log(req.body);
    console.log("reg stared")
        try {
            //     transporter = nodemailer.createTransport({
            //     host: "smtp.gmail.com",
            //     port: 465,
            //     auth: {
            //       user: "sidduultralegend@gmail.com",
            //       pass: "lqrs vhpx amrc ujvm",
            //     },
            //   });
              const info = await transporter.sendMail({
                from: 'sidduultralegend@gmail.com', // sender address
                to: email, // list of receivers
                subject: "Successfully registered to Hue360!", // Subject line
                text: "You've successfully been registered to Hue360. Get ready to immerse yourself in a world of art", // plain text body
                html: "<h1>Greetings, "+username+"</h1><b>You've been successfully registered as Hue360</b> <p>Get ready to immerse yourself in a world of art!</p><img src='https://openseauserdata.com/files/7d5d665f92c09858439458678bc879a4.gif' alt='nyan cat'/>", // html body
              });
              console.log("info",info);
              console.log(email);
              res.status(200).json(users);
    
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

 