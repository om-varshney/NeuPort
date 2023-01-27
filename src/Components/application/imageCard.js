import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { images, titles } from "./images";
import { useDispatch } from "react-redux";
import { setStyleImage } from "../../Redux/actions/neuportActions";

const useStyles = makeStyles((theme) => ({
  styleCard: {
    backgroundColor: "transparent !important",
    margin: "5px",
    boxShadow: "none !important",
    borderRadius: "10px !important",
    // border: "2px solid #FF6685",
    // padding: "2px",
    // backgroundImage: "linear-gradient(to bottom right, #FF6685, transparent)",
  },
  imageCardContent: {
    backgroundColor: "transparent !important",
    padding: "5px !important",
  },
  imageLabel: {
    color: "white !important",
    fontFamily: "roboto !important",
    fontSize: "0.7rem !important",
  },
}));

const selectStyle = (index, dispatch) => {
  const elems = Array.from(document.querySelectorAll(".styleCard"));
  elems.forEach((elem) => elem.classList.remove("selectedStyleCard"));
  document
    .getElementById(`styleCard_${index}`)
    .classList.add("selectedStyleCard");
  dispatch(setStyleImage(images[index]));
};

export const ImageCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card
      className={`${classes.styleCard} styleCard`}
      id={`styleCard_${props.index}`}
      onClick={() => selectStyle(props.index, dispatch)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          src={images[props.index]}
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
            {titles[props.index]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
