import React from 'react'

export default function ContactList(props){
    return(
        <div>
            {
                props.contacts.map((item) =>{
                return (
                    <div className="contact">
                        <div key={item.id} className="photo"></div>
                        <h1 key={item.id}>{item.name}</h1>
                        <p key={item.id}>{item.phone}</p>
                        <p key={item.id}>{item.address}</p>
                    </div>
                )

                    })
            }
        </div>
    )
}