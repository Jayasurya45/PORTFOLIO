import React, { useState } from 'react'
import lion from"../../logo/lion.png";
import {Link} from "react-scroll"
import"./Navbar.css";

const Navbar = () => {
  const[showMenu,setShowMenu]=useState(false);
  return (
    <nav className='navbar'>
      <img src={lion} alt="logo" className='logo'/>
      <div className="desktopmenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link  activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
        

      </div>
      <button className="desktopMenuBtn" offset={300}  onClick={()=>{document.getElementById('contact').scrollIntoView({behavior: "smooth",block:"start",inline:"nearest"});}} >contact</button>




      
      <img src={lion} alt="Menu" className='mobMenu'  onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem"  onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link  activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        

      </div>
    </nav>
  )
}

export default Navbar