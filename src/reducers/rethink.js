

import { USERINFO } from "../constants/ActionTypes";

export default function reducer(state = {}, action) {
  switch (action.type) {
  case USERINFO:
    return Object.assign({}, state, {
      userid: action.payload
    });
  }

  return state;
}
