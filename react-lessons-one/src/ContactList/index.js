import React from 'react'
import ContactItem from './item'


function ContactList({contacts}) {
  return (
    <div className="contant-list">
      {
        contacts.map((contact, index) => (
          <ContactItem
            name={contact.name}
            imgSrc={contact.imgSrc}
            phone={contact.phone}
            address={contact.address}
            key={index}
          />
        ))
      }
    </div>
  )
}

export default ContactList