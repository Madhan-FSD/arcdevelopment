import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { StyledLearnButtonHero } from "../LandingPage";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "@emotion/styled";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { Link } from "react-router-dom";

const StyledBackgroundGrid = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "50em",
  width: "100%",
  backgroundAttachment: "fixed",
  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${mobileBackground})`,
    backgroundAttachment: "inherit",
  },
}));

const StyledEstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  backgroundColor: theme.palette.common.orange,
  borderRadius: 50,
  height: 80,
  width: 205,
  fontSize: "1.5rem",
  marginRight: "5em",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    marginRight: 0,
  },
}));

export default function CallToAction({ setValue }) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledBackgroundGrid
      container
      alignItems="center"
      justifyContent={matchesMD ? "center" : "space-between"}
      direction={matchesMD ? "column" : "row"}
      spacing={{ xs: 2 }}
    >
      <Grid
        sx={{
          marginLeft: matchesMD ? 0 : "5em",
          textAlign: matchesMD ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid>
            <Typography variant="h2">
              Simple Software. <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" fontSize="1.2rem">
              Take advantage of the 21st Century.
            </Typography>
            <Grid
              justifyContent={matchesMD ? "center" : undefined}
              sx={{
                mt: 2,
              }}
              container
            >
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
        </Grid>
      </Grid>
      <Grid>
        <StyledEstimateButton
          onClick={() => setValue(5)}
          component={Link}
          to="/estimate"
        >
          Free Estimate
        </StyledEstimateButton>
      </Grid>
    </StyledBackgroundGrid>
  );
}
