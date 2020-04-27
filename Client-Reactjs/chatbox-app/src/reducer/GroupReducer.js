import { v4 as uuidv4 } from 'uuid';
import { ADD_GROUP, GET_GROUPS, DELETE_GROUP } from '../actions/types';
const initialState = {
  groups: [
    { id: uuidv4(), name: 'Devs' },
    { id: uuidv4(), name: 'Stutern' },
    { id: uuidv4(), name: 'Reunion' },
    { id: uuidv4(), name: 'SpaceX' },
    { id: uuidv4(), name: 'Frontend Devs' },
    { id: uuidv4(), name: 'Backend Devs' },
    { id: uuidv4(), name: 'Football' },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GROUPS:
      return {
        ...state,
      };
    case DELETE_GROUP:
      return {
        ...state,
        groups: state.groups.filter((group) => group.id !== action.payload),
      };
    case ADD_GROUP:
      return {
        ...state,
        groups: [action.payload, ...state.groups],
      };
    default:
      return state;
  }
}
