import React from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, IconButton } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  })
);

const useButtonStyles = makeStyles(() =>
  createStyles({
    root: {
      borderRadius: "4px",
      width: "20px",
    },
  })
);

export default function MenuListComposition({
  component,
}: {
  component: React.ReactNode;
}) {
  const classes = useStyles();
  const buttonClasses = useButtonStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        {/* <Button
          
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {component}
        </Button> */}
        <Box display="flex" alignItems="center">
          {component}
          <IconButton
            ref={anchorRef}
            aria-label="more"
            id="long-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            size="small"
            // variant="square"
            className={buttonClasses.root}
            // classes={buttonClasses.root}
          >
            <ArrowDropDown />
          </IconButton>
        </Box>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          placement="bottom-end"
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: "top",
              }}
            >
              <Paper style={{ border: "1px red" }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
