import React from "react";
import { IconButton, Grid, Avatar, Box } from "@material-ui/core";

function AppSubSidebar() {
  return (
    <Box p={2}>
      <Grid container spacing={4}>
        <Grid item>
          <IconButton>
            <Avatar
              alt=""
              src="https://img.utdstc.com/icon/44b/e6e/44be6ecf2afa078df6dd3c949ce1da1258781d4d2d02178472ae9ba3aac089ed:200"
            />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AppSubSidebar;
