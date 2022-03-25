import React from "react";
import cx from "clsx";
import { IconButton } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import { useSidebarTrigger } from "@mui-treasury/layout";
import styled from "styled-components";

const StyledIconButton = styled(IconButton)`
  position: fixed;
  z-index: 1210;
  right: 8px;
  bottom: 0.5rem;
  padding: 10px;

  svg {
    transition: 0.3s;
  }

  &.CustomTrigger-closed {
    transition: 0.3s ease;
    box-shadow: 0 1px 1px 0 rgb(60 64 67 / 30%),
      0 1px 3px 1px rgb(60 64 67 / 15%);
    border-radius: 40px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    right: -10px;

    &:hover {
      right: 0;
      padding-right: 18px;
      svg {
        margin-left: 0;
      }
    }

    svg {
      transform: rotate(180deg);
      margin-left: -6px;
    }
  }
`;

function CustomSidebarTrigger() {
  const { state, setOpen } = useSidebarTrigger("rightSidebar");
  return (
    <StyledIconButton
      className={cx(!state.open && "CustomTrigger-closed")}
      onClick={() => setOpen("rightSidebar", !state.open)}
    >
      <KeyboardArrowRight fontSize="small" />
    </StyledIconButton>
  );
}

export default CustomSidebarTrigger;
