import React from 'react';

function CreateContactForm () {
    const [name, setName] = React.useState('')
    const [number, setNumber] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [img, setImg] = React.useState('')

    const handChangeName = (e) => {setName(e.target.value)}
    const handChangeNumber = (e) => {setNumber(e.target.value)}
    const handChangeAddress = (e) => {setAddress(e.target.value)}
    const handChangeImg = (e) => {setImg(e.target.value)}


    const handleSend = () => console.log({name, number, address, img })
    
    return (
        <form className="form">
            
            <input 
            className="form-input" 
            value={name}
            onChange = {handChangeName}
            type="text"
            placeholder="Name"/>
            
            <input 
            className="form-input" 
            value={number}
            onChange = {handChangeNumber}
            type="text"
            placeholder="Number Phone"/>
            
            <input 
            className="form-input" 
            value={address}
            onChange = {handChangeAddress}
            type="text"
            placeholder="Address"/>
            
            <input 
            className="form-input"
            value={img} 
            onChange = {handChangeImg}
            type="text"
            placeholder="the link to the phone"/>

            <button onClick={handleSend} type="submit">Create</button>
        </form>
    )
}

export default CreateContactForm