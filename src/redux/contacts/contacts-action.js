import { createAction } from '@reduxjs/toolkit';

export const getContactsRequest = createAction(
  'contacts/getContactRequest',
);
export const getContactsSuccess = createAction(
  'contacts/getContactSuccess',
);
export const getContactsError = createAction(
  'contacts/getContactError',
);

export const addContactsRequest = createAction(
  'contacts/addContactRequest',
);
export const addContactsSuccess = createAction(
  'contacts/addContactSuccess',
);
export const addContactsError = createAction(
  'contacts/addContactError',
);

export const deleteContactsRequest = createAction(
  'contacts/deleteContactsRequest',
);
export const deleteContactsSuccess = createAction(
  'contacts/deleteContactsSuccess',
);
export const deleteContactsError = createAction(
  'contacts/deleteContactsError',
);

export const changeFilter = createAction('contacts/changeFilter');
