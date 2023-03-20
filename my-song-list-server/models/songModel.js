const mongose = require("mongoose");

const songSchema = new mongose.Schema({
    Title: {
      type: String,
      require: [true, "Title is required Feilds"],
      unique: true,
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