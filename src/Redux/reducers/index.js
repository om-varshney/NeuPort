import { combineReducers } from "redux";
import {
  viewChangeReducer,
  notificationReducer,
  contentImageReducer,
  styleImageReducer,
  outputImageReducer,
  NSTProcessingReducer,
  NSTProcessingDoneReducer,
  ImageUploadTextReducer,
} from "./neuportReducers";

export const reducers = combineReducers({
  view: viewChangeReducer,
  notification: notificationReducer,
  contentImage: contentImageReducer,
  styleImage: styleImageReducer,
  outputImage: outputImageReducer,
  nstProcessing: NSTProcessingReducer,
  nstDone: NSTProcessingDoneReducer,
  imageUploadText: ImageUploadTextReducer,
});
