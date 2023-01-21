import axios from "axios";
import { useState } from "react";

const useAnime = () => {
  const [topAnimes, setTopAnimes] = useState([]);
  const [loadingAnimes, setLoadingAnimes] = useState(false);

  const fireGetTopAnimes = async () => {
    setLoadingAnimes(true);
    axios
      .get("https://api.jikan.moe/v4/top/anime")
      .then(({ data }) => {
        setTopAnimes(data.data);
      })
      .catch(({ message }) => {
        enqueueSnackbar(message, { variant: "error" });
      });
    setLoadingAnimes(false);
  };

  return { topAnimes, loadingAnimes, fireGetTopAnimes };
};

export default useAnime;
