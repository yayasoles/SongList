import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
// import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function NewForm({IsGroupedByClicked,songdata}) {
  console.log(songdata)
  const { register, handleSubmit, watch,resetField,setValue, formState: { errors } } = useForm();
// const song=IsGroupedByClicked;
// alert(sondData)
// alert(song)
//  const songData= IsGroupedByClicked!=='New'?IsGroupedByClicked.split('by'):''
//  const [updateSong, setupdateSong] = useState()
 useEffect(() => {
setValue("Title",songdata.title)
setValue("Artist",songdata.artist)
setValue("Album",songdata.title)
setValue("Genere",songdata.genere)

}, [songdata])
  
  
  const onSubmit = async (data) => {
    // data.preventDefault();
    console.log(
      "handleSubmithandleSubmithandleSubmithandleSubmithandleSubmithandleSubmit : ",
      data
    );
    fetch(`http://localhost:3001/api/v1/songs`,{

        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
      });
      resetField()
      
    alert("Sucessfully added");
    console.log(data.data);
  };
  return (
    <Box maw={300} mx="auto">
      <form  onSubmit={handleSubmit(onSubmit)} preve>
        <TextInput
        {...register("Title", { required: true })}
          name="Title"
          withAsterisk
          label="Title"
          placeholder={songdata?.Title}
        />
        <TextInput
          name="Artist"
          withAsterisk
          label="Artist"
          value={songdata?.Artist}
          placeholder={songdata.Artist}
          {...register("Artist", { required: true })}
        />
        <TextInput
          name="Album"
          label="Album"
          placeholder={songdata?.Album}
          {...register("Album", { required: true })}
        />
        <TextInput
          name="Genere"
          placeholder={songdata?.Genere}
          label="Genere"
          {...register("Genere", { required: true })}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
