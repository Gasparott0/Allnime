import { Box, TextField, Typography } from "@mui/material";
import AnimeCarousel from "../../components/AnimeCarousel";
import logoImg from "../../assets/Logo.png";

const Home = () => {
  return (
    <Box
      width="70vw"
      height="100vh"
      margin="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      rowGap="2rem"
    >
      {/* <img src={logoImg} alt="" /> */}
      <TextField fullWidth label="Search for anime" id="fullWidth" />
      <Typography variant="h2">Top animes!</Typography>
      <AnimeCarousel />
    </Box>
  );
};

export default Home;
