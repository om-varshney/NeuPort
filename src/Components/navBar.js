import { makeStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";
import logo from "../Assets/Logo.svg";

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

export const NavBar = () => {
  const classes = useStyles();

  return (
    <Grid item xs={9} className={classes.navBar}>
      <img src={logo} alt="Logo" className={classes.logo} />
      <Button className={classes.navButton}>Home</Button>
      <Button className={classes.navButton}>About</Button>
      <Button className={classes.navButton}>Create</Button>
    </Grid>
  );
};
