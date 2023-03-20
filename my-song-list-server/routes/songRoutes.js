const express = require("express");
const songRouter = express.Router();
const Song = require("../models/songModel");
const {getAllSongs,createSong,getSong,updateSong,deleteSong,getSongbyGenere,getSongbyArtist,getSongbyAlbum}=require('../Controllers/songsController')

songRouter.route("/").get(getAllSongs).post(createSong);

songRouter.route("/:id").get(getSong).patch(updateSong).delete(deleteSong);
songRouter.route("/Genere/:genere").get(getSongbyGenere);
songRouter.route("/Artist/:artist").get(getSongbyArtist);
songRouter.route("/Album/:album").get(getSongbyAlbum);




module.exports=songRouter;
