import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import contactimg from "./contact.png"

function Contact() {
    return (
        <div>
            <Navbar />
            <h1 className='tag-name'>Contact Us</h1>
            <img className='img' src={contactimg}/>
        </div>
    )
}

export default Contact