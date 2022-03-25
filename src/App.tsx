import React from "react";
import styled from "styled-components";
import Layout, {
  getContent,
  getDrawerSidebar,
  Root,
} from "@mui-treasury/layout";
import { StylesProvider, CssBaseline, createTheme } from "@material-ui/core";
import AppFooter from "./components/AppFooter";
import CustomSidebarTrigger from "./components/CustomSidebarTrigger";
import AppHeader from "./components/AppHeader";

const scheme = Layout();

// scheme is layout builder
scheme.configureHeader((builder) => {
  // set up Header
  builder.registerConfig("xs", {
    position: "fixed",
    clipped: true,
    initialHeight: 64, // for server side rendering
  });
});

// usually in dashboard layout, you need this sidebar
scheme.configureEdgeSidebar((builder) => {
  // set up EdgeSidebar
  builder
    .create("leftSidebar", {
      anchor: "left",
    })
    .registerPermanentConfig("xs", {
      width: 256,
      collapsible: true,
      collapsedWidth: 72,
    });

  builder
    .create("rightSidebar", {
      anchor: "right",
    })
    .registerPersistentConfig("sm", {
      width: 56,
      collapsible: false,
      persistentBehavior: "fit",
    });
});

const Content = getContent(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const theme = createTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
});

function App() {
  return (
    <StylesProvider injectFirst>
      <Root
        scheme={scheme}
        theme={theme}
        initialState={{ sidebar: { rightSidebar: { open: true } } }}
      >
        <CssBaseline />
        <AppHeader />
        <DrawerSidebar sidebarId={"leftSidebar"}>Sidebar</DrawerSidebar>
        <DrawerSidebar sidebarId={"rightSidebar"}>Sidebar</DrawerSidebar>
        <CustomSidebarTrigger />
        <Content>Content</Content>
        <AppFooter />
      </Root>
    </StylesProvider>
  );
}

export default App;
