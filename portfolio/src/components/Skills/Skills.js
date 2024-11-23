import React from 'react'
import './skills.css';

const Skills = () => {
  return (
   <section id ='skills'>
   <span className='skillTitle'
   > what I do</span>
   <span className='skillDesc'>I possess proficiency in HTML, CSS, JavaScript, and libraries like React, coupled with a solid understanding of Java</span>
   <div className="skillBars">
    <div className="skillBar">
        <div className="skillBarText">
            <h2>JAVA</h2>
            <p>I have a knowledge in java</p>
        </div>
    </div>
    <div className="skillBar">
        <div className="skillBarText">
            <h2>WEB DESIGN</h2>
            <p>I have knowledge in HTML,CSS,JS,REACT</p>
        </div>
    </div>
   
   </div>

   </section>
  )
}

export default Skills