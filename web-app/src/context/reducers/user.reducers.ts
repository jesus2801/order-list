import { SET_PAYLOAD } from 'context/types/user';
import { AppActions, UserCtx } from 'interfaces';

const initState: UserCtx = {
  payload: null,
};

const reducer = (state = initState, action: AppActions): UserCtx => {
  switch (action.type) {
    case SET_PAYLOAD:
      return {
        ...state,
        payload: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
