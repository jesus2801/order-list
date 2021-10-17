import { Dispatch } from 'redux';

import { SET_PAYLOAD } from 'context/types/user';
import { UserPayload } from 'interfaces';

export const setUserPayload = (payload: UserPayload | null) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SET_PAYLOAD,
      payload,
    });
  };
};
