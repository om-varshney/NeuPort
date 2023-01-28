import { ActionTypes } from "../constants/actionTypes";

export const viewChangeReducer = (
  state = { homeState: true, workspace: false },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_VIEW:
      return payload;
    default:
      return state;
  }
};

export const notificationReducer = (
  state = { type: "", msg: "" },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_NOTIFICATION:
      return payload;
    default:
      return state;
  }
};

export const contentImageReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CONTENT_IMAGE:
      return payload;
    default:
      return state;
  }
};

export const styleImageReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_STYLE_IMAGE:
      return payload;
    default:
      return state;
  }
};

export const outputImageReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_OUTPUT_IMAGE:
      return payload;
    default:
      return state;
  }
};

export const NSTProcessingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_NST_PROCESSING:
      return payload;
    default:
      return state;
  }
};

export const ImageUploadTextReducer = (
  state = "Upload Your Image",
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_IMAGE_UPLOAD_TEXT:
      return payload;
    default:
      return state;
  }
};
