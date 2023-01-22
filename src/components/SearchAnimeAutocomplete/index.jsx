import { CircularProgress, TextField } from "@mui/material";
import _ from "lodash";
import { Fragment, useEffect, useState } from "react";
import { useSearchAnime } from "../../hooks";
import { StyledAutocomplete } from "./Styled";
import { useNavigate } from "react-router-dom";

const SearchAnimeAutocomplete = () => {
  const { searchAnimes, loadingAnimes, fireGetSearchAnimes } = useSearchAnime();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const getAnimes = (e) => {
    const query = e.target.value;
    fireGetSearchAnimes(query);
  };

  const handleGetAnimes = _.debounce(getAnimes, 700);

  const handleChange = (event, newValue) => {
    setSelected(newValue);
  };

  useEffect(() => {
    if (selected) navigate(`/anime/${selected.mal_id}`);
  }, [selected]);

  return (
    <StyledAutocomplete
      id="search-anime"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) =>
        option.title === value.title && option.source === value.source
      }
      getOptionLabel={(option) => `${option.title} - ${option.source}`}
      onChange={handleChange}
      onInputChange={handleGetAnimes}
      options={searchAnimes}
      loading={loadingAnimes}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for anime"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loadingAnimes ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default SearchAnimeAutocomplete;
