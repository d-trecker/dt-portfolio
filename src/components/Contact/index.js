import React, {useState} from "react";
import { validateEmail } from '../../utils/helpers';
import './style.css';

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Form', formState);
        }
      };

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //is valid conditional statement
            if(!isValid) {
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

  return (
    <section className = "form-wrapper">
      <form id="contact-form">
      <h1 data-testid = "h1tag">Contact Me</h1>
        <div className = "contact-divs">
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        {errorMessage && (
              <div>
                 <p className="error-text">{errorMessage}</p>
              </div>
          )}
        <button className= "contactBtn" data-testid = "button" type="submit" onSubmit ={handleSubmit}>Submit</button>
      </form>
    </section>
  );
}

export default Contact;