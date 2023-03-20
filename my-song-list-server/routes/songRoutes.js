const express = require("express");
const songRouter = express.Router();
const Song = require("../models/songModel");
const {getAllSongs}=require('../Controllers/songsController')
// const getSong=(req,res)=>{
//     console.log(req.params)
//     const id=req.params.id*1;
//     const song=tourRouter.find
// }
// const createAllSongs=(req,res)=>{
//     res.status(204).json({
//         status:'error',
//         message:'this route is not implemented yet'
//     })
// }
// const updateSongs=(req,res)=>{
//     res.status(204).json({
//         status:'error',
//         message:'this route is not implemented yet'
//     })
// }
// const deleteSong=(req,res)=>{
//     res.status(204).json({
//         status:'error',
//         message:'this route is not implemented yet'
//     })
// }

// Song Routes 
songRouter.route("/").get(getAllSongs);
// songRouter.route("/:id").get(getSong).patch(updateSongs).delete(deleteSong);


module.exports=songRouter;
