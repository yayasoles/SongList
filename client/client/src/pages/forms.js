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

export default function Collapsable({ IsGroupedByClicked, groupBy,songdata,allsongs,setallsongs }) {
  console.log(IsGroupedByClicked)

  // const fff=IsGroupedByClicked.split("by")
  console.log('is clicked by : ',IsGroupedByClicked)
  if(IsGroupedByClicked===false){
    IsGroupedByClicked='New';
  }
  // console.log('I am fucking Tired',allsongs)
  console.log('songDatasongDatasongDatasongDatasongData ',songdata)
  
  let artists = groupBy[0].map((song) => song.Artist);
  artists = [...new Set(artists)];
  let albums = groupBy[1].map((song) => song.Album);
  albums = [...new Set(albums)];
  let genere = groupBy[2].map((song) => song.Genere);
  genere = [...new Set(genere)];

  if (IsGroupedByClicked === "Artist") {
    const artistCollapse = artists.map((group) => (
      <CustomBox key={group} artist={group} from="Artist" />
    ));
    return artistCollapse;
  } else if (IsGroupedByClicked === "Album") {
    const albumCollapse = albums.map((group) => (
      <CustomBox key={group} artist={group} from="Album" />
    ));
    return albumCollapse;
  } else if (IsGroupedByClicked === "Genere") {
    const genereCollapse = genere.map((group) => (
      <CustomBox key={group} artist={group} from="Genere" />
    ));
    return genereCollapse;
  } else  {
    return (
      <NewForm IsGroupedByClicked={IsGroupedByClicked}  data={songdata} allsongs={allsongs} setallsongs={setallsongs}/>
    );
  }
}
