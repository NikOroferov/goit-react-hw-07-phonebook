import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-reducer';

const myMiddleware = store => next => action => {
  next(action);
};

const middleware = [...getDefaultMiddleware(), myMiddleware];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
});

export default store;
