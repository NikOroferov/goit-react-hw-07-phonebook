import { createSelector } from 'reselect';

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const isLoading = state => state.contacts.loading;

export const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
