import axios from "axios";

const initialState = {
  username: null,
  id: null,
  profilePic: null,
};

const REQUEST_USER_DATA = "REQUEST_USER_DATA";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
