import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import Dropdown from '../dropdown/Dropdown';
const Navbar = () => {
  const [sticky,setSticky]=useState (false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setSticky(true): setSticky(false);
    })
  },[])
  return (
   <nav className={`container ${sticky?'dark-nav':''}`}>
    <img src={logo} alt="" className='logo'/>
     <ul class="">
        <li><a>Home<Dropdown/></a></li>
        
        <li><a>Scientist</a></li>
        <li><a>Scholar</a></li>
        <li><a>Campus</a></li>
        <li><a>Testimonials</a></li>
        <li><a class="btn">Login</a></li>
        <li><a class="btn">SignUp</a></li>

    </ul>
   </nav>
  );
}

export default Navbar;
