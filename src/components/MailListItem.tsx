import React from "react";
import styled from "styled-components";
import {
  Archive,
  CheckBox,
  CheckBoxOutlineBlank,
  Delete,
  Drafts,
  DragIndicator,
  Label,
  LabelOutlined,
  Star,
  StarBorder,
  WatchLater,
} from "@material-ui/icons";
import { IconButton, Box } from "@material-ui/core";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useRowGutterStyles } from "@mui-treasury/styles/gutter/row";
import { useGrabIconStyles } from "@mui-treasury/styles/icon/grab";
const StyledDrag = styled(DragIndicator)`
  color: rgba(0, 0, 0, 0.2);
  align-self: center;
`;

const Div = styled("div")`
  height: 40px;
  display: flex;
  align-items: center;
  box-shadow: inset 0 -1px 0 0 rgb(100 121 143 / 12%);
  transition: 0.3s;

  &:hover {
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
      0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    z-index: 1;
    ${StyledDrag} {
      opacity: 1;
    }
  }

  ${StyledDrag} {
    opacity: 0;
    transition: 0.3s;
  }
`;

const StyledIconButton = styled(IconButton)`
  color: rgba(0, 0, 0, 0.2);
  &:hover {
    color: rgba(0, 0, 0, 0.87);
  }
`;

const Text = styled("div")`
  -webkit-font-smoothing: anirialiased;
  font-size: 14px;
  color: #5f6368;
  min-width: 0; //! because
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  b {
    color: black;
  }
`;

const Title = styled(Text)`
  flex-basis: 200px;
  flex-shrink: 0;
  & > *:not(:first-child) {
    font-size: 12px;
    margin-left: 4px;
  }
`;

const DateLabel = styled(Text)`
  font-size: 12px;
  flex-basis: 100px;
  flex-shrink: 0;
  padding-right: 16px;
  text-align: right;
`;

function MailListItem() {
  const actionStyles = useSizedIconButtonStyles({ childSize: 24, padding: 8 });
  const gutterStyles = useRowGutterStyles({ size: -10, before: -10 });
  const grabStyles = useGrabIconStyles();
  const [hover, setHover] = React.useState(false);
  return (
    <Div>
      <StyledDrag className={grabStyles.root} />

      <Box flexShrink={0} className={gutterStyles.parent}>
        <StyledIconButton classes={actionStyles}>
          <CheckBoxOutlineBlank />
        </StyledIconButton>
        <StyledIconButton classes={actionStyles}>
          <StarBorder />
        </StyledIconButton>
        <StyledIconButton classes={actionStyles}>
          <LabelOutlined />
        </StyledIconButton>
      </Box>
      <Title>
        <b>Zipmex</b>
        <span>3</span>
      </Title>
      <Text>
        <b>Congratulations! You earned 0 THB this week with Zipmex! </b>
        <span>
          - Zipmex Keep locking your cryptocurrency with Zipmex to earn even
          more! Dear Weerayooth, Thanks again for being a loyal Zipmex saver!
          Check out your bonus earned for this week (from 2022-03-19 to 2022-
        </span>
      </Text>
      <DateLabel>
        <b>May 21</b>
      </DateLabel>
    </Div>
  );
}

export default MailListItem;
