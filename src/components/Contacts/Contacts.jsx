import './Contacts.css';
import { connect } from 'react-redux';
import * as action from '../../redux/contacts/contacts-action';

function Contacts({ contacts, handleDeleteContact }) {
  return (
    <ul className="contacts__list">
      {contacts.map(({ id, name, number }) => (
        <li className="contacts__item" key={id}>
          <p className="contacts__name">{name}</p>
          <p>{number}</p>
          <button
            className="delete__btn"
            onClick={() => handleDeleteContact(id)}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
}

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  handleDeleteContact: id => dispatch(action.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
