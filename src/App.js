import { HomePage } from "./Components/home";
import { WorkSpace } from "./Components/application/workspace";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import NST from "./Processing/NST";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const appState = useSelector((state) => state);
  const dispatch = useDispatch();

  const [model, setModel] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const closeNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowNotification(false);
  };

  const loadModel = async () => {
    const loadedModel = await tf.loadGraphModel(
      process.env.PUBLIC_URL + "model/model.json"
    );
    setModel(loadedModel);
    console.log("Model loaded!");
  };

  useEffect(() => {
    loadModel();
  }, []);

  useEffect(
    () => setShowNotification(!!appState.notification.msg),
    [appState.notification.msg]
  );

  return (
    <>
      {appState.view.homeState ? (
        <HomePage />
      ) : (
        <WorkSpace
          image={appState.contentImage}
          NSTFunc={() =>
            NST(appState.contentImage, appState.styleImage, model, dispatch)
          }
          nstProcessing={appState.nstProcessing}
          nstDone={appState.nstDone}
          styleImage={appState.styleImage}
          outputImage={appState.outputImage}
          imageUploadText={appState.imageUploadText}
        />
      )}
      <Snackbar
        open={showNotification}
        autoHideDuration={2500}
        onClose={closeNotification}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={closeNotification}
          severity={appState.notification.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {appState.notification.msg}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
