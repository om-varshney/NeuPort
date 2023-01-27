import * as tf from "@tensorflow/tfjs";
import {
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
    const content = document.getElementById("userImage");
    style.src = styleImage;
    const styled = await model.execute([
      preprocess(style),
      preprocess(content),
    ]);
    setOutputImage(tf.browser.toPixels(tf.squeeze(styled)));
    setNSTProcessing(false);
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
