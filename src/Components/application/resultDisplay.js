import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch } from "react-redux";
import {
  setImageUploadText,
  setNSTProcessing,
  setNSTProcessingDone,
} from "../../Redux/actions/neuportActions";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { saveAs } from "file-saver";

const useStyles = makeStyles((theme) => ({
  NSTDialog: {},
  resultDisplayBox: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0px !important",
    justifyContent: "center",
    alignContent: "center",
    height: "40vh !important",
    backgroundColor: "#605D83",
    borderLeft: "5px solid rgba(63, 61, 86, 1)",
    borderRight: "5px solid rgba(63, 61, 86, 1)",
  },
  resultTitle: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#605D83",
    borderTop: "5px solid rgba(63, 61, 86, 1)",
    borderLeft: "5px solid rgba(63, 61, 86, 1)",
    borderRight: "5px solid rgba(63, 61, 86, 1)",
    padding: "0px !important",
  },
  resultButtonsSection: {
    display: "flex !important",
    justifyContent: "center !important",
    backgroundColor: "#605D83",
    borderLeft: "5px solid rgba(63, 61, 86, 1)",
    borderRight: "5px solid rgba(63, 61, 86, 1)",
    borderBottom: "5px solid rgba(63, 61, 86, 1)",
    padding: "0px !important",
  },
  imageComparisonSection: {
    display: "flex",
    flexDirection: "row !important",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    height: "35vh !important",
    backgroundColor: "rgba(63, 61, 86, 1)",
    borderRadius: "1rem",
    overflowX: "auto",
    overflowY: "auto",
    padding: "5px",
  },
  titleSection: {
    display: "flex",
    flexDirection: "row !important",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#3F3D56",
    borderRadius: "0 0 500px 500px",
    padding: "5px",
  },
  primaryText: {
    color: "ghostwhite !important",
    fontFamily: "roboto !important",
    fontWeight: "normal !important",
    fontSize: "1.4rem !important",
  },
  buttons: {
    display: "flex",
    flexDirection: "row !important",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#3F3D56",
    borderRadius: "500px 500px 0px 0px",
    padding: "10px",
  },
  primaryButton: {
    borderRadius: "500px !important",
    backgroundColor: "#FF6685 !important",
    color: "white !important",
    marginRight: "1rem !important",
    fontSize: "1rem !important",
  },
  secondaryButton: {
    borderRadius: "500px !important",
    backgroundColor: "#605D83 !important",
    color: "white !important",
    marginRight: "1rem !important",
    fontSize: "1rem !important",
  },
}));

export default function NSTDownload(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.open);
  useEffect(() => setOpen(props.open), [props.open]);

  const handleClose = () => {
    setOpen(false);
    dispatch(setNSTProcessing(false));
    dispatch(setNSTProcessingDone(false));
    dispatch(setImageUploadText("Upload Your Image"));
  };

  const downloadImage = () => {
    saveAs(props.output, "magic.png");
    handleClose();
  };

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth={"sm"}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className={classes.NSTDialog}
      >
        <DialogTitle className={classes.resultTitle}>
          <Grid item xs={9} className={classes.titleSection}>
            <Typography variant="h6" className={classes.primaryText}>
              Download Your Image
            </Typography>
          </Grid>
        </DialogTitle>
        <DialogContent className={classes.resultDisplayBox}>
          <Grid
            item
            container
            xs={9}
            className={classes.imageComparisonSection}
          >
            <img
              src={props.output}
              alt="output"
              style={{
                objectFit: "cover",
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
          </Grid>
        </DialogContent>
        <DialogActions className={classes.resultButtonsSection}>
          <Grid item xs={9} className={classes.buttons}>
            <Button
              size="large"
              variant="contained"
              className={classes.primaryButton}
              endIcon={<CloudDownloadIcon />}
              onClick={downloadImage}
            >
              DOWNLOAD
            </Button>
            <Button
              size="large"
              variant="contained"
              className={classes.secondaryButton}
              endIcon={<CloseIcon />}
              onClick={handleClose}
            >
              Close
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}
