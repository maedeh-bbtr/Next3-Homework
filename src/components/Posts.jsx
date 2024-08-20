import { List, ListItem, Typography } from "@mui/material";
export default function Posts({ data }) {
  return (
    <>
      <Typography variant="h2">Posts</Typography>
      <List>
        {data.map((el) => (
          <ListItem>{el.title}</ListItem>
        ))}
      </List>
    </>
  );
}
