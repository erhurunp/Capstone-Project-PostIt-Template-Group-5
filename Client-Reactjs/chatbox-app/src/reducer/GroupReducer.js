import { v4 as uuidv4 } from 'uuid';
import {
  ADD_GROUP,
  GET_GROUPS,
  DELETE_GROUP,
  FILTER_GROUP,
  CLEAR_FILTER,
} from '../actions/types';
import { dummyMessages } from '../Data/Data';
const initialState = {
  groups: [
    {
      id: uuidv4(),
      name: 'Devs',
    },
    { id: uuidv4(), name: 'Stutern' },
    { id: uuidv4(), name: 'Reunion' },
    { id: uuidv4(), name: 'SpaceX' },
    { id: uuidv4(), name: 'Frontend Devs' },
    { id: uuidv4(), name: 'Backend Devs' },
    { id: uuidv4(), name: 'Football' },
  ],
  dummyMessages,
  selected: false,
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
    case FILTER_GROUP:
      // const { text } = action.payload;
      return {
        ...state,

        groups: action.payload
          ? state.groups.filter(
              (group) =>
                group.name.toLowerCase().indexOf(action.payload.toLowerCase()) >
                -1
            )
          : state.groups,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        text: '',
        groups: action.payload
          ? state.groups.filter(
              (group) =>
                group.name
                  .toLowerCase()
                  .indexOf(action.payload.toLowerCase()) === -1
            )
          : state.groups,
      };
    default:
      return state;
  }
}
