import React from 'react'
import './Nav.css'
import kheer from './Assets/kheer.jpg'

function Nav() {
  return (
    <ul className='container'>
      <img src={kheer} alt='food picture ' width="150px" height="50px"/>
      <a>Home</a>
      <a>About</a>
      <a>Menu</a>
      <a>Reservation</a>
      <a>Order Online</a>
      <a>Login</a>
    </ul>
  )
}

export default Nav