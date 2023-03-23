import { useDisclosure } from "@mantine/hooks";
import {
  Button,
  Group,
  Text,
  Collapse,
  Box,
  List,
  ThemeIcon,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";
import CustomBox from "./CustomBox";
import NewForm from "./NewForm";

export default function Collapsable({ IsGroupedByClicked, groupBy,songData }) {
  // const fff=IsGroupedByClicked.split("by")
  // console.log('I am fucking Tired',fff[0],fff[1] ,' and length is ',fff.length)
  console.log('songDatasongDatasongDatasongDatasongData ',songData)
  // const [songData, setsongData] = useState();
  // useEffect(() => {
  //     fetch(`http://localhost:3001/api/v1/songs/byTitle`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log('response response',data)
  //         setsongData(data.data);
  //       });
  // }, []);
  // console.log('songDatasongDatasongDatasongData ',songData)
  let artists = groupBy[0].map((song) => song.Artist);
  artists = [...new Set(artists)];
  let albums = groupBy[1].map((song) => song.Album);
  albums = [...new Set(albums)];
  let genere = groupBy[2].map((song) => song.Genere);
  genere = [...new Set(genere)];

  if (IsGroupedByClicked === "Artist") {
    const artistCollapse = artists.map((group) => (
      <CustomBox artist={group} from="Artist" />
    ));
    return artistCollapse;
  } else if (IsGroupedByClicked === "Album") {
    // console.log('albumsalbumsalbumsalbumsalbumsalbums : ',albums)
    const albumCollapse = albums.map((group) => (
      <CustomBox artist={group} from="Album" />
    ));
    return albumCollapse;
  } else if (IsGroupedByClicked === "Genere") {
    const ffff = "" + IsGroupedByClicked;
    console.log(
      "GenereGenereGenereGenereGenereGenereGenere : ",
      IsGroupedByClicked
    );
    const genereCollapse = genere.map((group) => (
      <CustomBox artist={group} from="Genere" />
    ));
    return genereCollapse;
  } else {
    
    return (
      <NewForm IsGroupedByClicked={IsGroupedByClicked} songdata={songData}/>
    );
  }
}
