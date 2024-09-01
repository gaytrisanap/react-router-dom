import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import homeimg from "./home.png"

function Home() {
    return (

        <div>
            <Navbar />
            
            <h1 className='tag-name'>Home</h1>
            <img className='img' src={homeimg}/>
        </div>
    )
}

export default Home