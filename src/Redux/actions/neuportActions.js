import { ActionTypes } from "../constants/actionTypes";

export const setView = (viewState) => {
  return {
    type: ActionTypes.SET_VIEW,
    payload: viewState,
  };
};

export const setNotificationContent = (notification) => {
  return {
    type: ActionTypes.SET_NOTIFICATION,
    payload: notification,
  };
};

export const setContentImage = (image) => {
  return {
    type: ActionTypes.SET_CONTENT_IMAGE,
    payload: image,
  };
};

export const setStyleImage = (image) => {
  return {
    type: ActionTypes.SET_STYLE_IMAGE,
    payload: image,
  };
};

export const setOutputImage = (image) => {
  return {
    type: ActionTypes.SET_OUTPUT_IMAGE,
    payload: image,
  };
};

export const setNSTProcessing = (boolean) => {
  return {
    type: ActionTypes.SET_NST_PROCESSING,
    payload: boolean,
  };
};

export const setImageUploadText = (text) => {
  return {
    type: ActionTypes.SET_IMAGE_UPLOAD_TEXT,
    payload: text,
  };
};
