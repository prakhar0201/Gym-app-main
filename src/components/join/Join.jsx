import React from 'react'
import { useRef } from 'react'
import './join.css'
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2m2wdiu', 'template_95j7ez2', form.current, 'OlhTs89QW8olTnYIT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className='join' id='join-us'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text h1'>READY TO</span>
                    <span className='h1'>LEVEL UP</span>
                </div>
                <div>
                    <span className='h1'>YOUR BODY</span>
                    <span className='stroke-text h1'>WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                   <form ref={form} className='email-container' onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter your email' />
                    <button className="btn btn-join">Join Now</button>
                   </form>
            </div>
        </div>
    )
}

export default Join