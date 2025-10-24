import React, { Fragment, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Button, Tab, Tabs } from "@mui/material";

import logo from "../../assets/logo.svg";

const ToolBarWithMargin = styled(Toolbar)(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "3em",
}));

const LogoImage = styled("img")({
  height: "8em",
});

const TabsContainer = styled(Tabs)({
  marginLeft: "auto",
});

const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "25px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "25px",
  height: "45px",
}));

const LogoContainer = styled(Button)({
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
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

export default function Header() {
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const pathToValue = {
    "/": 0,
    "/services": 1,
    "/revolution": 2,
    "/about": 3,
    "/contact": 4,
    "/estimate": 5,
  };

  useEffect(() => {
    const newValue = pathToValue[window.location.pathname];
    if (newValue !== undefined && newValue !== value) {
      setValue(newValue);
    }
  }, [value]);

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <LogoContainer
              disableRipple
              onClick={() => setValue(0)}
              LinkComponent={Link}
              to="/"
            >
              <LogoImage alt="company logo" src={logo} />
            </LogoContainer>
            <TabsContainer
              indicatorColor="primary"
              textColor="secondary"
              value={value}
              onChange={handleChange}
              aria-label="header tabs"
            >
              <StyledTab LinkComponent={Link} to="/" label="Home" />
              <StyledTab LinkComponent={Link} to="/services" label="Services" />
              <StyledTab
                LinkComponent={Link}
                to="/revolution"
                label="The Revolution"
              />
              <StyledTab LinkComponent={Link} to="/about" label="About Us" />
              <StyledTab
                LinkComponent={Link}
                to="/contact"
                label="Contact Us"
              />
              <StyledButton variant="contained" color="secondary">
                Free Estimate
              </StyledButton>
            </TabsContainer>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolBarWithMargin />
    </Fragment>
  );
}
