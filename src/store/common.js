//action type
export const SET_AUTHORIZED = "COMMON/SET_FREEZE";
export const SET_SETTINGS = "COMMON/SET_SETTINGS";

//state
const initalState = {
  authorized: true,
  settings: [],
};

//action
export const commonActions = {
  setAuthorized: (value) => ({ type: SET_AUTHORIZED, value }),
  setSettings: (value) => ({ type: SET_SETTINGS, value }),
};
//reducer
export const commonReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_AUTHORIZED:
      return {
        ...state,
        authorized: action.value,
      };
    case SET_SETTINGS:
      return {
        ...state,
        settings: action.value,
      };
    default:
      return state;
  }
};
