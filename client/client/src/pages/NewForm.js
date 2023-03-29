import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
// import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DeleteButton from "./Shared/DeleteButton";
export default function NewForm({ IsGroupedByClicked,data,allsongs,setallsongs }) {
  console.log('allsongs allsongs allsongs : ',allsongs?.length);
  // console.log('data data data data data : ',data);
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  
  useEffect(() => {
    setValue("Title", data?.Title);
    setValue("Artist", data?.Artist);
    setValue("Album", data?.Album);
    setValue("Genere", data?.Genere);
    setValue("_id", data?._id);

  }, [data]);
const deleteHandler=(e)=>{
  // e.preventDefault()
  const id=getValues("_id")
  if(id){
    fetch(`http://localhost:3001/api/v1/songs/${id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
  
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.data);
        }); 
        reset();
  }
}
  const onSubmit = async (data,e) => {
    console.log(
      "handleSubmithandleSubmithandleSubmithandleSubmithandleSubmithandleSubmit : ",
      e
    );
    if(data._id){
      const d=data._id
      delete data._id;
      
      console.log('going to update the ',data)
      fetch(`http://localhost:3001/api/v1/songs/${d}`, {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.data);
        }); 
        resetField();
        setallsongs()
      alert("Sucessfully Updated");
      console.log(data.data);
    }else{
      try {
        fetch(`http://localhost:3001/api/v1/songs`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          setallsongs([...allsongs,data.data])
        });
        reset();

      console.log(data.data);
      } catch (error) {
        
      }
    }
   
  };
  const onCancel=()=>console.log('cancel Cliked')
  return (
    <Box maw={300} mx="auto">
      <form onSubmit={handleSubmit(onSubmit)} preve>
      {IsGroupedByClicked !== "New" ? (
            <TextInput disabled
            name="_id"
            label="Id"
            {...register("_id", { required: true })}
          />
          ) : (
           ''
          )}
      
        <TextInput
          {...register("Title", { required: true })}
          name="Title"
          withAsterisk
          label="Title"
        />
        <TextInput
          name="Artist"
          withAsterisk
          label="Artist"
          {...register("Artist", { required: true })}
        />
        <TextInput
          name="Album"
          label="Album"
          {...register("Album", { required: true })}
        />
        <TextInput
          name="Genere"
          label="Genere"
          {...register("Genere", { required: true })}
        />
        
        <Group position="right" mt="md">
          {IsGroupedByClicked !== "New" ? (<>
            <Button type="submit" name="Update">Update</Button>
            <DeleteButton onconfirm={deleteHandler} oncancel={onCancel}/>
            </>
          ) : (
            <Button type="submit" name="Save">Save</Button>
          )}
        </Group>
      </form>
    </Box>
  );
}
