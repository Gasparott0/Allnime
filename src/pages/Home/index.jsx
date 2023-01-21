import { Box, Typography } from "@mui/material";
import AnimeCarousel from "../../components/AnimeCarousel";

const Home = () => {
  return (
    <Box width="70%" margin="auto">
      <Typography variant="h2">Top animes!</Typography>
      <AnimeCarousel />
    </Box>
  );
};

export default Home;
