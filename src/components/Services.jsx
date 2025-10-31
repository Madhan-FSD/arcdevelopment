import React, { Fragment } from "react";
import { Grid, useMediaQuery, useTheme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  SpecialText,
  StyledIcon,
  StyledLearnButton,
  StyledServiceContainer,
  StyledSubTitleText,
} from "./LandingPage";
import styled from "@emotion/styled";

const ServicesStyledServiceContainer = styled(StyledServiceContainer)(
  ({ theme }) => ({
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "2em",
    },
  })
);

const ServicesStyledIcon = styled(StyledIcon)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
  },
}));

export default function Services({ setValue, setSelectedIndex }) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container direction="column">
      <Grid ml={matchesMD ? 0 : "5em"} mt={matchesMD ? "1em" : "2em"}>
        <Typography
          variant="h2"
          align={matchesMD ? "center" : undefined}
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      <Grid>
        {/*-----iOS/Android App Block-----*/}
        <ServicesStyledServiceContainer
          justifyContent={matchesMD ? "center" : "flex-end"}
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid
            sx={{
              textAlign: { sm: "center", xs: "center", md: "start" },
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <StyledSubTitleText variant="subtitle1">
              Extend Functionality. Extend Access. Increase Engagement
            </StyledSubTitleText>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{" "}
              {matchesMD ? null : <br />} with either moblie platform.
            </Typography>
            <StyledLearnButton
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              component={Link}
              to="/mobileapps"
              endIcon={<ArrowForwardIcon color="primary" />}
              variant="outlined"
            >
              Learn More
            </StyledLearnButton>
          </Grid>
          <Grid sx={{ marginRight: matchesMD ? 0 : "5em" }}>
            <ServicesStyledIcon
              width="250em"
              alt="ios/android icon"
              src={mobileAppsIcon}
            />
          </Grid>
        </ServicesStyledServiceContainer>
      </Grid>
      <Grid>
        {/*-----Custom Software Block-----*/}
        <StyledServiceContainer
          justifyContent={matchesMD ? "center" : undefined}
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid
            sx={{
              marginLeft: matchesMD ? 0 : "5em",
              textAlign: matchesMD ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <StyledSubTitleText variant="subtitle1">
              Save Energy. Save Time. Save Money
            </StyledSubTitleText>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <SpecialText>celebration</SpecialText>
            </Typography>
            <StyledLearnButton
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              component={Link}
              to="/customsoftware"
              endIcon={<ArrowForwardIcon color="primary" />}
              variant="outlined"
            >
              Learn More
            </StyledLearnButton>
          </Grid>
          <Grid>
            <StyledIcon
              width="250em"
              alt="custom softwar icon"
              src={customSoftwareIcon}
            />
          </Grid>
        </StyledServiceContainer>
      </Grid>
      <Grid>
        {/*-----Websites Block-----*/}
        <StyledServiceContainer
          justifyContent={matchesMD ? "center" : "flex-end"}
          sx={{
            mb: { xs: "5em", md: "10em" },
          }}
          alignItems={matchesMD ? "center" : undefined}
          container
          direction={matchesMD ? "column" : "row"}
        >
          <Grid
            sx={{
              textAlign: matchesMD ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <StyledSubTitleText variant="subtitle1">
              Reach More. Discover More. Sell More.
            </StyledSubTitleText>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed
            </Typography>
            <StyledLearnButton
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
              component={Link}
              to="/websites"
              endIcon={<ArrowForwardIcon color="primary" />}
              variant="outlined"
            >
              Learn More
            </StyledLearnButton>
          </Grid>
          <Grid
            justifyContent="center"
            sx={{
              marginRight: matchesMD ? 0 : "5em",
            }}
          >
            <ServicesStyledIcon
              width="250em"
              alt="websites icon"
              src={websitesIcon}
            />
          </Grid>
        </StyledServiceContainer>
      </Grid>
    </Grid>
  );
}
