import {
  Grid,
  useMediaQuery,
  useTheme,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  StyledArrowButtonGrid,
  StyledGrid,
  StyledHeadingGrid,
} from "./CustomSoftware";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Lottie from "react-lottie";
import integrationAnimation from "../animations/integrationAnimation/data.json";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";
import CallToAction from "./ui/CallToAction";

const MobileApps = ({ setSelectedIndex, setValue }) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.only("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container>
      <StyledGrid
        container
        direction="row"
        sx={{ width: "100%" }}
        justifyContent={matchesMD ? "center" : undefined}
        textAlign={matchesMD ? "center" : "left"}
      >
        <StyledArrowButtonGrid
          sx={{
            mr: "1em",
            ml: "-3.5em",
            display: { xs: "none", md: "block" },
          }}
        >
          <IconButton
            onClick={() => setSelectedIndex(1)}
            component={Link}
            to="/customsoftware"
            color="primary"
          >
            <ArrowBackIcon />
          </IconButton>
        </StyledArrowButtonGrid>
        <StyledHeadingGrid container>
          <Grid sx={{ mb: { xs: "1em", md: 0 } }}>
            <Typography variant="h2">iOS / Android App Development</Typography>
          </Grid>
          <Grid>
            <Typography gutterBottom component="p" variant="body1">
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography gutterBottom component="p" variant="body1">
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography gutterBottom component="p" variant="body1">
              Convenience. Connection.
            </Typography>
          </Grid>
        </StyledHeadingGrid>
        <StyledArrowButtonGrid
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <IconButton
            onClick={() => setSelectedIndex(3)}
            component={Link}
            to="/websites"
            color="primary"
          >
            <ArrowForwardIcon />
          </IconButton>
        </StyledArrowButtonGrid>
      </StyledGrid>
      <StyledGrid container justifyContent="space-between">
        <Grid size={{ xs: 12, md: 4 }}>
          <Grid container sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Grid size={12}>
              <Typography variant="h4" gutterBottom>
                Integration
              </Typography>
            </Grid>
            <Grid container>
              <Grid>
                <Typography variant="body1" component="p" gutterBottom>
                  Our technology enables an innate interconnection between web
                  and mobile applications, putting everything you need right in
                  one convenient place.
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  This allows you to extend your reach, reinvent interactions,
                  and develop a stronger relationship with your users than ever
                  before.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Grid size={12}>
            <Lottie options={defaultOptions} />
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Grid container sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Grid size={12}>
              <Typography variant="h4" gutterBottom>
                Simultaneous Platform Support
              </Typography>
            </Grid>
            <Grid container>
              <Grid>
                <Typography variant="body1" component="p" gutterBottom>
                  Our cutting-edge development process allows us to create apps
                  for iPhone, Android, and tablets — all at the same time.
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  This significantly reduces costs and creates a more unified
                  brand experience across all devices.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledGrid>
      <StyledGrid
        container
        justifyContent="space-evenly"
        sx={{ gap: { xs: "5em", md: 0 } }}
      >
        <Grid size={{ xs: 12, md: 3 }}>
          <Grid
            container
            sx={{
              flexDirection: { xs: "column", md: "row" },
              textAlign: { xs: "center" },
            }}
            justifyContent="center"
          >
            <Grid>
              <Typography variant="h4" gutterBottom>
                Extend Functionality
              </Typography>
            </Grid>
            <Grid>
              <Grid>
                <img
                  style={{ maxWidth: "100%" }}
                  src={swiss}
                  alt="swiss army knife"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Grid
            sx={{
              flexDirection: { xs: "column", md: "row" },
              textAlign: { xs: "center" },
            }}
            container
            justifyContent="center"
          >
            <Grid>
              <Typography variant="h4" gutterBottom>
                Extend Access
              </Typography>
            </Grid>
            <Grid>
              <Grid>
                <img
                  style={{ maxWidth: "100%" }}
                  src={access}
                  alt="tear-one-off sign"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Grid
            sx={{
              flexDirection: { xs: "column", md: "row" },
              textAlign: { xs: "center" },
            }}
            container
            justifyContent="center"
          >
            <Grid>
              <Typography variant="h4" gutterBottom>
                Increase Engagement
              </Typography>
            </Grid>
            <Grid>
              <Grid>
                <img
                  style={{ maxWidth: "100%" }}
                  src={engagement}
                  alt="app with notification"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledGrid>
      <Grid size={12}>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
