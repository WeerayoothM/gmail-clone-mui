import React from "react";
import {
  Box,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
  Avatar,
} from "@material-ui/core";
import {
  ArrowDropDown,
  Menu,
  Search,
  HelpOutline,
  Apps,
} from "@material-ui/icons";
import { getCollapseIcon, getHeader } from "@mui-treasury/layout";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useRowGutterStyles } from "@mui-treasury/styles/gutter/row";
import { useGoogleAvatarStyles } from "@mui-treasury/styles/avatar/google";
import styled from "styled-components";

const Header = getHeader(styled);
const CollapseIcon = getCollapseIcon(styled);

const useStyles = makeStyles({
  collapse: {
    marginLeft: -12,
    marginRight: 4,
  },
  logo: {
    height: 40,
  },
  toolbar: {
    backgroundColor: "#fff",
    boxShadow: "inset 0 -1px 0 rgb(100 121 143 / 12%)",
  },
  searchInput: {
    backgroundColor: "#f1f2f4",
    height: 48,
    borderRadius: 8,
    padding: "0 8px",
    maxWidth: 720,
    flexGrow: 1,
  },
});

function AppHeader() {
  const styles = useStyles();
  const actionStyles = useSizedIconButtonStyles({ padding: 8, childSize: 24 });
  const avatarStyles = useSizedIconButtonStyles({ padding: 4, childSize: 32 });
  const gutterStyles = useRowGutterStyles({ size: 8 });
  const google = useGoogleAvatarStyles({ avatarSize: 32, ringSize: 40 });
  const tinyGutterStyles = useRowGutterStyles({
    size: 2,
    before: 10,
  });
  return (
    <Header>
      <Toolbar className={styles.toolbar}>
        <Box width={230} display="flex" alignItems="center">
          <CollapseIcon className={styles.collapse} sidebarId="leftSidebar">
            {() => <Menu />}
          </CollapseIcon>
          <img
            className={styles.logo}
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
            alt=""
          />
        </Box>
        <InputBase
          className={styles.searchInput}
          placeholder="Search mail"
          startAdornment={
            <IconButton
              className={gutterStyles.adjacent}
              classes={actionStyles}
            >
              <Search />
            </IconButton>
          }
          endAdornment={
            <IconButton
              className={gutterStyles.adjacent}
              classes={actionStyles}
            >
              <ArrowDropDown />
            </IconButton>
          }
        />
        <Box ml={"auto"} className={tinyGutterStyles.parent}>
          <IconButton classes={actionStyles}>
            <HelpOutline />
          </IconButton>

          <IconButton classes={actionStyles}>
            <Apps />
          </IconButton>
        </Box>
        <Box ml={1} mr={-1.5}>
          <IconButton classes={avatarStyles} className={google.root}>
            <Avatar
              alt=""
              src="https://lh3.googleusercontent.com/ogw/ADea4I5DBBYLuzAjKwNvPeU__c5uQJkhyLhfuMN9w0OJ4A=s64-c-mo"
            />
          </IconButton>
        </Box>
      </Toolbar>
    </Header>
  );
}

export default AppHeader;
