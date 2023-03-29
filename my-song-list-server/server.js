const mongose = require("mongoose");
const app = require("./app");

mongose
  .connect(
    "mongodb+srv://yayasoles:3cinvxguCpb1tb9s@cluster0.0l29e2h.mongodb.net/SongList?retryWrites=true",
    {
      useNewUrlParser: true,
      // useCreateIndex:true,
      // useFindAndModify:false
    }
  )
  .then((conn) => {
    console.log("DB Connection Succesesfully");
  });

const songSchema = new mongose.Schema({
  Title: {
    type: String,
    require: [true, "Title is required Feilds"],
    unique: true,
  },
  Album: {
    type: String,
    default: "unkown",
    unique: true,
  },
  Genere: {
    type: String,
  },
  Artist: {
    type: String,
    require: true,
  },
});
const Song = mongose.model("Songs", songSchema);


// const kasmaseSong = new Song({
//   Title: "ttttttttttt",
//   Album: "10",
//   Genere: "Rega",
//   Artist: "Tedy Afro",
// });
// kasmaseSong
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((error) => console.log("Errrorrs", error));

app.listen(3001, () => {
  console.log("app running at port 3001...");
});
