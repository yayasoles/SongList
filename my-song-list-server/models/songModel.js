const mongose = require("mongoose");

const songSchema = new mongose.Schema({
    Title: {
      unique: true,
      type: String,
      required: [true, "Title is required Feilds"],
    },
    Album: {
      type: String,
      unique:true
    },
    Genere: {
      type:String
  },
    Artist: {
      type:String,
      required:true,
  },
  });
  const SongModel = mongose.model("Song", songSchema);
  module.exports=SongModel;