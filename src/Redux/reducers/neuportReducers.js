import { ActionTypes } from "../constants/actionTypes";

export const viewChangeReducer = (
  state = { homeState: true, queryState: false },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_VIEW:
      return payload;
    default:
      return state;
  }
};

export const notificationReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_NOTIFICATION:
      return payload;
    default:
      return state;
  }
};
