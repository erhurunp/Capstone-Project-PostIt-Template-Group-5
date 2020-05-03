import {
  ADD_GROUP,
  GET_GROUPS,
  DELETE_GROUP,
  FILTER_GROUP,
  CLEAR_FILTER,
} from '../actions/types';
export const getGroups = () => {
  return {
    type: GET_GROUPS,
  };
};
export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
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

export const filterGroup = (text) => {
  return {
    type: FILTER_GROUP,
    payload: text,
  };
};
