import { USERINFO } from "../constants/ActionTypes";
import * as nakamajs from "@heroiclabs/nakama-js/dist/nakama-js.umd";
const client = new nakamajs.Client("defaultkey", "127.0.0.1", 7350);

export function login() {
  return async dispatch => {
    console.log("triggered");
    client.ssl = false;
    const email = "hello@example.com";
    const password = "somesupersecretpassword";
    const session = await client.authenticateEmail({
      email: email,
      password: password
    });
    // Store session for quick reconnects.
    localStorage.nakamaAuthToken = session.token;
    console.info("Authenticated successfully. User id:", session.user_id);
    dispatch(userInfo(session.user_id));
  };
}

export function userInfo(userid) {
  return {
    type: USERINFO,
    payload: userid
  };
}
