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
