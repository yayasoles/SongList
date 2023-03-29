
const ADD_SONG = "ADD_SONG";
const UPDATE_SONG = "UPDATE_SONG";

// Action
export  function AddSong(actionType, payLoad) {
  return {
    type: actionType,
    payLoad: payLoad,
  };
}
// Reducer
const initialState = {
  allSongs: [{}],
  albumCount: 0,
  artistCount: 0,
  genereCount: 0,
  songData: {},
  action: "",
};

export   default function  Reducer(state=initialState, action){
  switch (action.type) {
    case ADD_SONG:
      return {
        allSongs: [
          ...state?.allSongs,
          {
            Title: "Title",
            Artist: "Artist",
            Album: "Album",
            Genere: "Genere",
          },
        ],
        albumCount: state?.albumCount + 1,
        artistCount: state?.artistCo + 1,
        genereCount: state?.genereCount + 1,
      };
    case UPDATE_SONG:
      return {
        ...state.songData,Title: action.payLoad.Title,
        Artist: action.payLoad.Artist,
        Album: action.payLoad.Album,
        Genere: action.payLoad.Genere,
      };
    default:
      return state;
  }
}


