const songModel = require("../models/songModel");

exports.getAllSongs = async (req, res) => {
  try {
    const result = await songModel.find();
    res.status(200).json({
      status: "success",
      message: "done",
      data: result,
      count: result.length,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};
exports.getSong = async (req, res) => {
  try {
    const result = await songModel.findOne({_id :req.params.id});

    // const result = await songModel.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      message: "Fetch Completed",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
        status: "Failed",
        message: error,
      });
  }
};
exports.createSong = async (req, res) => {
  try {
    const newSong = await songModel.create(req.body);
    const result = await newSong.save();
    console.log(result);
    if (result) {
      res.status(200).json({
        status: "Successes",
        message:
          "this route is not implemented yet and know we are from the controller and know from separate server",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};
exports.updateSong = async (req, res) => {
    try {
        const result = await songModel.findByIdAndUpdate(req.params.id,req.body,
            {
                new:true,
                runValidators:true,
            });
        res.status(200).json({
          status: "Success",
          message: "Fetch Completed",
          data: result,
        });
    } catch (error) {
      res.status(400).json({
        status: "Failed",
        message: error,
      });
    }
  };
exports.deleteSong = async (req, res) => {
    try {
        const result = await songModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
          status: "Success",
          message: "Fetch Completed",
          data: result,
        });
    } catch (error) {
      res.status(400).json({
        status: "Failed",
        message: error,
      });
    }
  };
//   songs by group
exports.getSongbyGenere = async (req, res) => {
    try {
      const result = await songModel.find({Genere:req.params.genere});
      res.status(200).json({
        status: "Success",
        message: "Fetch Completed",
        data: result,
        count:result.length
      });
    } catch (error) {
      res.status(400).json({
          status: "Failed",
          message: error,
        });
    }
  };
  exports.getSongbyArtist = async (req, res) => {
    try {
        console.log(req.params.artist)
      const result = await songModel.find({Artist :req.params.artist});
      res.status(200).json({
        status: "Success",
        message: "Fetch Completed",
        data: result,
        count:result.length
      });
    } catch (error) {
      res.status(400).json({
          status: "Failed",
          message: error,
        });
    }
  };
exports.getSongbyAlbum = async (req, res) => {
    try {
      const result = await songModel.find({Album :req.params.album});
  
      // const result = await songModel.findById(req.params.id);
      res.status(200).json({
        status: "Success",
        message: "Fetch Completed",
        data: result,
        count:result.length
      });
    } catch (error) {
      res.status(400).json({
          status: "Failed",
          message: error,
        });
    }
  };
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
