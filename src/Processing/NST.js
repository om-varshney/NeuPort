import * as tf from "@tensorflow/tfjs";
import {
  setContentImage,
  setImageUploadText,
  setNotificationContent,
  setNSTProcessing,
  setOutputImage,
} from "../Redux/actions/neuportActions";

const NST = async (contentImage, styleImage, model, dispatch) => {
  try {
    if (!contentImage || !styleImage) {
      return;
    }
    const style = new Image(300, 300);
    dispatch(setImageUploadText("Style Initialized."));
    const content = document.getElementById("userImage");
    style.src = styleImage;
    dispatch(setImageUploadText("Preprocessing Input"));
    const stylePP = preprocess(style);
    const contentPP = preprocess(content);
    dispatch(setImageUploadText("Making the magic happen"));
    const styled = await model.execute([stylePP, contentPP]);
    dispatch(setImageUploadText("Execution Complete"));
    const canvas = document.createElement("canvas");
    tf.browser.toPixels(tf.squeeze(styled), canvas).then((response) => {
      console.log("Inside Promise");
      canvas.toBlob(function (blob) {
        let url = URL.createObjectURL(blob);
        setContentImage(url);
        setNSTProcessing(false);
        console.log(url);
        content.src = url;
      });
    });
    // const dataURL = canvas.toDataURL("image/png");
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
