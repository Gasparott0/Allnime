import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const MainAppBar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography>Allnime</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainAppBar;
