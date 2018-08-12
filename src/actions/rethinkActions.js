import { USERINFO } from "../constants/ActionTypes";
import * as uuidv4 from "uuid/v4";

export function login() {
  return async dispatch => {

  };
}

export function userInfo(userid) {
  return {
    type: USERINFO,
    payload: userid
  };
}
