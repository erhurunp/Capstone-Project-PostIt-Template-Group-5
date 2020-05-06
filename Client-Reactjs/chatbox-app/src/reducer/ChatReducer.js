import { v4 as uuidv4 } from 'uuid';
import { ADD_CHAT, GET_CHAT, SELETED_GROUP_CHAT } from '../actions/types';
import { dummyMessages } from '../Data/Data';
const initialState = {
  chats: [
    {
      id: uuidv4(),
      userId: 'blackDev',
      message: 'Hello, How are you doing?',
      time: '11:00',
    },
    {
      id: uuidv4(),
      userId: 'theDev',
      message: 'Hello',
      time: '11:10',
    },
    {
      id: uuidv4(),
      userId: 'coder',
      message: 'Hey',
      time: '11:12',
    },
    {
      id: uuidv4(),
      userId: 'blackDev',
      message: 'Let start codingnnnnnnnnnnnnnnnnnnnnnnnn',
      time: '11:15',
    },
  ],
  dummyMessages,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHAT:
      return {
        ...state,
      };

    case ADD_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payload],
      };
    case SELETED_GROUP_CHAT:
      return {
        ...state,
        chats: [...state.dummyMessages],
      };
    default:
      return state;
  }
}
