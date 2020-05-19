import React from 'react';
import Title from './Title';
import './App.css'; 
import CreateContactForm from './createContact'
import {contactsArray} from './constans'
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = React.useState([])

  const handeSave = (data) => {
    setContacts([...contacts, data])
  }


  return (
    <div className="App">
      <Title title= "Contact List" />
      <CreateContactForm
      onSave={handeSave}
      />
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;


