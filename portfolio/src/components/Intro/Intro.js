import React from 'react'
import {Link} from "react-scroll"
import hi from"../../logo/hi.png";
import "./intro.css";

const intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="IntroText">I'm <span className="introName">Jayasurya</span> <br />Job Seeker</span>
            <p className="IntroPara">I am a skilled web designer with experince in creating<br /> visual appealing and friendly websites.</p>
            <Link to='contact'><button className='btn'>Hire Me</button></Link>
        </div>
        <img src={hi} alt='profile' className='profileImage'/>
    </section>
  )
}

export default intro