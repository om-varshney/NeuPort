import { Grid, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavBar, navBar } from "../navBar";
import uploadPicIllustration from "../../Assets/Upload Picture Illustration.svg";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloudIcon from "@mui/icons-material/Cloud";
import bg1 from "../../Assets/BG 1.png";
import { ImageCard } from "./imageCard";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setContentImage,
  setImageUploadText,
  setNotificationContent,
  setNSTProcessing,
} from "../../Redux/actions/neuportActions";
import { ThreeDots } from "react-loader-spinner";
import NSTDownload from "./resultDisplay";

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
    border: "5px solid rgba(63, 61, 86, 1)",
  },
  WSButtonsContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#3F3D56",
    borderRadius: "500px 500px 0px 0px",
    padding: "10px",
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
    backgroundColor: "#605D83 !important",
    color: "white !important",
    marginRight: "1rem !important",
    fontSize: "1rem !important",
  },
  uploadImageSection: {
    display: "flex !important",
    justifyContent: "center !important",
    alignContent: "space-between !important",
    padding: "0vh 0 0vh 0",
    borderRight: "5px solid rgba(63, 61, 86, 1)",
  },
  chooseStyleSection: {
    display: "flex !important",
    justifyContent: "center !important",
    alignContent: "space-between !important",
    padding: "0vh 0 0vh 0",
  },
  WSPrimaryTextContainer: {
    display: "flex",
    padding: "10px",
    justifyContent: "center",
    backgroundColor: "#3F3D56",
    borderRadius: "0 0 500px 500px",
  },
  WSPrimaryText: {
    color: "ghostwhite !important",
    fontFamily: "roboto !important",
    fontWeight: "normal !important",
    fontSize: "1.4rem !important",
  },
  WSImageCardsSection: {
    height: "35vh !important",
    border: "3px solid rgba(63, 61, 86, 1)",
    backgroundColor: "rgba(63, 61, 86, 1)",
    borderRadius: "1rem 0 0 1rem",
    overflowX: "auto",
    overflowY: "auto",
    padding: "5px",
  },
  WSUploadIllustration: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    height: "35vh !important",
    border: "3px solid rgba(63, 61, 86, 1)",
    backgroundColor: "rgba(63, 61, 86, 1)",
    borderRadius: "1rem",
    padding: "5px",
  },
}));

const handleFileUpload = (hiddenInput) => {
  hiddenInput.current.click();
};

const handleUploadedFile = (event, dispatch) => {
  const fileUploaded = URL.createObjectURL(event.target.files[0]);
  // console.log(fileUploaded);
  dispatch(setContentImage(fileUploaded));
  dispatch(setNSTProcessing(false));
  dispatch(
    setNotificationContent({
      type: "success",
      msg: "Image Uploaded Successfully",
    })
  );
};

const styleTransfer = (
  contentImage,
  styleImage,
  nstState,
  nstFunc,
  dispatch
) => {
  if (!contentImage) {
    dispatch(
      setNotificationContent({
        type: "warning",
        msg: "Please Upload Your Image",
      })
    );
    return;
  }
  if (!styleImage) {
    dispatch(
      setNotificationContent({
        type: "warning",
        msg: "Please Choose a Style.",
      })
    );
    return;
  }
  if (!nstState) {
    dispatch(setNSTProcessing(true));
    dispatch(setImageUploadText("Processing Input"));
    setTimeout(() => nstFunc(), 500);
  } else {
    dispatch(
      setNotificationContent({
        type: "info",
        msg: "Processing in Progress.",
      })
    );
  }
};

export const WorkSpace = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const hiddenInputField = useRef(null);

  return (
    <Grid container xs={12} className={classes.app}>
      <NSTDownload
        open={props.nstDone}
        output={props.outputImage}
        input={props.image}
      />
      <img src={bg1} alt="" className={classes.backgroundEffect1} />
      <img src={bg1} alt="" className={classes.backgroundEffect2} />
      <NavBar />
      <Grid item container xs={9} className={classes.workspaceContainer}>
        <Grid item container xs={12} className={classes.workspace}>
          <Grid item container xs={6} className={classes.uploadImageSection}>
            <Grid item xs={9} className={classes.WSPrimaryTextContainer}>
              <Typography variant="h1" className={classes.WSPrimaryText}>
                {props.imageUploadText}
              </Typography>
            </Grid>
            <Grid item xs={9} className={classes.WSUploadIllustration}>
              {
                <img
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  src={props.image ? props.image : uploadPicIllustration}
                  alt=""
                  id="userImage"
                />
              }
            </Grid>
            <Grid item xs={9} className={classes.WSButtonsContainer}>
              {props.nstProcessing ? (
                <ThreeDots
                  visible={true}
                  height="50"
                  width="80"
                  color="#FF6685"
                />
              ) : (
                <>
                  <Button
                    size="large"
                    variant="contained"
                    className={classes.WSPrimaryButton}
                    endIcon={<CloudIcon />}
                    onClick={() => handleFileUpload(hiddenInputField)}
                  >
                    UPLOAD
                  </Button>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={hiddenInputField}
                    onChange={(e) => handleUploadedFile(e, dispatch)}
                  />
                  <Button
                    size="large"
                    variant="contained"
                    className={classes.WSSecondaryButton}
                    endIcon={<CameraAltIcon />}
                  >
                    CAPTURE
                  </Button>
                </>
              )}
            </Grid>
          </Grid>
          <Grid item container xs={6} className={classes.chooseStyleSection}>
            <Grid item xs={9} className={classes.WSPrimaryTextContainer}>
              <Typography variant="h1" className={classes.WSPrimaryText}>
                Choose a Style
              </Typography>
            </Grid>
            <Grid
              item
              container
              xs={9}
              className={`${classes.WSImageCardsSection} customNav`}
            >
              <Grid item xs={6}>
                <ImageCard index={0} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={1} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={2} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={3} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={4} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={5} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={6} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={7} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={8} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={9} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={10} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={11} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={12} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={13} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={14} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={15} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={16} />
              </Grid>
              <Grid item xs={6}>
                <ImageCard index={17} />
              </Grid>
            </Grid>
            <Grid item xs={9} className={classes.WSButtonsContainer}>
              <Button
                size="large"
                variant="contained"
                className={classes.WSPrimaryButton}
                endIcon={<CheckCircleIcon />}
                onClick={() =>
                  styleTransfer(
                    props.image,
                    props.styleImage,
                    props.nstState,
                    props.NSTFunc,
                    dispatch
                  )
                }
              >
                APPLY
              </Button>
              <Button
                size="large"
                variant="contained"
                className={classes.WSSecondaryButton}
                endIcon={<CloudIcon />}
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
