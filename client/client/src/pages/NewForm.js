import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
// import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function NewForm({ IsGroupedByClicked, data }) {
  console.log('datadatadatadatadata : ',data);
  const {
    register,
    handleSubmit,
    watch,
    resetField,
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
  e.preventDefault()
  const id=getValues("_id")
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
        resetField();
  
      alert("Sucessfully Deleted");
      console.log(data.data);

}
  const onSubmit = async (data,e) => {
    console.log(
      "handleSubmithandleSubmithandleSubmithandleSubmithandleSubmithandleSubmit : ",
      e
    );
    if(data._id){
      const d=data._id
      console.log('befffffooorrreee to update the ',d)
      delete data._id;
      console.log('going to update the ',data)
      fetch(`http://localhost:3001/api/v1/songs/${d}`, {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.
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
        resetField();
      alert("Sucessfully Updated");
      console.log(data.data);
    }else{
      fetch(`http://localhost:3001/api/v1/songs`, {
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
      resetField();
  
      alert("Sucessfully added");
      console.log(data.data);
    }
   
  };
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
            <Button  onClick={(e)=>{deleteHandler(e)}} color="red">Delete</Button>
            </>
          ) : (
            <Button type="submit" name="Save">Save</Button>
          )}
        </Group>
      </form>
    </Box>
  );
}
