import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Text, Collapse, Box, List, ThemeIcon } from "@mantine/core";
import { useEffect, useState } from "react";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";
import CustomBox from "./CustomBox";
import NewForm from "./NewForm";

export default function Collapsable({ IsGroupedByClicked, groupBy }) {
  
  let artists = groupBy[0].map((song) => song.Artist);
  artists = [...new Set(artists)];
  let albums = groupBy[1].map((song) => song.Album);
  albums = [...new Set(albums)];
  let genere = groupBy[2].map((song) => song.Genere);
  genere = [...new Set(genere)];

  if( IsGroupedByClicked === "Artist"){
    const artistCollapse =
      artists.map((group) => (
          <CustomBox artist={group} from='Artist'/>
        ));
      return artistCollapse;
  }else  if( IsGroupedByClicked === "Album"){
    // console.log('albumsalbumsalbumsalbumsalbumsalbums : ',albums)
    const albumCollapse =albums.map((group) => (
          <CustomBox artist={group} from='Album'/>
        ));
      return albumCollapse;
  }else  if( IsGroupedByClicked === "Genere"){
    // console.log('GenereGenereGenereGenereGenereGenereGenere : ',genere)
    const genereCollapse = genere.map((group) => (
          <CustomBox artist={group} from='Genere'/>
        ));
      return genereCollapse;
  }else  {
    
      return <NewForm/>;
  }
  
}
