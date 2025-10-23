import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/material/styles";

import logo from "../../assets/logo.svg";

const ToolBarWithMargin = styled(Toolbar)(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "3em",
}));

const LogoImage = styled("img")({
  height: "7em",
});

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

export default function Header(props) {
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <LogoImage alt="company logo" src={logo} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolBarWithMargin />
    </Fragment>
  );
}
