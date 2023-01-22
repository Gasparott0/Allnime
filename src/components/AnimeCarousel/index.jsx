import { useEffect, useRef, useState } from "react";
import AnimeCard from "../AnimeCard";
import { motion } from "framer-motion";
import "./style.css";
import { useAnime } from "../../hooks";
import { Box, CircularProgress } from "@mui/material";

const AnimeCarousel = () => {
  const carouselDiv = useRef();
  const { topAnimes, loadingAnimes, fireGetTopAnimes } = useAnime();
  const [width, setWidth] = useState(0);

  const getTopAnimes = async () => {
    await fireGetTopAnimes();
  };

  useEffect(() => {
    getTopAnimes();
  }, []);

  useEffect(() => {
    setWidth(
      carouselDiv.current?.scrollWidth - carouselDiv.current?.offsetWidth
    );
  }, [topAnimes]);

  if (loadingAnimes)
    return (
      <Box
        height="320px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress color="primary" />
      </Box>
    );

  return (
    <motion.div
      ref={carouselDiv}
      className="carousel"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="inner"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {topAnimes.map((anime) => (
          <motion.div className="item" key={anime.title}>
            <AnimeCard anime={anime} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AnimeCarousel;
