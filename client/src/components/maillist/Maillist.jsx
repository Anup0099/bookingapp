import React from 'react'
import './mailist.css'
const Maillist = () => {
  return (
    <div className="mail">
    <h1 className="mailTitle">Save time and money</h1>
    <span className="mailDesc">Sign up and we'll send the best deals for you</span>
    <div className="mailInputContainer">
        <input type="text " placeholder="Enter your email address"/>
        <button>Subscribe</button>
    </div>
      
    </div>
  )
}

export default Maillist
