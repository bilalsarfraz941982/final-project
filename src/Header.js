import React from 'react';
import kheer from './Assets/kheer.jpg';


function Header() {
  return (
    <div>
        <h1 style={{color:"red"}}>weclome to my website this is the header</h1>
        <h2>here is a picture of a pasitani sweet dish </h2>
        <img src={kheer} alt='Pakistani sweet dish kheer' height="250px" width="250px"></img>
    </div>
  )
}

export default Header