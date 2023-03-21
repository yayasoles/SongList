import { Box, Button, Collapse, Group, List, ThemeIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCircleCheck, IconCircleDashed, IconMusic } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

export default function CustomBox({ artist,from }) {
  const [datas, setdatas] = useState([]);
  const [opened, { toggle }] = useDisclosure(false);
const b=10
  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/songs/${from}/${artist}`)
      .then((response) => response.json())
      .then((data) => {
        setdatas(data.data);
        // console.log(album.length);
      });
  }, []);
  const dataList=datas.map((data)=>
    <List.Item>{data.Title}</List.Item>
  )
  return (
    <Box maw={400} mx="auto" primary>
      <Group position="left" mb={5}>
        <Button onClick={toggle}>Song by {artist}</Button>
      </Group>

      <Collapse
        in={opened}
        transitionDuration={1000}
        transitionTimingFunction="linear"
      >
        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconMusic size="1rem" />
            </ThemeIcon>
          }
        >
          {dataList}
        </List>
      </Collapse>
    </Box>
  );
}
