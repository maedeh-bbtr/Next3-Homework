"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Cards({ title, body, route, image }) {
  const router = useRouter();
  return (
    <Card sx={{ width: 200 }}>
      {image && <Image width={330} height={200} src={image} />}
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => router.push(route)}>
          More
        </Button>
      </CardActions>
    </Card>
  );
}
