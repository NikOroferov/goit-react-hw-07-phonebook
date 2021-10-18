import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as action from './contacts-action';

const items = createReducer([], {
  [action.getContactsSuccess]: (_, { payload }) => payload,
  [action.addContactsSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [action.deleteContactsSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filter = createReducer('', {
  [action.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [action.getContactsRequest]: () => true,
  [action.getContactsSuccess]: () => false,
  [action.getContactsError]: () => false,
  [action.addContactsRequest]: () => true,
  [action.addContactsSuccess]: () => false,
  [action.addContactsError]: () => false,
  [action.deleteContactsRequest]: () => true,
  [action.deleteContactsSuccess]: () => false,
  [action.deleteContactsError]: () => false,
});

const error = createReducer(null, {
  [action.addContactsError]: (_, { payload }) => payload.message,
  [action.getContactsError]: (_, { payload }) => payload.message,
  [action.deleteContactsError]: (_, { payload }) => payload.message,
  [action.addContactsError]: () => null,
  [action.getContactsError]: () => null,
  [action.deleteContactsError]: () => null,
  [action.changeFilter]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
