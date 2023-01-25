import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import bg1 from "../Assets/BG 1.png";
import bg2 from "../Assets/BG 2.png";
import heroSectionIllustration from "../Assets/Hero Section Illustration.png";
import { NavBar } from "./navBar";
import { Button, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  homePage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heroSection: {
    backgroundColor: "#FFF3DC",
    width: "100vw",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "flex-start",
  },
  backgroundEffect1: {
    position: "fixed",
    top: 0,
    right: 0,
  },
  backgroundEffect2: {
    position: "fixed",
    top: 0,
    left: 0,
  },
  HSImageContainer: {
    display: "flex",
    height: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  HSTextContainer: {
    display: "flex",
    height: "100%",
    alignContent: "center",
  },
  HSPrimaryText: {
    fontFamily: "outfit !important",
    fontWeight: "bold !important",
    fontSize: "4.5rem !important",
  },
  HSSecondaryText: {
    fontFamily: "roboto !important",
    fontWeight: "normal !important",
    fontSize: "1.4rem !important",
    color: "rgba(63, 61, 86, 58)",
  },
  HSPrimaryButton: {
    borderRadius: "500px !important",
    backgroundColor: "#FF6685 !important",
    color: "white !important",
    marginRight: "1rem !important",
    fontSize: "1rem !important",
  },
  HSSecondaryButton: {
    border: "2px solid #3F3D56 !important",
    borderRadius: "500px !important",
    color: "#3F3D56 !important",
    fontSize: "1rem !important",
  },
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <Grid container xs={12} className={classes.homePage}>
      <img src={bg1} alt="" className={classes.backgroundEffect1} />
      <img src={bg2} alt="" className={classes.backgroundEffect2} />
      <NavBar />
      <Grid item container xs={9} className={classes.heroSection}>
        <Grid item container xs={6} className={classes.HSTextContainer}>
          <Grid item xs={12}>
            <Typography variant="h1" className={classes.HSPrimaryText}>
              Your Moments, Redrawn by AI.
            </Typography>
            <Typography variant="body1" className={classes.HSSecondaryText}>
              Ever wondered how DaVinci might have painted your portrait?
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "1rem" }}>
            <Button
              size="large"
              variant="contained"
              className={classes.HSPrimaryButton}
            >
              SHOW ME
            </Button>
            <Button
              size="large"
              variant="outlined"
              className={classes.HSSecondaryButton}
            >
              LEARN MORE
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={6} className={classes.HSImageContainer}>
          <img src={heroSectionIllustration} alt={"hero section"} />
        </Grid>
      </Grid>
    </Grid>
  );
};
