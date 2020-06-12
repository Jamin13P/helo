import {SET_USER} from "./constraints"

export function setUser (username, id) {
    return {
        type: SET_USER,
        payload: {
            username,
            id,
        }
    }
}