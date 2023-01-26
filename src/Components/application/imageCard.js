import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";
import abstractImage from "../../Assets/Styles/pexels-anni-roenkae-2832382.jpg";

const useStyles = makeStyles((theme) => ({
  styleCard: {
    backgroundColor: "transparent !important",
  },
  imageCardContent: {
    backgroundColor: "rgba(63, 61, 86, 0.8) !important",
    padding: "5px !important",
  },
  imageLabel: {
    color: "white !important",
    fontFamily: "roboto !important",
    fontSize: "0.7rem !important",
  },
}));

export const ImageCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.styleCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          src={abstractImage}
          alt="Style Image"
          height="100vh"
        />
        <CardContent className={classes.imageCardContent}>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            className={classes.imageLabel}
          >
            Abstract
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
