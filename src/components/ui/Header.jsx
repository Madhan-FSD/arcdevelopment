import React, { Fragment, useEffect, useMemo, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {
  Button,
  Menu,
  MenuItem,
  Paper,
  Tab,
  Tabs,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../assets/logo.svg";

const ToolBarWithMargin = styled(Toolbar)(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    marginBottom: "2em",
  },
  [theme.breakpoints.down("xs")]: {
    height: "1.25em",
  },
}));

const LogoImage = styled("img")(({ theme }) => ({
  height: "8em",
  [theme.breakpoints.down("md")]: {
    height: "7em",
  },
  [theme.breakpoints.down("xs")]: {
    height: "5.5em",
  },
}));

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

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
    borderRadius: 0,
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: `${theme.palette.primary.dark} !important`,
  },
  ...theme.typography.tab,
}));

const DrawerIconContainer = styled(IconButton)({
  marginLeft: "auto",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const DrawerIcon = styled(MenuIcon)({
  height: "50px",
  width: "50px",
});

const StyledDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
    borderRadius: 0,
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  ...theme.typography.tab,
  color: "white",
}));

const StyledFreeEstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.tab,
  color: "white",
  backgroundColor: theme.palette.common.orange,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  opacity: 0.7,
  "&.Mui-selected": {
    backgroundColor: `${theme.palette.primary.dark} !important`,
    opacity: 1,
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

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

export default function Header({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const theme = useTheme();
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = useMemo(
    () => [
      { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
      {
        name: "Custom Software Development",
        link: "/customsoftware",
        activeIndex: 1,
        selectedIndex: 1,
      },
      {
        name: "iOS/Android App Development",
        link: "/mobileapps",
        activeIndex: 1,
        selectedIndex: 2,
      },
      {
        name: "Websites Development",
        link: "/websites",
        activeIndex: 1,
        selectedIndex: 3,
      },
    ],
    []
  );

  const routes = useMemo(
    () => [
      { name: "Home", link: "/", activeIndex: 0 },
      {
        name: "Services",
        link: "/services",
        activeIndex: 1,
        ariaOwns: anchorEl ? "simple-menu" : undefined,
        ariaPopup: anchorEl ? "true" : undefined,
        onMouseOver: (e) => handlClick(e),
      },
      { name: "The Revolution", link: "/revolution", activeIndex: 2 },
      { name: "About Us", link: "/about", activeIndex: 3 },
      { name: "Contact Us", link: "/contact", activeIndex: 4 },
    ],
    [anchorEl]
  );

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [menuOptions, routes, selectedIndex, value]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handlClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setSelectedIndex(i);
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const tabs = (
    <Fragment>
      <TabsContainer
        indicatorColor="primary"
        textColor="secondary"
        value={value}
        onChange={handleChange}
        aria-label="header tabs"
      >
        {routes.map((route) => (
          <StyledTab
            aria-owns={route?.ariaOwns}
            aria-haspopup={route?.ariaPopup}
            onMouseOver={route?.onMouseOver}
            key={route.link}
            component={Link}
            to={route.link}
            label={route?.name}
          />
        ))}
      </TabsContainer>
      <StyledButton variant="contained" color="secondary">
        Free Estimate
      </StyledButton>
      <StyledMenu
        id="simple-menu"
        onClose={handleClose}
        open={openMenu}
        anchorEl={anchorEl}
        slotProps={{
          list: { onMouseLeave: handleClose },
        }}
        elevation={0}
        keepMounted
      >
        {menuOptions.map((option, index) => (
          <StyledMenuItem
            component={Link}
            to={option?.link}
            key={`${option?.name}_${index}`}
            onClick={(e) => {
              handleMenuItemClick(e, index);
              setValue(1);
              handleClose();
            }}
            selected={index === selectedIndex && value === 1}
          >
            {option?.name}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <StyledDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <ToolBarWithMargin />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={route.link}
              disablePadding
              divider
              component={Link}
              to={route.link}
            >
              <StyledListItemButton
                selected={value === route.activeIndex}
                onClick={() => {
                  setOpenDrawer(false);
                  setValue(route.activeIndex);
                }}
              >
                <StyledListItemText disableTypography>
                  {route?.name}
                </StyledListItemText>
              </StyledListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding divider component={Link} to="/estimate">
            <StyledFreeEstimateButton
              fullWidth
              onClick={() => {
                setOpenDrawer(false);
                setValue(5);
              }}
            >
              <StyledListItemText disableTypography>
                Free Estimate
              </StyledListItemText>
            </StyledFreeEstimateButton>
          </ListItem>
        </List>
      </StyledDrawer>
      <DrawerIconContainer
        disableRipple
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <DrawerIcon />
      </DrawerIconContainer>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <StyledAppBar position="fixed">
          <Toolbar disableGutters>
            <LogoContainer
              disableRipple
              onClick={() => setValue(0)}
              component={Link}
              to="/"
            >
              <LogoImage alt="company logo" src={logo} />
            </LogoContainer>
            {matches ? drawer : tabs}
          </Toolbar>
        </StyledAppBar>
      </ElevationScroll>
      <ToolBarWithMargin />
    </Fragment>
  );
}
