import React from 'react';
import Title from './Title';
import './App.css'; 
import CreateContactForm from './createContact'
import {contactsArray} from './constans'
import ContactList from './ContactList';

function App() {
  const [newContact, setNewContact] = React.useState({})

  const handeSave = (data) => {
    setNewContact(data)
  }
  return (
    <div className="App">
      <Title title= "Contact List" />
      <CreateContactForm onSave={handeSave}/>
      <ContactList contacts = {[...contactsArray, newContact]} />
    </div>
  );
}

export default App;


