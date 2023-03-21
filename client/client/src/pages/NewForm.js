import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
// import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function NewForm() {
  useEffect(() => {}, []);
  const { register, handleSubmit, watch,resetField, formState: { errors } } = useForm();
//   const form = useForm({
//     initialValues: {
//       Title: "",
//       Album: "",
//       Artist: "",
//       Genere: "",
//     },

//     validate: {
//       email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
//     },
//   });
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

        // setdatas(data.data);
        console.log(data.data);
      });
      resetField()
    alert("added");
  };

  return (
    <Box maw={300} mx="auto">
      <form  onSubmit={handleSubmit(onSubmit)} preve>
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
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
