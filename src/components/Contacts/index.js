import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import './index.scss'

import React, { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Contacts = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_lx11ufg',
        'template_oe2t9ig',
        refForm.current,
        {publicKey:'Wya8sqQW8ZPzRW2g5',}
      )
      .then(
        () => {
          alert("Message sent")
          window.location.reload(false)
        },
        () => {
          alert("Failed to send message, try again.")
        }
      )
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={"Contact Me".split("")} idx={15}/>
          </h1>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='user_name' placeholder='Name' required/>
                </li>
                <li className='half'>
                  <input type='email' name='user_email' placeholder='Email' required/>
                </li>
                <li>
                  <input placeholder='Subject' type='text' name='subject' required/>
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value="Send" />
                </li>
              </ul>
            </form>

          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contacts