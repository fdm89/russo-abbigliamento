import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import Footer from './Footer';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';


// template_dc4sstj
// service_ktxj0xq
// RUQMrel50iD53TH2T

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

      const formRef = useRef();
      const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
      });

      const [loading, setLoading] = useState(false);

      const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({...form, [name] : value})
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(
          'service_ktxj0xq', 
          'template_dc4sstj',
          {
            from_name: form.email,
            to_name: 'Russo abbigliamento',
            from_email: form.email,
            to_email: 'fulvio.dimaio1@gmail.com',
            message: form.message,
          },
          'RUQMrel50iD53TH2T'
          )
          .then(() => {
            setLoading(false);
            alert('Thank you for your message!');

            setForm({
              name: '',
              email: '',
              message: '',
            })
          }, (error) =>{
            loading(false)
            console.log(error)
            alert('Something went wrong')

          })
      }



  
    
    return <div className="container">
        <h1>Contact</h1>
       <motion.div 
        initial={{x: 100}}
        animate={{x: 0}}
        transition={{duration: 0.8}}>
       <div className="form-container">
        <div className="formbold-main-wrapper">
  <div className="formbold-form-wrapper">
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="formbold-mb-5">
        <label for="name" className="formbold-form-label"> Full Name </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="formbold-form-input"
        />
      </div>

      <div className="formbold-mb-5">
        <label for="email" className="formbold-form-label"> Email Address </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="formbold-form-input"
        />
      </div>

      <div className="formbold-mb-5">
        <label for="message" className="formbold-form-label"> Message </label>
        <textarea
          rows="7"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Type your message"
          className="formbold-form-input"
        ></textarea>
      </div>

      <div>
        <button
         type='submit' 
         className="formbold-btn">{loading ? "Sending..." : "Send"}</button>
      </div>
    </form>
  </div>
</div>
        </div>
        </motion.div>
        <Footer></Footer>
    </div>
    
}

export default Contact;