import { createStore } from "redux";
import { CLEAR, POST } from "./action";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST:
      return { ...state, data: [...state.data, ...action.payload] };

    case CLEAR:
      return { ...state, data: [] };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
