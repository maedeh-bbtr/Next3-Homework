"use client";
import { Button, TextField, Typography, Stack } from "@mui/material";
import { useState } from "react";
import { addPost, addRecipe, addUser } from "@/utils/actions";

export default function Form({ formTitle }) {
  const [title, setTitle] = useState();
  async function handleSubmit(e) {
    e.preventDefault();
    if (formTitle == "Post") {
      await addPost(title);
    } else if (formTitle == "Recipe") {
      await addRecipe(title);
    } else if (formTitle == "User") {
      await addUser(title);
    }

    setTitle("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{ marginBottom: 20 }}>
      <Typography variant="h4">Add New {formTitle}</Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          required
          sx={{ width: "600px" }}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button variant="contained" type="submit" sx={{ width: "40px" }}>
          Submit
        </Button>
      </Stack>
    </form>
  );
}
