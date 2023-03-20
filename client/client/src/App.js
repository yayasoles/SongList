import { useState,useEffect } from "react";
import {
  createStyles,
  Navbar,
  TextInput,
  Code,
  UnstyledButton,
  Badge,
  Text,
  Group,
  ActionIcon,
  Tooltip,
  rem,
  Button,
} from '@mantine/core';
import {
  IconBulb,
  IconUser,
  IconCheckbox,
  IconSearch,
  IconPlus,
  IconSelector,
} from '@tabler/icons-react';
// import { UserButton } from '../UserButton/UserButton';


// states

const useStyles = createStyles((theme) => ({
  navbar: {
    paddingTop: 0,
  },

  section: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    marginBottom: theme.spacing.md,

    '&:not(:last-of-type)': {
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  },

  searchCode: {
    fontWeight: 700,
    fontSize: rem(10),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
  },

  mainLinks: {
    paddingLeft: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
    paddingRight: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
    paddingBottom: theme.spacing.md,
  },

  mainLink: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: theme.fontSizes.xs,
    padding: `${rem(8)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
  },

  mainLinkBadge: {
    padding: 0,
    width: rem(20),
    height: rem(20),
    pointerEvents: 'none',
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
    display: 'block',
    padding: `${rem(8)} ${theme.spacing.xs}`,
    textDecoration: 'none',
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    lineHeight: 1,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
}));
const albumCount=4;
const links = [
  { icon: IconBulb, label: 'Artist', notifications: albumCount },
  { icon: IconCheckbox, label: 'Genere', notifications: albumCount },
  { icon: IconUser, label: 'Album', notifications:  albumCount},
];

let songs = [
  { emoji: '🎶', label: 'Sales' },
  { emoji: '🎶', label: 'Deliveries' },
  { emoji: '🎶', label: 'Discounts' },
  { emoji: '🎶', label: 'Profits' },
  { emoji: '🎶', label: 'Reports' },
  { emoji: '🎶', label: 'Orders' },
  { emoji: '🎶', label: 'Events' },
  { emoji: '🎶', label: 'Debts' },
  { emoji: '🎶', label: 'Customers' },
];
export default function NavbarSearch() {
  //States
  const [generes, setgeneres] = useState(0)
  const [artist, setartist] = useState(0)
  const [album, setalbum] = useState([])
  const [allSongs, setallSongs] = useState([])
let AllSongs=[];
for (let index = 0; index < allSongs.length; index++) {
  AllSongs.push({emoji:'🎶',label:allSongs[index].Title,name:allSongs[index].Artist}) 
}
  // Use Effects
useEffect(() => {
  fetch('http://localhost:3001/api/v1/songs/Album/Kena Leb').then(
    response=>
      response.json()
  ).then(
    data=>{
      setalbum(data.data)
      console.log(data.data)
      console.log(album.length)
    }
  );
  fetch('http://localhost:3001/api/v1/songs').then(
      response=>
        response.json()
    ).then(
      data=>{
        setallSongs(data.data)
        console.log(data.data)
        console.log(album.length)
        // songs=allSongs;

      }
    )
  }, [allSongs,album])

  const songbyartist=allSongs.filter(song=>song.Artist!=undefined)
  const songbyalbum=allSongs.filter(song=>song.Album!=undefined)
  const songbygenere=allSongs.filter(song=>song.Genere!=undefined)

  //get all songs Use Effect
  useEffect(() => {
    // fetch(`http://localhost:3001/api/v1/songs/Album/${}`).then(
    //   response=>response.json()
    // ).then(
    //   data=>{
    //     setalbum(data.data)
    //     console.log(data.data)
    //     console.log(album.length)
    //     // songs=allSongs;

    //   }
    // )
    }, [])
  
  const { classes } = useStyles();
  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.Title} className={classes.mainLink} href="google.com">
      <div className={classes.mainLinkInner} >
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.label=='Album'?songbyalbum.length:''}
          {link.label=='Artist'?songbyartist.length:''}
          {link.label=='Genere'?songbygenere.length:''}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const collectionLinks = AllSongs?AllSongs.map((collection) => (
    <a
      href="/"
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>{collection.emoji}</span>{' '}
      {collection.label}{' by '}{collection.name}
    </a>
  )):'';

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <Group className={classes.collectionsHeader} position="apart">
          <Text size="xs" weight={500} color="dimmed">
            Songs  : {allSongs.length}
          </Text>
          <Tooltip label="Create New Song" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <Button size="0.8rem">New</Button>
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>{collectionLinks}</div>
      </Navbar.Section>
    </Navbar>
  );
}