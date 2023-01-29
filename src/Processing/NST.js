import * as tf from "@tensorflow/tfjs";
import {
  setImageUploadText,
  setNotificationContent,
  setNSTProcessing,
  setNSTProcessingDone,
  setOutputImage,
} from "../Redux/actions/neuportActions";

const NST = (contentImage, styleImage, model, dispatch) => {
  try {
    if (!contentImage || !styleImage || !model) {
      return;
    }
    const style = new Image(300, 300);
    const content = document.getElementById("userImage");
    style.src = styleImage;
    console.log("style Image");
    const stylePP = preprocess(style);
    console.log("content Image");
    const contentPP = preprocess(content);
    const styled = model.execute([stylePP, contentPP]);
    dispatch(setImageUploadText("Execution Complete"));
    const canvas = document.createElement("canvas");
    tf.browser.toPixels(tf.squeeze(styled), canvas).then(() => {
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        dispatch(setOutputImage(url));
        dispatch(setNSTProcessing(false));
        dispatch(setNSTProcessingDone(true));
      });
    });
  } catch (err) {
    console.log(err);
    dispatch(
      setNotificationContent({
        type: "error",
        msg: "Please Refresh Page",
      })
    );
  }
};
export default NST;

const preprocess = (image) => {
  const resized = tf.browser.fromPixels(image, 3);
  const offset = tf.scalar(255.0);
  const normalized = resized.div(offset);
  return normalized.expandDims(0);
};
