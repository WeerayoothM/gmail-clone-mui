import React from "react";
import GmailButton from "@mui-treasury/components/button/gmail";
import {
  useSidebarCollapse,
  useSidebarCtx,
  getSidebarContent,
} from "@mui-treasury/layout";

import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import GmailSidebarItem from "@mui-treasury/components/sidebarItem/gmail";

import Inbox from "@material-ui/icons/Inbox";
import Star from "@material-ui/icons/Star";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import People from "@material-ui/icons/People";
import Info from "@material-ui/icons/Info";

import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import ModeComment from "@material-ui/icons/ModeComment";
import Schedule from "@material-ui/icons/Schedule";
import Mail from "@material-ui/icons/Mail";
import Report from "@material-ui/icons/Report";
import Settings from "@material-ui/icons/Settings";
import Videocam from "@material-ui/icons/Videocam";
import Keyboard from "@material-ui/icons/Keyboard";
import { Collapse } from "@material-ui/core";
import styled from "styled-components";

const SidebarContent = getSidebarContent(styled);

function AppSidebar() {
  const { expanded } = useSidebarCtx();
  const { state } = useSidebarCollapse();
  const [index, setIndex] = React.useState(0);
  const [seeMore, setSeeMore] = React.useState(false);
  const collapsed = !expanded && (state.collapsed as boolean);

  const commonProps = (i: number) => ({
    selected: index === i,
    onClick: () => setIndex(i),
    collapsed,
    dotOnCollapsed: true,
  });

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return (
    <>
      <Box pl={1} my={2} mb={collapsed ? 1 : 2}>
        <GmailButton collapsed={collapsed} />
      </Box>
      <SidebarContent>
        <Box maxWidth={240}>
          <List>
            <GmailSidebarItem
              color={"#da3125"}
              startIcon={<Inbox />}
              label={"Inbox"}
              amount={"1,198"}
              {...commonProps(0)}
              dotOnCollapsed={false}
            />
            <GmailSidebarItem
              startIcon={<Star />}
              label={"Starred"}
              {...commonProps(1)}
            />
            <GmailSidebarItem
              startIcon={<InsertDriveFile />}
              label={<b>Drafts</b>}
              amount={"5"}
              {...commonProps(2)}
            />
            <GmailSidebarItem
              color={"#1a73e8"}
              startIcon={<People />}
              label={<b>Social</b>}
              {...commonProps(3)}
            />
            <GmailSidebarItem
              color={"#e37400"}
              startIcon={<Info />}
              label={"Updates"}
              {...commonProps(4)}
            />
            <GmailSidebarItem
              startIcon={seeMore ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              label={seeMore ? "Less" : "More"}
              onClick={handleSeeMore}
            />
            <Collapse in={seeMore} timeout="auto" unmountOnExit>
              <GmailSidebarItem
                startIcon={<ModeComment />}
                label={"Chats"}
                {...commonProps(5)}
              />
              <GmailSidebarItem
                startIcon={<Schedule />}
                label={"Scheduled"}
                {...commonProps(6)}
              />
              <GmailSidebarItem
                startIcon={<Mail />}
                label={"All Mail"}
                {...commonProps(7)}
              />
              <GmailSidebarItem
                startIcon={<Report />}
                label={"Spam"}
                amount={"52"}
                {...commonProps(8)}
              />
              <GmailSidebarItem
                startIcon={<Settings />}
                label={"Manage Labels"}
                {...commonProps(9)}
              />
            </Collapse>
          </List>
        </Box>
      </SidebarContent>
      <Divider />
      <Box maxWidth={240} pb={3}>
        <List
          subheader={
            <Box pt={1} ml="21px" mr="12px">
              <b> Meet</b>
              <Box
                ml={1}
                px={0.5}
                display="inline-flex"
                bgcolor="#1a73e8"
                color="#fff"
                fontSize="0.75rem"
                borderRadius={4}
              >
                New
              </Box>
            </Box>
          }
        >
          <GmailSidebarItem
            startIcon={<Videocam />}
            label={"Start a meeing"}
            {...commonProps(10)}
          />
          <GmailSidebarItem
            startIcon={<Keyboard />}
            label={"Join a meeting"}
            {...commonProps(11)}
          />
        </List>
      </Box>
    </>
  );
}

export default AppSidebar;
