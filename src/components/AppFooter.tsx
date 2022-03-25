import React from "react";
import { getFooter } from "@mui-treasury/layout";
import styled from "styled-components";
import { Box, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useTextStyles = makeStyles({
  root: {
    fontSize: 12,
    color: "#666",
  },
});

const Footer = getFooter(styled);

function AppFooter() {
  const classes = useTextStyles();
  return (
    <Footer>
      <Box px="1rem" my="1rem">
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Typography classes={classes}>
              12.55 GB of 15 GB (83%) used
            </Typography>
            <Link classes={classes}>Manage</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign={"center"}>
              <Link classes={classes}>Terms</Link> ·{" "}
              <Link classes={classes}>Privacy</Link> ·{" "}
              <Link classes={classes}>Program Policies</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign={"right"} color="#666">
              <Typography classes={classes}>
                Last account activity: 22 minute ago
              </Typography>
              <Link classes={classes}>Details</Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Footer>
  );
}

export default AppFooter;
