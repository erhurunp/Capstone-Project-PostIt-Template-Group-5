import { v4 as uuidv4 } from 'uuid';
import { GET_USER } from '../actions/types';
const initialState = {
  username: [{ id: uuidv4(), name: 'BlackDev' }],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
}
