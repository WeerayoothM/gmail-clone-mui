import { Box, IconButton, Menu, MenuItem } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import * as React from "react";

interface ArrowMenuProps {
  options: string[];
  component: React.ReactNode;
}

const ITEM_HEIGHT = 48;

export default function ArrowMenu({ options, component }: ArrowMenuProps) {
  const actionStyles = useSizedIconButtonStyles({ childSize: 20, padding: 0 });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box display="flex" alignItems="center">
        {component}
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          classes={actionStyles}
        >
          <ArrowDropDown />
        </IconButton>
      </Box>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
