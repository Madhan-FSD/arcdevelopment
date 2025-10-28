import React, { Fragment } from "react";
import Lottie from "react-lottie";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import animationData from "../animations/landinganimation/data";
import { Grid, Typography, Button, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import { useMediaQuery } from "@mui/material";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const StyledLottieGrid = styled(Grid)(({ theme }) => ({
  maxWidth: "50em",
  minWidth: "21em",
  marginTop: "2em",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "30em",
  },
}));

const StyledEstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  backgroundColor: theme.palette.common.orange,
  borderRadius: 50,
  height: 45,
  width: 145,
  marginRight: 40,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const StyledButtonContainer = styled(Grid)(({ theme }) => ({
  marginTop: "1em",
}));

const StyledLearnButtonHero = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  height: 45,
  width: 145,
  fontSize: "0.9rem",
}));

const StyledLearnButton = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  height: 35,
  fontSize: "0.75rem",
  padding: 5,
  marginTop: "1em",
  [theme.breakpoints.down("md")]: {
    marginBottom: "2em",
    marginTop: "2em",
  },
}));

const StyledMainContainerGrid = styled(Grid)(({ theme }) => ({
  marginTop: "5em",
  [theme.breakpoints.down("md")]: {
    marginTop: "3em",
  },
  [theme.breakpoints.down("xs")]: {
    marginTop: "2em",
  },
}));

const StyledHeroTextContainer = styled(Grid)(({ theme }) => ({
  minWidth: "21.5em",
}));

const SpecialText = styled("span")(({ theme }) => ({
  fontFamily: "Pacifico",
  color: theme.palette.common.orange,
}));

const StyledSubTitleText = styled(Typography)(({ theme }) => ({
  marginBottom: "1em",
}));

const StyledIcon = styled("img")(({ theme }) => ({
  marginLeft: "2em",
  [theme.breakpoints.down("xs")]: {
    marginLeft: 0,
  },
}));

const StyledServiceContainer = styled(Grid)(({ theme }) => ({
  marginTop: "12em",
  [theme.breakpoints.down("sm")]: {
    padding: 25,
    marginTop: "3em",
  },
}));

export default function LandingPage() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <StyledMainContainerGrid container direction="column">
      <Grid>
        {/*-----Hero Block-----*/}
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          direction="row"
        >
          <StyledHeroTextContainer size={{ sm: 6 }}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology <br /> to the Midwest
            </Typography>
            <StyledButtonContainer container justifyContent="center">
              <Grid>
                <StyledEstimateButton variant="contained">
                  Free Estimate
                </StyledEstimateButton>
              </Grid>
              <Grid>
                <StyledLearnButtonHero
                  endIcon={<ArrowForwardIcon color="primary" />}
                  variant="outlined"
                >
                  Learn More
                </StyledLearnButtonHero>
              </Grid>
            </StyledButtonContainer>
          </StyledHeroTextContainer>
          <StyledLottieGrid size={{ sm: 6 }}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </StyledLottieGrid>
        </Grid>
      </Grid>
      <Grid>
        {/*-----Custom Software Block-----*/}
        <StyledServiceContainer
          justifyContent={matchesSM ? "center" : undefined}
          container
          direction="row"
        >
          <Grid
            sx={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
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
              endIcon={<ArrowForwardIcon color="primary" />}
              variant="outlined"
            >
              Learn More
            </StyledLearnButton>
          </Grid>
          <Grid>
            <StyledIcon alt="custom softwar icon" src={customSoftwareIcon} />
          </Grid>
        </StyledServiceContainer>
      </Grid>
      <Grid>
        {/*-----iOS/Android App Block-----*/}
        <StyledServiceContainer
          sx={{ justifyContent: { lg: "flex-end", sm: "center" } }}
          container
          direction="row"
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
              {matchesSM ? null : <br />} with either moblie platform.
            </Typography>
            <StyledLearnButton
              endIcon={<ArrowForwardIcon color="primary" />}
              variant="outlined"
            >
              Learn More
            </StyledLearnButton>
          </Grid>
          <Grid sx={{ marginRight: matchesSM ? 0 : "5em" }}>
            <StyledIcon alt="ios/android icon" src={mobileAppsIcon} />
          </Grid>
        </StyledServiceContainer>
      </Grid>
      <Grid>
        {/*-----Websites Block-----*/}
        <StyledServiceContainer
          justifyContent={matchesSM ? "center" : undefined}
          container
          direction="row"
        >
          <Grid
            sx={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
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
              endIcon={<ArrowForwardIcon color="primary" />}
              variant="outlined"
            >
              Learn More
            </StyledLearnButton>
          </Grid>
          <Grid>
            <StyledIcon alt="websites icon" src={websitesIcon} />
          </Grid>
        </StyledServiceContainer>
      </Grid>
    </StyledMainContainerGrid>
  );
}
