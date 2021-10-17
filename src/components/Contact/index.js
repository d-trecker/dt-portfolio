import React, {useState} from "react";
import { motion } from "framer-motion";
import { validateEmail } from '../../utils/helpers';
import emailjs from 'emailjs-com';
import './style.css';

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //       console.log('Form', formState);
    //     }
    //   };
    //Displays error message
    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //is valid conditional statement
            if(!isValid || e.target == null) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            } 
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`A ${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
    };
    //Sends email 
    function sendEmail(e) {
      e.preventDefault();

      if (!errorMessage) {
  
      emailjs.sendForm('service_v334s0m', 'template_ev71oki', '#contact-form', 'user_pNVifD37BugfrvzrSsP8g')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      }
      setFormState({ ...formState, [e.target.name]: e.target.value });
    };
    //Sets page transition
    const pageTransition = {
      in: { 
        opacity:1,
        x:0
      },
      out: {
        opacity: 0,
        x:"-100vw"
      }
    };
    
  return (
    <motion.section 
    initial="out"
    animate="in"
    exit="out"
    variants= {pageTransition}
    className = "form-wrapper">
      <form id="contact-form" onSubmit={sendEmail}>
      <h1 data-testid = "h1tag">Contact Me</h1>
      <p>Feel free to fill out the form below to shoot me a email! (Yes this form will send me a email). <br/> I can also be reached at dylan.j.trecker@gmail.com </p>
        <div className = "contact-divs">
          <input className="feedback-input" type="text"  placeholder="Name"  defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div>
          <input className="feedback-input"  type="email" placeholder="Email"  defaultValue={email} onBlur={handleChange} name="email" />
        </div>
        <div>
          <textarea className="feedback-input"  placeholder="Message"  name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        {errorMessage && (
              <div>
                 <p className="error-text">{errorMessage}</p>
              </div>
          )}
        <button className= "contactBtn" data-testid = "button" type="submit" >Submit</button>
      </form>
    </motion.section>
  );
}

export default Contact;