import React from "react";
import { IconButton, Grid, Avatar, Box } from "@material-ui/core";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";

function AppSubSidebar() {
  const actionStyles = useSizedIconButtonStyles({ childSize: 20, padding: 10 });
  return (
    <Box p={1}>
      <Grid container spacing={4}>
        <Grid item>
          <IconButton classes={actionStyles}>
            <Avatar
              variant="square"
              alt=""
              src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
            />
          </IconButton>
          <Box height="15px" />
          <IconButton classes={actionStyles}>
            <Avatar
              variant="square"
              alt=""
              src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
            />
          </IconButton>
          <Box height="15px" />
          <IconButton classes={actionStyles}>
            <Avatar
              variant="square"
              alt=""
              src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png"
            />
          </IconButton>
          <Box height="15px" />
          <IconButton classes={actionStyles}>
            <Avatar
              variant="square"
              alt=""
              src="	https://www.gstatic.com/companion/icon_assets/contacts_2x.png"
            />
          </IconButton>
          <Box
            borderTop={"1px solid #dadce0"}
            width="20px"
            margin="0 auto"
            pb="16px"
            mt="16px"
          />
          <IconButton classes={actionStyles}>
            <Avatar
              variant="square"
              alt=""
              src="https://www.gstatic.com/images/icons/material/system/1x/add_grey600_24dp.png"
            />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AppSubSidebar;
