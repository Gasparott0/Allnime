import { Box, Typography } from "@mui/material";
import AnimeCarousel from "../../components/AnimeCarousel";
import logoImg from "../../assets/Logo.png";
import SearchAnimeAutocomplete from "../../components/SearchAnimeAutocomplete";

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
      <Box className="logo" display="flex" justifyContent="center">
        <img src={logoImg} height="160px" width="290px" alt="" />
      </Box>
      <SearchAnimeAutocomplete />
      <Typography variant="h2">Top animes!</Typography>
      <AnimeCarousel />
    </Box>
  );
};

export default Home;
