import axios from "axios";
import { useState } from "react";

const useSearchAnime = () => {
  const [searchAnimes, setSearchAnimes] = useState([]);
  const [loadingAnimes, setLoadingAnimes] = useState(false);

  const fireGetSearchAnimes = async (query) => {
    setLoadingAnimes(true);
    await axios
      .get(`https://api.jikan.moe/v4/anime?q=${query}`)
      .then(({ data }) => {
        setSearchAnimes(data.data);
      })
      .catch(({ message }) => {
        enqueueSnackbar(message, { variant: "error" });
      });
    setLoadingAnimes(false);
  };

  return { searchAnimes, loadingAnimes, fireGetSearchAnimes };
};

export default useSearchAnime;
