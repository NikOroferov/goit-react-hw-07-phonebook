import './Form.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../redux/contacts/contacts-selectors';
import * as operations from '../../redux/contacts/contacts-operation';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const items = useSelector(selectors.getItems);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (items.some(item => item.name === name)) {
      alert('Contact already exist in contact list');
      return;
    }

    dispatch(operations.addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="submit__form" onSubmit={handleSubmit}>
      <label className="form__label">
        <h3>Name</h3>
        <input
          className="form__input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className="form__label">
        <h3>Number</h3>
        <input
          className="form__input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className="form__button" type="submit">
        Add contact
      </button>
    </form>
  );
}
