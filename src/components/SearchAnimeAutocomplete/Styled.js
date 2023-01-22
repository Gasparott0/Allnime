import { Autocomplete } from "@mui/material";
import styled from "styled-components";

export const StyledAutocomplete = styled(Autocomplete)({
  "& label": {
    color: "#ead2ea",
  },
  "& button": {
    color: "#ead2ea",
  },
  "& .MuiOutlinedInput-root": {
    color: "#ead2ea",
    "& button": {
      borderColor: "#ead2ea",
    },
    "& fieldset": {
      borderColor: "#ead2ea",
    },
    "&:hover fieldset": {
      borderColor: "#ead2ea",
    },
  },
});
