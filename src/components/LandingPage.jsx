import React, { Fragment } from "react";
import Lottie from "react-lottie";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import animationData from "../animations/landinganimation/data";
import {
  Grid,
  Typography,
  Button,
  useTheme,
  Card,
  CardContent,
} from "@mui/material";
import styled from "@emotion/styled";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import { useMediaQuery } from "@mui/material";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "./ui/CallToAction";
import { Link } from "react-router-dom";

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

export const StyledLearnButtonHero = styled(Button)(({ theme }) => ({
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

const StyledRevolutionBackground = styled("div")(({ theme }) => ({
  backgroundImage: `url(${revolutionBackground})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
}));

const StyledRevolutionCard = styled(Card)(({ theme }) => ({
  position: "absolute",
  boxShadow: theme.shadows[10],
  borderRadius: 15,
  padding: "10em",
  [theme.breakpoints.down("md")]: {
    padding: "8em 0px",
    borderRadius: 0,
    width: "100%",
  },
}));

const StyledInfoBackground = styled("div")(({ theme }) => ({
  backgroundImage: `url(${infoBackground})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
}));

export default function LandingPage({ setValue, setSelectedIndex }) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
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
          justifyContent={matchesMD ? "center" : "flex-end"}
          alignItems="center"
          direction="row"
          sx={{ mt: { xs: 5 } }}
        >
          <StyledHeroTextContainer size={{ sm: 6 }}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology <br /> to the Midwest
            </Typography>
            <StyledButtonContainer container justifyContent="center">
              <Grid>
                <StyledEstimateButton
                  component={Link}
                  to="/estimate"
                  variant="contained"
                  onClick={() => setValue(5)}
                >
                  Free Estimate
                </StyledEstimateButton>
              </Grid>
              <Grid>
                <StyledLearnButtonHero
                  component={Link}
                  onClick={() => setValue(2)}
                  to="/revolution"
                  endIcon={<ArrowForwardIcon color="primary" />}
                  variant="outlined"
                >
                  Learn More
                </StyledLearnButtonHero>
              </Grid>
            </StyledButtonContainer>
          </StyledHeroTextContainer>
          <StyledLottieGrid size={{ sm: 10, md: 6 }}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </StyledLottieGrid>
        </Grid>
      </Grid>
      <Grid>
        {/*-----Custom Software Block-----*/}
        <StyledServiceContainer
          justifyContent={matchesMD ? "center" : undefined}
          container
          direction="row"
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
            <StyledIcon alt="ios/android icon" src={mobileAppsIcon} />
          </Grid>
        </StyledServiceContainer>
      </Grid>
      <Grid>
        {/*-----Websites Block-----*/}
        <StyledServiceContainer
          justifyContent={matchesMD ? "center" : undefined}
          container
          direction="row"
        >
          <Grid
            sx={{
              marginLeft: matchesMD ? 0 : "5em",
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
          <Grid>
            <StyledIcon alt="websites icon" src={websitesIcon} />
          </Grid>
        </StyledServiceContainer>
      </Grid>
      <Grid>
        {/*-----The Revolution Block-----*/}
        <Grid
          container
          sx={{
            height: { md: "75em", xs: "50em" },
            mt: { md: "10em", xs: "5em" },
          }}
          alignItems="center"
          justifyContent="center"
        >
          <StyledRevolutionCard>
            <CardContent>
              <Grid textAlign="center" container direction="column">
                <Grid>
                  <Typography gutterBottom variant="h3">
                    The Revolution
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <StyledLearnButtonHero
                    component={Link}
                    onClick={() => setValue(2)}
                    to="/revolution"
                    endIcon={<ArrowForwardIcon color="primary" />}
                    variant="outlined"
                  >
                    Learn More
                  </StyledLearnButtonHero>
                </Grid>
              </Grid>
            </CardContent>
          </StyledRevolutionCard>
          <StyledRevolutionBackground />
        </Grid>
      </Grid>
      <Grid>
        {/*-----Information Block-----*/}
        <Grid
          sx={{ height: { md: "50em", xs: "40em" } }}
          alignItems="center"
          container
          direction="row"
        >
          <Grid
            width="100%"
            position="absolute"
            container
            spacing={{ xs: 5, md: undefined }}
          >
            <Grid size={{ sm: 6, xs: 12 }}>
              <Grid
                container
                direction="column"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  ml: { xs: 0, sm: "5em" },
                }}
              >
                <Typography sx={{ color: "white" }} variant="h2">
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid sx={{ mt: { xs: 2 } }}>
                  <StyledLearnButtonHero
                    onClick={() => setValue(3)}
                    component={Link}
                    to="/about"
                    sx={{
                      color: "white !important",
                      borderColor: "white !important",
                    }}
                    endIcon={
                      <ArrowForwardIcon
                        sx={{ color: "white" }}
                        color="primary"
                      />
                    }
                    variant="outlined"
                  >
                    Learn More
                  </StyledLearnButtonHero>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              <Grid
                sx={{
                  textAlign: { xs: "center", md: "right" },
                  mr: { xs: 0, sm: "5em" },
                }}
                container
                direction="column"
              >
                <Typography sx={{ color: "white" }} variant="h2">
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say hello!{" "}
                  <span role="img" aria-label="emoji">
                    👋🏻
                  </span>
                </Typography>
                <Grid sx={{ mt: { xs: 2 } }}>
                  <StyledLearnButtonHero
                    onClick={() => setValue(4)}
                    component={Link}
                    to="/contact"
                    sx={{
                      color: "white !important",
                      borderColor: "white !important",
                    }}
                    endIcon={
                      <ArrowForwardIcon
                        sx={{ color: "white" }}
                        color="primary"
                      />
                    }
                    variant="outlined"
                  >
                    Learn More
                  </StyledLearnButtonHero>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <StyledInfoBackground />
        </Grid>
      </Grid>
      <Grid>
        {/*-----CallToAction Block-----*/}
        <CallToAction setValue={setValue} />
      </Grid>
    </StyledMainContainerGrid>
  );
}
