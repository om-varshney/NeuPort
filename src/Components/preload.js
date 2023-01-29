import logo from "../Assets/Logo.svg";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Puff } from "react-loader-spinner";
import { makeStyles } from "@mui/styles";
import bg1 from "../Assets/BG 1.png";
import bg2 from "../Assets/BG 2.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "4rem",
  },
  loadingPage: {
    backgroundColor: "#FFF3DC",
    width: "100vw",
    height: "100vh",
  },
  mainHeading: {
    color: "#3F3D56",
    fontFamily: "Roboto",
    fontSize: "2rem !important",
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
}));

export const PreLoad = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.loadingPage}
      container
      xs={12}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <img src={bg1} alt="" className={classes.backgroundEffect1} />
      <img src={bg2} alt="" className={classes.backgroundEffect2} />
      <img src={logo} alt="WikiWizard Logo" className={classes.logo} />
      <Typography className={classes.mainHeading}>
        Sit tight. One of our Portrait Artists will be joining you presently.
      </Typography>
      <Puff
        height="100"
        width="100"
        color="#605D83"
        ariaLabel="puff-loading"
        visible={true}
      />
    </Grid>
  );
};
