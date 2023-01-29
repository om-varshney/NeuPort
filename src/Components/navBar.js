import { makeStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";
import logo from "../Assets/Logo.svg";
import { useDispatch } from "react-redux";
import {
  setContentImage,
  setNSTProcessing,
  setNSTProcessingDone,
  setStyleImage,
  setView,
} from "../Redux/actions/neuportActions";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "4vh",
    marginRight: "auto",
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF3DC",
    height: "8vh",
  },
  navButton: {
    color: "#3F3D56 !important",
    marginLeft: "2vw !important",
    fontSize: "1rem !important",
  },
}));

const homeView = (dispatch) => {
  dispatch(
    setView({
      homeState: true,
      workspace: false,
    })
  );
  dispatch(setContentImage(null));
  dispatch(setStyleImage(null));
  dispatch(setNSTProcessing(false));
  dispatch(setNSTProcessingDone(false));
};

const workSpaceView = (dispatch) => {
  dispatch(
    setView({
      homeState: false,
      workspace: true,
    })
  );
};

export const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid item xs={9} className={classes.navBar}>
      <img src={logo} alt="Logo" className={classes.logo} />
      <Button className={classes.navButton} onClick={() => homeView(dispatch)}>
        Home
      </Button>
      <Button className={classes.navButton}>About</Button>
      <Button
        className={classes.navButton}
        onClick={() => workSpaceView(dispatch)}
      >
        Create
      </Button>
    </Grid>
  );
};
