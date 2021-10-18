import axios from 'axios';
import * as action from './contacts-action';

axios.defaults.baseURL = 'http://localhost:4040';

export const getContacts = () => async dispatch => {
  dispatch(action.getContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(action.getContactsSuccess(data));
  } catch (error) {
    dispatch(action.getContactsError(error));
  }
};

export const addContact =
  ({ name, number }) =>
  async dispatch => {
    const contact = { name, number };

    dispatch(action.addContactsRequest());

    try {
      const { data } = await axios.post('/contacts', contact);
      dispatch(action.addContactsSuccess(data));
    } catch (error) {
      dispatch(action.addContactsError);
    }
  };

export const deleteContact = contactId => async dispatch => {
  dispatch(action.deleteContactsRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(action.deleteContactsSuccess(contactId));
  } catch (error) {
    dispatch(action.deleteContactsError(error));
  }
};
