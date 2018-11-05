import { combineReducers } from "redux";
import { actions } from "./actions";
 const { NEW_INPUT } = actions;
 const input = (state = "news", action) => {
  switch (action.type) {
  case NEW_INPUT:
    return action.input;
  default:
    return state;
  }
};

 const apiCallTest = topic => console.log("API Call Test " + topic);
 const results = (state = {}, action) => {
  const { type, input } = action;
  switch (type) {
  case NEW_INPUT:
    if (state[input]) return;
    apiCallTest(input);
    break;
  default:
    return state;
  }
};

 export default combineReducers({ input, results }); 