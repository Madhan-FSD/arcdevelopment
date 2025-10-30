import styled from "@emotion/styled";
import React from "react";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { FacebookOutlined, Instagram, X } from "@mui/icons-material";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.common.blue,
  width: "100%",
  zIndex: theme.zIndex.drawer + 1,
  position: "relative",
}));

const StyledFooterAdornment = styled("img")(({ theme }) => ({
  width: "25em",
  verticalAlign: "bottom",
  [theme.breakpoints.down("md")]: {
    width: "21em",
  },
  [theme.breakpoints.down("xs")]: {
    width: "15em",
  },
}));

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledGridItem = styled(Grid)(({ theme, margin }) => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "0.75rem",
  fontWeight: "bold",
  margin: margin ? "3em" : "auto",
  textDecoration: "none",
}));

const StyledIconGrid = styled(Grid)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
}));

const StyledSocialLinksGrid = styled(Grid)(({ theme }) => ({
  position: "absolute",
  marginTop: "-6em",
  right: "1.5em",
  [theme.breakpoints.down("xs")]: {
    right: "0.6em",
  },
}));

const StyledIcon = styled("svg")(({ theme }) => ({
  height: "1.75em",
  width: "1.75em",
  [theme.breakpoints.down("xs")]: {
    height: "1.25em",
    width: "1.25em",
  },
}));

export default function Footer({ setValue, setSelectedIndex }) {
  return (
    <StyledFooter>
      <StyledGridContainer justifyContent="center" container>
        <StyledGridItem margin="true">
          <Grid container spacing={2} direction="column">
            <StyledGridItem onClick={() => setValue(0)} component={Link} to="/">
              Home
            </StyledGridItem>
          </Grid>
        </StyledGridItem>
        <StyledGridItem margin="true">
          <Grid container spacing={2} direction="column">
            <StyledGridItem
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
              component={Link}
              to="/services"
            >
              Services
            </StyledGridItem>
            <StyledGridItem
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              component={Link}
              to="/customsoftware"
            >
              Custom Software Development
            </StyledGridItem>
            <StyledGridItem
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              component={Link}
              to="/mobileapps"
            >
              iOS/Android App Development
            </StyledGridItem>
            <StyledGridItem
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
              component={Link}
              to="/websites"
            >
              Website Development
            </StyledGridItem>
          </Grid>
        </StyledGridItem>
        <StyledGridItem margin="true">
          <Grid container spacing={2} direction="column">
            <StyledGridItem
              onClick={() => setValue(2)}
              component={Link}
              to="/revolution"
            >
              The Revolution
            </StyledGridItem>
            <StyledGridItem
              onClick={() => setValue(2)}
              component={Link}
              to="/revolution"
            >
              Vision
            </StyledGridItem>
            <StyledGridItem
              onClick={() => setValue(2)}
              component={Link}
              to="/revolution"
            >
              Technology
            </StyledGridItem>
            <StyledGridItem
              onClick={() => setValue(2)}
              component={Link}
              to="/revolution"
            >
              Process
            </StyledGridItem>
          </Grid>
        </StyledGridItem>
        <StyledGridItem margin="true">
          <Grid container spacing={2} direction="column">
            <StyledGridItem
              onClick={() => setValue(3)}
              component={Link}
              to="/about"
            >
              About Us
            </StyledGridItem>
            <StyledGridItem
              onClick={() => setValue(3)}
              component={Link}
              to="/about"
            >
              History
            </StyledGridItem>
            <StyledGridItem
              onClick={() => setValue(3)}
              component={Link}
              to="/about"
            >
              Team
            </StyledGridItem>
          </Grid>
        </StyledGridItem>
        <StyledGridItem margin="true">
          <Grid container spacing={2} direction="column">
            <StyledGridItem
              onClick={() => setValue(4)}
              component={Link}
              to="/contact"
            >
              Contact Us
            </StyledGridItem>
          </Grid>
        </StyledGridItem>
      </StyledGridContainer>
      <StyledFooterAdornment
        alt="black decorative slash"
        src={footerAdornment}
      />
      <StyledSocialLinksGrid spacing={2} container>
        <StyledIconGrid
          component={"a"}
          target="_blank"
          href="https://www.facebook.com"
          rel="noopener noreferrer"
        >
          <StyledIcon as={FacebookOutlined} />
        </StyledIconGrid>
        <StyledIconGrid
          target="_blank"
          component={"a"}
          href="https://www.x.com"
          rel="noopener noreferrer"
        >
          <StyledIcon as={X} />
        </StyledIconGrid>
        <StyledIconGrid
          target="_blank"
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
        >
          <StyledIcon as={Instagram} />
        </StyledIconGrid>
      </StyledSocialLinksGrid>
    </StyledFooter>
  );
}
