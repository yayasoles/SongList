
const express = require("express");
const dotenv = require("dotenv");
const cors=require('cors')
const songRouter=require('./routes/songRoutes')
const app = express();
dotenv.config({ path: "config.env" });

app.use(express.json());
app.use(cors())



// ROUTES
app.use('/api/v1/songs',songRouter)

module.exports=app;

