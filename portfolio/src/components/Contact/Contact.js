import React, { useRef } from 'react';
import './contact.css';
import insta from "../../logo/insta.png";
import youtube from "../../logo/youtube.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7zbq4xk', 'template_iui51ld', form.current, 'peU94FkFZhKSy3gyO')
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className='contactPage'>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className='name' placeholder='Your name' name="your_name" required />
          <input type="email" className="email" placeholder='Your email' name="your_email" required />
          <textarea name="message" rows="5" placeholder='Your message' className='msg' required></textarea>
          <button type="submit" value="send" className="submit">Submit</button>
          <div className="links">
            <img src={insta} alt="Instagram" className='linked' />
            <img src={youtube} alt="YouTube" className='linked' />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
