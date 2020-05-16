import React from 'react';

function ContactItem(props) {

  const {  name, phone, address, imgSrc } = props

  return (
    <div className="contact-item">
      <img src={imgSrc} alt="avatar"/>
      <div className="info">
        <div className="name">{name}</div>
        <div className="phone">{phone}</div>
        <div className="address">{address}</div>
      </div>
    </div>
  )
}

export default ContactItem