import { Grid, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavBar, navBar } from "../navBar";
import uploadPicIllustration from "../../Assets/Upload Picture Illustration.svg";
import downloadIllustration from "../../Assets/Download Illustration.png";
import bg1 from "../../Assets/BG 1.png";
import { ImageCard } from "./imageCard";

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  backgroundEffect1: {
    position: "fixed",
    top: 0,
    right: 0,
  },
  backgroundEffect2: {
    position: "fixed",
    transform: "rotate(180deg)",
    top: 0,
    left: 0,
  },
  workspaceContainer: {
    backgroundColor: "#FFF3DC",
    width: "100vw",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  workspace: {
    backgroundColor: "#605D83",
    width: "100%",
    height: "70%",
    borderRadius: "1rem",
    display: "flex",
  },
  WSButtonsContainer: {
    display: "flex",
    justifyContent: "center",
  },
  WSPrimaryButton: {
    borderRadius: "500px !important",
    backgroundColor: "#FF6685 !important",
    color: "white !important",
    marginRight: "1rem !important",
    fontSize: "1rem !important",
  },
  WSSecondaryButton: {
    borderRadius: "500px !important",
    backgroundColor: "#3F3D56 !important",
    color: "white !important",
    marginRight: "1rem !important",
    fontSize: "1rem !important",
  },
  uploadImageSection: {
    display: "flex",
    flexWrap: "wrap !important",
    flexDirection: "column !important",
    justifyContent: "space-evenly !important",
    alignContent: "center !important",
    borderRight: "2px solid #FFF3DC",
    // padding: "5vh 0 3vh 0",
  },
  chooseStyleSection: {
    display: "flex !important",
    justifyContent: "center !important",
    alignContent: "space-evenly !important",
    // padding: "3vh 0 3vh 0",
  },
  WSPrimaryTextContainer: {
    display: "flex",
    justifyContent: "center",
  },
  WSPrimaryText: {
    color: "white !important",
    fontFamily: "roboto !important",
    fontWeight: "normal !important",
    fontSize: "1.4rem !important",
  },
  WSImageCardsSection: {
    height: "44.1vh !important",
    overflowX: "auto",
    overflowY: "auto",
    padding: "5px",
  },
}));

export const WorkSpace = () => {
  const classes = useStyles();
  return (
    <Grid container xs={12} className={classes.app}>
      <img src={bg1} alt="" className={classes.backgroundEffect1} />
      <img src={bg1} alt="" className={classes.backgroundEffect2} />
      <NavBar />
      <Grid item container xs={9} className={classes.workspaceContainer}>
        <Grid item container xs={12} className={classes.workspace}>
          <Grid item container xs={6} className={classes.uploadImageSection}>
            <img src={uploadPicIllustration} alt="" height="55%" />
            <Button
              size="large"
              variant="outlined"
              className={classes.WSPrimaryButton}
            >
              UPLOAD IMAGE
            </Button>
          </Grid>
          <Grid item container xs={6} className={classes.chooseStyleSection}>
            <Grid item xs={9} className={classes.WSPrimaryTextContainer}>
              <Typography variant="h1" className={classes.WSPrimaryText}>
                CHOOSE A STYLE
              </Typography>
            </Grid>
            <Grid
              item
              container
              xs={9}
              spacing={2}
              className={`${classes.WSImageCardsSection} customNav`}
            >
              <Grid item xs={6}>
                <ImageCard />
              </Grid>
              <Grid item xs={6}>
                <ImageCard />
              </Grid>
              <Grid item xs={6}>
                <ImageCard />
              </Grid>
              <Grid item xs={6}>
                <ImageCard />
              </Grid>
              <Grid item xs={6}>
                <ImageCard />
              </Grid>
              <Grid item xs={6}>
                <ImageCard />
              </Grid>
              <Grid item xs={6}>
                <ImageCard />
              </Grid>
              <Grid item xs={6}>
                <ImageCard />
              </Grid>
            </Grid>
            <Grid item xs={9} className={classes.WSButtonsContainer}>
              <Button
                size="large"
                variant="outlined"
                className={classes.WSPrimaryButton}
              >
                APPLY STYLE
              </Button>
              <Button
                size="large"
                variant="outlined"
                className={classes.WSSecondaryButton}
              >
                UPLOAD
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
