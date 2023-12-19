//Basic Lib Import
const express = require("express");
const Router = require("./Src/Router/Router");
const App = new express();
const BodyParser = require("body-parser");


// Security Middleware Lib Import
const RateLimiter = require("express-rate-limit");
const Helmet = require("helmet")
const MongoSanitize = require("express-mongo-sanitize");
const Xss = require("xss-clean");
const Hpp = require("hpp");
const Cors = require("cors");


// Database Configuration
const Mongose = require("mongoose");


// Security Middleware Implement 
App.use(Cors())
App.use(Helmet())
App.use(MongoSanitize())
App.use(Xss())
App.use(Hpp())


App.use(express.json({ limit: '50mb' }));
App.use(express.urlencoded({ limit: '50mb' }))



// Body Parser Implement 
App.use(BodyParser.json())





// Request Rate Limite 
const Limiter = RateLimiter(
    {
        windowMs: 15 * 60 * 1000, // 15 Minute
        max: 3000 // 3000 request
    }
)
App.use(Limiter)



// Mongo DB Database Connection 
// const uri = "mongodb+srv://Rasal_Hossain:mrhthvgvbnv@cluster0.u9f9cje.mongodb.net/?retryWrites=true&w=majority";
const uritwo = "mongodb+srv://Rasal_Hossain:mrhthvgvbnv@cluster0.u9f9cje.mongodb.net/Movie_World_Web_Application?retryWrites=true&w=majority";
// mongodb+srv://Rasal_Hossain:<password>@cluster0.u9f9cje.mongodb.net/
Mongose.connect(uritwo, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


















// API Create, Or Routing Implement
App.use("/api/v1", Router)


// Undefine Route Or Undefine API 
App.use("*", (req, res) => {
    res.status(404)
    res.json(
        {
            Status: "Not Found",
            Data: "Undefine Route Or Rong API"
        }
    )
})



module.exports = App;