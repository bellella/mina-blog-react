//action type
export const SET_FREEZE = "STYLE/SET_FREEZE";
export const GET_FREEZE = "STYLE/GET_FREEZE";

//state
const initalState = {
  freeze: false
};

//action
export const styleActions = {
  setFreeze: value => ({ type: SET_FREEZE, value })
}
//reducer
export const styleReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_FREEZE:
      return {
        ...state,
        freeze: action.value
      };
    default:
      return state;
  }
};
 