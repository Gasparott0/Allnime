import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect, useState } from "react";

const AnimeGrid = () => {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/top/anime")
      .then(({ data }) => {
        setAnimes(data.data);
      })
      .catch(() => {
        alert("Error");
      });
    console.log(animes);
  }, []);

  return (
    <Grid container>
      {animes.map((anime) => (
        <Grid item xs={3}>
          <a href={anime.url}>
            <img src={anime.images.jpg.image_url} alt="" />
            <Typography>{anime.title}</Typography>
          </a>
        </Grid>
      ))}
    </Grid>
  );
};

export default AnimeGrid;
