import React from 'react';

function CreateContactForm (props) {
    const [name, setName] = React.useState('')
    const [number, setNumber] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [img, setImg] = React.useState('')


    const handleSave = ((e) => {
        e.preventDefault()
        const data = {name, number, address, imageSrc: img }
        props.onSave(data)
    })



    return (
        <form className="form">
            
            <input 
            className="form-input" 
            value={name}
            onChange = {(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"/>
            
            <input 
            className="form-input" 
            value={number}
            onChange = {(e) => setNumber(e.target.value)}
            type="text"
            placeholder="Number Phone"/>
            
            <input 
            className="form-input" 
            value={address}
            onChange = { (e) => setAddress(e.target.value)}
            type="text"
            placeholder="Address"/>
            
            <input 
            className="form-input"
            value={img} 
            onChange = {(e) => setImg(e.target.value)}
            type="text"
            placeholder="the link to the phone"/>

            <button onClick={handleSave} type="submit">Create</button>
        </form>
    )
}

export default CreateContactForm