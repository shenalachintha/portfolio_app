import React, { useState } from 'react'
import '../Styles/Header.scss'
import MenuBookOutlined from '@mui/icons-material/MenuBookOutlined';

const Header = () => {
const[active,setActive]=useState(false);
const showMenu=()=>{
  setActive(!active);
}

  return (
    <div className='header'>
       <div className='header-logo'>
       <h1>Portfolio App</h1>
    </div>
    <nav>
      <ul>
    <li>
      <a href='/'><b>Home</b></a>
    </li>
    <li>
      <a href='/about'><b>About</b></a>
    </li>
    <li>
      <a href='/portfolio'><b>Portfolio</b></a>
    </li>
    <li>
      <a href='/contact'><b>Contact</b></a>
    </li>
      </ul>
    </nav>
   <div className='changer'>
    <MenuBookOutlined className="menu" onClick={showMenu}/>
    </div>
    </div>
  )
}

export default Header