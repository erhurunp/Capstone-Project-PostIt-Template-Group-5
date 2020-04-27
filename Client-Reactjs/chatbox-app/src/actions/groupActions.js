import { ADD_GROUP, GET_GROUPS, DELETE_GROUP } from '../actions/types';
export const getGroups = () => {
  return {
    type: GET_GROUPS,
  };
};

export const deleteGroup = (id) => {
  return {
    type: DELETE_GROUP,
    payload: id,
  };
};

export const addGroup = (group) => {
  return {
    type: ADD_GROUP,
    payload: group,
  };
};
