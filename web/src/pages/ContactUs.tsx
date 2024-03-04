import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm('service_w3z7twr', 'template_uag1s6o', form.current, {
          publicKey: 'rxV3f-WyGhV7Yq-1E',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <div className="row justify-content-center">
    <div className="col-md-6 "> 
    <form ref={form} onSubmit={sendEmail}>
      <div className="mb-3">
        <label htmlFor="from_name" className="form-label">Name</label>
        <input type="text" className="form-control" id="from_name" name="from_name" />
      </div>
      <div className="mb-3">
        <label htmlFor="from_email" className="form-label">Email</label>
        <input type="email" className="form-control" id="from_email" name="from_email" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" name="message" rows={3}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
    </div>
    </div>
  );
};

export default ContactUs;
