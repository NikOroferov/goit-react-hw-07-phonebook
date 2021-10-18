import './Contacts.css';
import Loader from 'react-loader-spinner';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../../redux/contacts/contacts-operation';
import * as selectors from '../../redux/contacts/contacts-selectors';

export default function Contacts() {
  const contacts = useSelector(selectors.getVisibleContacts);
  const isLoading = useSelector(selectors.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getContacts());
  }, [dispatch]);

  return (
    <>
      <ul className="contacts__list">
        {contacts.map(({ id, name, number }) => (
          <li className="contacts__item" key={id}>
            <p className="contacts__name">{name}</p>
            <p>{number}</p>
            <button
              type="button"
              className="delete__btn"
              onClick={() => dispatch(operations.deleteContact(id))}
            >
              Delete contact
            </button>
          </li>
        ))}
      </ul>

      {isLoading && (
        <Loader type="Oval" color="#ffa600" height={80} width={80} />
      )}
    </>
  );
}
