import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as action from './contacts-action';
import contactsList from '../../Contacts.json';

const items = createReducer(contactsList, {
  [action.addContact]: (state, { payload }) => [...state, payload],
  [action.deleteContact]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filter = createReducer('', {
  [action.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
