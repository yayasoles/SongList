exports.getAllSongs=(req,res)=>{
    res.status(200).json({
        status:'error',
        message:'this route is not implemented yet and know we are from the controller and know from separate server'
    })
}


// const express = require("express");
// const tourRouter = express.Router();
// const Tour = require("../models/songModel");

// const getSong=(req,res)=>{
//     console.log(req.params)
//     const id=req.params.id*1;
//     const song=tourRouter.find
// }
// const getAllSongs=(req,res)=>{
//     res.status(204).json({
//         status:'error',
//         message:'this route is not implemented yet'
//     })
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
// tourRouter.route("/").get(getAllSongs).post(createAllSongs);
// tourRouter.route("/:id").get(getSong).patch(updateSongs).delete(deleteSong);
// module.exports=tourRouter;
