import { SET_USER } from "./constraints";

const initialState = {
  username: null,
  id: null,
  profilePic: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
