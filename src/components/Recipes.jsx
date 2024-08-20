import { List, ListItem, Typography } from "@mui/material";
export default function Recipes({ data }) {
  return (
    <>
      <Typography variant="h2">Recipes</Typography>
      <List>
        {data.map((el) => (
          <ListItem>{el.name}</ListItem>
        ))}
      </List>
    </>
  );
}
