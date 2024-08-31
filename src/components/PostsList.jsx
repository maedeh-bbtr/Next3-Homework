"use client";
import { deletePost, editPost } from "@/utils/actions";
import {
  Stack,
  ListItemText,
  ListItem,
  List,
  Button,
  TextField,
} from "@mui/material";

export default function ListItems({ arr }) {
  async function handleEdit(e, id) {
    await editPost(id, e.target.value);
  }

  async function handleDelete(id) {
    await deletePost(id);
  }

  return (
    <List>
      {arr.map((el) => (
        <ListItem key={el.id}>
          <Stack direction="row" spacing={3}>
            <ListItemText>
              <TextField
                size="small"
                sx={{ width: "500px" }}
                defaultValue={el.title}
              />
            </ListItemText>
            <Button
              size="small"
              variant="contained"
              mx="2"
              onClick={(e) => handleEdit(e, el.id)}
            >
              Edit
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={() => handleDelete(el.id)}
            >
              Delete
            </Button>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}
