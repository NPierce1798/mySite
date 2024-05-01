import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cnqwwza', 'template_wiuljdg', form.current, 'NDKlExWgf6pTpjWXj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
      <>
        <h3 className='contact__h3' style={{
          textDecoration:'underline', 
          fontSize:'30px',
          marginTop:"25px"}}>Open For Work</h3>
        <h3 className='contact__h3'>Send Me An Email!</h3>
        <form ref={form} onSubmit={sendEmail} className='contact__form' style={{marginBottom:"25px"}}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </>
    );
  }
  
  export default Contact;