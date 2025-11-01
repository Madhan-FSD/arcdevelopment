import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data";
import Lottie from "react-lottie";
import roots from "../assets/root.svg";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";
import CallToAction from "./ui/CallToAction";

export const StyledArrowButtonGrid = styled(Grid)(({ theme }) => ({
  marginTop: "0.5em",
}));

export const StyledHeadingGrid = styled(Grid)(({ theme }) => ({
  maxWidth: "40em",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  paddingLeft: "5em",
  paddingRight: "5em",
  paddingTop: "2em",
  paddingBottom: "10em",
  [theme.breakpoints.down("md")]: {
    padding: "3em 1em",
  },
}));

const StyledGridItemsContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const CustomSoftware = ({ setSelectedIndex, setValue }) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.only("xs"));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <StyledGrid
        container
        direction="row"
        justifyContent={matchesMD ? "center" : undefined}
      >
        <StyledArrowButtonGrid
          sx={{
            mr: "1em",
            ml: "-3.5em",
            display: { xs: "none", md: "block" },
          }}
        >
          <IconButton
            onClick={() => setSelectedIndex(0)}
            component={Link}
            to="/services"
            color="primary"
          >
            <ArrowBackIcon />
          </IconButton>
        </StyledArrowButtonGrid>
        <StyledHeadingGrid container direction="column">
          <Grid sx={{ mb: { xs: "1em", md: 0 } }}>
            <Typography align={matchesXS ? "center" : "inherit"} variant="h2">
              Custom Software Development
            </Typography>
          </Grid>
          <Grid>
            <Typography
              align={matchesXS ? "center" : "inherit"}
              component="p"
              variant="body1"
              gutterBottom
            >
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography
              align={matchesXS ? "center" : "inherit"}
              component="p"
              variant="body1"
              gutterBottom
            >
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              gutterBottom
              align={matchesXS ? "center" : "inherit"}
              component="p"
              variant="body1"
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography
              gutterBottom
              align={matchesXS ? "center" : "inherit"}
              variant="body1"
              component="p"
            >
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </StyledHeadingGrid>
        <StyledArrowButtonGrid
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <IconButton
            onClick={() => setSelectedIndex(2)}
            component={Link}
            to="/mobileapps"
            color="primary"
          >
            <ArrowForwardIcon />
          </IconButton>
        </StyledArrowButtonGrid>
      </StyledGrid>
      <StyledGrid
        container
        direction="row"
        justifyContent="space-evenly"
        sx={{
          mt: { xs: "5em", sm: "7.5em", md: "5em" },
          mb: { xs: "5em", sm: "7.5em", md: "5em" },
          flexDirection: { xs: "column", sm: "row", md: "row" },
          gap: { xs: "5em", sm: 0, md: 0 },
        }}
      >
        <Grid container direction="column" alignItems="center">
          <Grid mb="1em">
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid>
            <img
              height="85px"
              src={lightbulb}
              alt="save energy lightbulb icon"
            />
          </Grid>
        </Grid>
        <Grid container direction="column" alignItems="center">
          <Grid mb="1em">
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid>
            <img height="85px" src={stopwatch} alt="save time stopwatch icon" />
          </Grid>
        </Grid>
        <Grid container direction="column" alignItems="center">
          <Grid mb="1em">
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid>
            <img height="85px" src={cash} alt="save money cash icon" />
          </Grid>
        </Grid>
      </StyledGrid>
      <StyledGrid
        container
        direction="row"
        sx={{
          textAlign: { sm: "center", md: "inherit" },
          px: { sm: "5em", md: "auto" },
        }}
        justifyContent={matchesMD ? "center" : "flex-start"}
      >
        <StyledGridItemsContainer direction="row" container>
          <Grid size={matchesMD ? 12 : 8}>
            <Grid mb="1em">
              <Typography align={matchesXS ? "center" : "inherit"} variant="h4">
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid>
              <Typography
                gutterBottom
                align={matchesXS ? "center" : "inherit"}
                variant="body1"
                component="p"
              >
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography
                gutterBottom
                align={matchesXS ? "center" : "inherit"}
                variant="body1"
                component="p"
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                gutterBottom
                align={matchesXS ? "center" : "inherit"}
                variant="body1"
                component="p"
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            size={matchesMD ? 12 : "grow"}
            sx={{ mt: { xs: "5em", md: 0 } }}
          >
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </StyledGridItemsContainer>
      </StyledGrid>
      <StyledGrid
        container
        direction="row"
        sx={{
          textAlign: { sm: "center", md: "inherit" },
          mt: { xs: "10em", md: "10em" },
          px: { sm: "5em", md: "auto" },
        }}
        justifyContent={matchesMD ? "center" : "space-around"}
      >
        <StyledGridItemsContainer
          flexDirection={matchesMD ? "column-reverse" : "row"}
          direction="row"
          container
        >
          <Grid
            size={matchesMD ? 12 : "grow"}
            sx={{ mt: { xs: "5em", md: 0 } }}
          >
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid size={matchesMD ? 12 : 8}>
            <Grid mb="1em">
              <Typography variant="h4" align={matchesMD ? "center" : "left"}>
                Scale
              </Typography>
            </Grid>
            <Grid>
              <Typography
                gutterBottom
                variant="body1"
                align={matchesMD ? "center" : "left"}
                component="p"
              >
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </StyledGridItemsContainer>
      </StyledGrid>
      <StyledGrid
        container
        justifyContent="center"
        direction="row"
        sx={{
          mt: { xs: "5em", md: "10em" },
          mb: { xs: "5em", md: "10em" },
          px: { sm: "5em", md: "auto" },
        }}
      >
        <Grid
          flexDirection={matchesMD ? "column-reverse" : "column"}
          container
          direction="column"
          alignItems="center"
        >
          <Grid sx={{ mt: { xs: "5em", md: "auto" } }}>
            <img
              src={roots}
              alt="tree with roots extending out"
              height="450em"
              width={matchesMD ? "300em" : "450em"}
            />
          </Grid>
          <StyledGridItemsContainer sx={{ mb: { md: "auto", sm: "5em" } }}>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              align="center"
              component="p"
            >
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              align="center"
              component="p"
            >
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </StyledGridItemsContainer>
        </Grid>
      </StyledGrid>
      <StyledGrid
        container
        direction="row"
        sx={{
          textAlign: { sm: "center", md: "inherit" },
          px: { sm: "5em", md: "10em" },
          mt: { xs: "5em", md: "1em" },
          mb: { xs: "5em", md: "1em" },
        }}
        justifyContent={matchesMD ? "center" : "flex-start"}
      >
        <StyledGridItemsContainer direction="row" container>
          <Grid size={matchesMD ? 12 : 8}>
            <Grid mb="1em">
              <Typography align={matchesXS ? "center" : "inherit"} variant="h4">
                Automation
              </Typography>
            </Grid>
            <Grid>
              <Typography
                gutterBottom
                align={matchesXS ? "center" : "inherit"}
                variant="body1"
                component="p"
              >
                Why waste time when you don’t have to?
              </Typography>
              <Typography
                gutterBottom
                align={matchesXS ? "center" : "inherit"}
                variant="body1"
                component="p"
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                gutterBottom
                align={matchesXS ? "center" : "inherit"}
                variant="body1"
                component="p"
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            size={matchesMD ? 12 : "grow"}
            sx={{ mt: { xs: "5em", md: 0 } }}
          >
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </StyledGridItemsContainer>
      </StyledGrid>
      <StyledGrid
        container
        direction="row"
        sx={{
          textAlign: { sm: "center", md: "inherit" },
          mt: { xs: "10em" },
          px: { sm: "5em", md: "auto" },
        }}
        justifyContent={matchesMD ? "center" : "space-around"}
      >
        <StyledGridItemsContainer
          flexDirection={matchesMD ? "column-reverse" : "row"}
          direction="row"
          container
        >
          <Grid
            size={matchesMD ? 12 : "grow"}
            sx={{ mt: { xs: "5em", md: 0 } }}
          >
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid size={matchesMD ? 12 : 8}>
            <Grid mb="1em">
              <Typography variant="h4" align={matchesMD ? "center" : "left"}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid>
              <Typography
                gutterBottom
                variant="body1"
                align={matchesMD ? "center" : "left"}
                component="p"
              >
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                align={matchesMD ? "center" : "left"}
                component="p"
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                align={matchesMD ? "center" : "left"}
                component="p"
              >
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </StyledGridItemsContainer>
      </StyledGrid>
      <Grid>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
