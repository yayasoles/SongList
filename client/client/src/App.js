import { useEffect, useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  rem,
  createStyles,
  UnstyledButton,
  Badge,
  Tooltip,
  Group,
  ActionIcon,
  Button,
  ScrollArea,
} from "@mantine/core";
import { IconBulb, IconCheckbox, IconUser } from "@tabler/icons-react";
import Collapsable from "./pages/forms";
const useStyles = createStyles((theme) => ({
  navbar: {
    paddingTop: 0,
  },

  section: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    marginBottom: theme.spacing.md,

    "&:not(:last-of-type)": {
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },
  },

  searchCode: {
    fontWeight: 700,
    fontSize: rem(10),
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
  },

  mainLinks: {
    paddingLeft: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
    paddingRight: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
    paddingBottom: theme.spacing.md,
  },

  mainLink: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: theme.fontSizes.xs,
    padding: `${rem(8)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  },

  mainLinkBadge: {
    padding: 0,
    width: rem(20),
    height: rem(20),
    pointerEvents: "none",
  },

  collections: {
    paddingLeft: `calc(${theme.spacing.md} - ${rem(6)})`,
    paddingRight: `calc(${theme.spacing.md} - ${rem(6)})`,
    paddingBottom: theme.spacing.md,
  },

  collectionsHeader: {
    paddingLeft: `calc(${theme.spacing.md} + ${rem(2)})`,
    paddingRight: theme.spacing.md,
    marginBottom: rem(5),
  },

  collectionLink: {
    display: "block",
    padding: `${rem(8)} ${theme.spacing.xs}`,
    textDecoration: "none",
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.xs,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    lineHeight: 1,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },
}));

const albumCount = 4;
const links = [
  { icon: IconBulb, label: "Artist", notifications: albumCount },
  { icon: IconCheckbox, label: "Genere", notifications: albumCount },
  { icon: IconUser, label: "Album", notifications: albumCount },
];

export default function AppShellDemo() {
  const [IsGroupedByClicked, setIsGroupedByClicked] = useState(false);
  const [songData, setsongData] = useState();
  const [clickedSong, setclickedSong] = useState("");
  const groupByClicked = (event) => {
    event.preventDefault();
    setIsGroupedByClicked(event.target.innerText);
    setsongData(1);
  };

  const songClickedHandler = (event) => {
    let title = "";
    let artist = "";
    event.preventDefault();
    // if(clickedSong===''){
    setIsGroupedByClicked(event.target.innerText);
    let data = event.target.innerText;
    data = data.split("by");
    title = data[0]?.replace("🎶", "").trim();
    artist = data[1]?.trim();
    setclickedSong({ title: title, artist: artist });
    //  alert(title+'by'+artist)
    // alert(clickedSong)
    // }else{
    //   alert(clickedSong)
    // }
    //     let songclick=clickedSong?.split('by')
    //     const artist=songclick[1].trim()
    //     songclick=songclick[0].split(' ')
    // console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj : ',songclick)
    //     const title=songclick.trim()
    //     // console.log('Title= :',title," Artist : ",artist)
    //     setclickedSong(event.target.innerText);
  };

  useEffect(() => {
    console.log("ffffffffffffffffffffffffffffffffffff ", clickedSong);
    if (clickedSong !== "") {
      const param = clickedSong.title + "by" + clickedSong.artist;
      console.log("param ", param);
      fetch(`http://localhost:3001/api/v1/songs/byTitle/${param}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("response response", data.data);
          setsongData(data.data);
        });
    }
  }, [clickedSong]);
  // const [generes, setgeneres] = useState(0);
  const [artist, setartist] = useState(0);
  const [album, setalbum] = useState([]);
  // const [song, setsong] = useState();

  // console.log('IsGroupedByClickedIsGroupedByClickedIsGroupedByClicked',IsGroupedByClicked)
  const [allSongs, setallSongs] = useState([]);

  let AllSongs = [];
  for (let index = 0; index < allSongs.length; index++) {
    AllSongs.push({
      emoji: "🎶",
      label: allSongs[index].Title,
      name: allSongs[index].Artist,
    });
  }
  const x = 10;

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/songs")
      .then((response) => response.json())
      .then((data) => {
        setallSongs(data.data);
      });
  }, []);

  let artists = allSongs?.map((song) => song.Artist);
  artists = [...new Set(artists)];
  // setartist(artists)

  let albums = allSongs?.map((song) => song.Album);
  albums = [...new Set(albums)];
  let genere = allSongs?.map((song) => song.Genere);
  genere = [...new Set(genere)];

  const songbyartist = allSongs.filter((song) => song.Artist !== undefined);
  let artistsOnly = songbyartist.map((song) => song.Artist);
  artistsOnly = [...new Set(artistsOnly)];

  const songbyalbum = allSongs.filter((song) => song.Album !== undefined);
  let albumsOnly = songbyalbum.map((song) => song.Album);
  albumsOnly = [...new Set(albumsOnly)];
  // console.log('albumsOnlyalbumsOnlyalbumsOnlyalbumsOnlyalbumsOnlyalbumsOnly : ',albumsOnly)

  const songbygenere = allSongs.filter((song) => song.Genere !== undefined);
  let generesOnly = songbyalbum.map((song) => song.Genere);
  generesOnly = [...new Set(generesOnly)];

  // console.log(artistsOnly, albumsOnly, generesOnly);

  const { classes } = useStyles();
  const mainLinks = links.map((link) => (
    <UnstyledButton
      onClick={(event) => groupByClicked(event)}
      key={link.Title}
      className={classes.mainLink}
      href="google.com"
    >
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.label == "Album" ? artists.length : ""}
          {link.label == "Artist" ? albums.length : ""}
          {link.label == "Genere" ? genere.length : ""}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const collectionLinks = AllSongs
    ? AllSongs.map((collection) => (
        <a
          href="/"
          onClick={(event) => songClickedHandler(event)}
          key={collection.label}
          className={classes.collectionLink}
        >
          <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
            {collection.emoji}
          </span>{" "}
          {collection.label}
          {" by "}
          {collection.name}
        </a>
      ))
    : "";

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Navbar
              height={700}
              width={{ sm: 300 }}
              p="md"
              className={classes.navbar}
            >
              <Navbar.Section className={classes.section}>
                <div className={classes.mainLinks}>{mainLinks}</div>
              </Navbar.Section>

              <Navbar.Section className={classes.section}>
                <Group className={classes.collectionsHeader} position="apart">
                  <Text size="xs" weight={500} color="dimmed">
                    Songs : {allSongs.length}
                  </Text>
                  <Tooltip label="Create New Song" withArrow position="right">
                    <ActionIcon variant="default" size={18}>
                      <Button
                        onClick={(event) => groupByClicked(event)}
                        size="0.8rem"
                      >
                        New
                      </Button>
                    </ActionIcon>
                  </Tooltip>
                </Group>
                  

                  <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
                    {collectionLinks}
                  </Navbar.Section>
                {/* <div className={classes.collections}>{collectionLinks}</div> */}
              </Navbar.Section>
            </Navbar>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
      <Collapsable
        IsGroupedByClicked={IsGroupedByClicked}
        groupBy={[songbyartist, songbyalbum, songbygenere]}
        songData={clickedSong}
        songdata={songData}
      ></Collapsable>
    </AppShell>
  );
}
