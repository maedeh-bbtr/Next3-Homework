import { List, ListItem, Typography } from "@mui/material";
export default function Users({ data }) {
  return (
    <>
      <Typography variant="h2">Users</Typography>
      <List>
        {data.map((el) => (
          <ListItem>
            {el.firstName} {el.lastName}
          </ListItem>
        ))}
      </List>
    </>
  );
}
