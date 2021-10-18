import './Filter.css';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../redux/contacts/contacts-action';
import * as selectors from '../../redux/contacts/contacts-selectors';

export default function Filter() {
  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      <h3>Find contact by name</h3>
      <input
        className="filter__input"
        type="text"
        value={value}
        onChange={e => dispatch(action.changeFilter(e.target.value))}
      />
    </label>
  );
}
