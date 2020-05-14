import React from 'react';
import Title from './Title';
import './App.css'; 
import CreateContactForm from './createContact'
import {contactsArray} from './constans'
import ContactList from './ContactList';

function App() {
  return (
    <div className="App">
      <Title title= "Contact List" />
      <CreateContactForm/>
      <ContactList contacts = {contactsArray} />
    </div>
  );
}

export default App;


