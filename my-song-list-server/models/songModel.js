const mongose = require("mongoose");

const songSchema = new mongose.Schema({
    Title: {
      unique: true,
      type: String,
      require: [true, "Title is required Feilds"],
    },
    Album: {
      type: String,
      default: "unkown",
      unique:true
    },
    Genere: {
      type:String
  },
    Artist: {
      type:String,
      require:true,
  },
  });
  const Song = mongose.model("Song", songSchema);
  module.exports=Song;