import React from 'react'

export default function ContactList(props){
    return(
        <div>
            {
                props.contacts.map((item) =>{
                <h1 key={item.id}>{item.name}</h1>
                })
            }
        </div>
    )
}