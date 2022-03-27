import React, { useState } from "react";
import GmailTabsGroup from "./GmailTabsGroup";
import {
  Box,
  Checkbox,
  IconButton,
  MenuItem,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import {
  Keyboard,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  MoreVert,
  Refresh,
  Settings,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
// import ArrowMenu from "./ArrowMenu";
import ArrowMenu from "@mui-treasury/components/menu/arrow";
import MenuListComposition from "./MenuListComposition";
import { useRowGutterStyles } from "@mui-treasury/styles/gutter/row";
import MailListItem from "./MailListItem";

const Div = styled("div")`
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-shadow: inset 0 -1px 0 0 rgb(100 121 143 / 12%);
`;

const useTextStyles = makeStyles({
  root: {
    fontSize: 12,
    paddingLeft: 32,
    width: 160,
    color: "#666",
    zIndex: 1300,
  },
});

const useStyles = makeStyles(() => ({
  root: {
    fontSize: 14,
    paddingLeft: 32,
    width: 160,
  },
}));

const useCheckBoxStyles = makeStyles(({ pala }: any) => ({
  checked: {
    color: "red",
  },
}));

function AppContent() {
  const actionStyles = useSizedIconButtonStyles({ childSize: 24, padding: 8 });
  const classes = useTextStyles();
  const checkBoxClasses = useCheckBoxStyles();
  const menuItemClasses = useStyles();
  const gutterStyles = useRowGutterStyles({ size: "0.25rem" });
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const boxRef = React.useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    if (boxRef) {
      setAnchorEl(boxRef?.current);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Div ref={boxRef}>
        <Box display="inline-flex" alignItems="center" zIndex={1300}>
          <ArrowMenu
            anchorEl={anchorEl}
            onClick={handleClick}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            renderElement={({ styles, onClose }) => (
              <Checkbox
                classes={checkBoxClasses}
                className={styles.button}
                color="primary"
                onChange={handleClose}
              />
            )}
          >
            <MenuItem classes={menuItemClasses} style={{ zIndex: "1" }}>
              All
            </MenuItem>
            <MenuItem classes={menuItemClasses} style={{ zIndex: "1" }}>
              None
            </MenuItem>
            <MenuItem classes={menuItemClasses} style={{ zIndex: "1" }}>
              Read
            </MenuItem>
            <MenuItem classes={menuItemClasses} style={{ zIndex: "1" }}>
              Unread
            </MenuItem>
          </ArrowMenu>
          <IconButton classes={actionStyles}>
            <Refresh />
          </IconButton>
          <IconButton classes={actionStyles}>
            <MoreVert />
          </IconButton>
        </Box>
        <Box
          ml="auto"
          display="inline-flex"
          alignItems="center"
          className={gutterStyles.parent}
          zIndex={1300}
        >
          <Typography classes={classes}>1-50 from 3,270</Typography>
          <IconButton classes={actionStyles}>
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton classes={actionStyles}>
            <KeyboardArrowRight />
          </IconButton>

          <MenuListComposition
            component={
              <IconButton classes={actionStyles}>
                <Keyboard />
              </IconButton>
            }
          />
          <IconButton classes={actionStyles}>
            <Settings />
          </IconButton>
        </Box>
      </Div>
      <GmailTabsGroup />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
      <MailListItem />
    </Box>
  );
}

export default AppContent;
