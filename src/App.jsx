import React from 'react';
import './App.css';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

function App() {
  return (
    <div className="wrapper">
      <section className="section">
        <h1>Phonebook</h1>
        <Form />
      </section>

      <section className="section">
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </section>
    </div>
  );
}

export default App;
