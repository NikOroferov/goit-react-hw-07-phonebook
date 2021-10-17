import './Filter.css';
import { connect } from 'react-redux';
import * as action from '../../redux/contacts/contacts-action';

function Filter({ value, onChange }) {
  return (
    <label>
      <h3>Find contact by name</h3>
      <input
        className="filter__input"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(action.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
