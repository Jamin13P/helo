import { SET_USER } from "./constraints";

export function setUser(id, username, profilePic) {
  return {
    type: SET_USER,
    payload: {
      id,
      username,
    },
  };
}
