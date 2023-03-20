
const express = require("express");
const dotenv = require("dotenv");

const songRouter=require('./routes/songRoutes')
const app = express();
dotenv.config({ path: "config.env" });



// const Song = mongose.model("Song", songSchema);
// const kasmaseSong = new Song({
//   Album: 10,
//   Genere: "Rega",
// });
// kasmaseSong
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((error) => console.log("Errrorrs", error));
//express didn't pass the request body with the request by default we have to use a middle ware like express.json()
app.use(express.json());




// ROUTES
app.use('/api/v1/songs',songRouter)

module.exports=app;

