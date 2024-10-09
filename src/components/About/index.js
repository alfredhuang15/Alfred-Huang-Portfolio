import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'> 
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={"About Me".split("")} idx={15}/>
        </h1>
        <p>I am currently in my second year of computing at Queens university.</p>
        <p>I have a passion for learning new things and always welcome new experiences.</p>
        <p>My hobbies include playing sports like hockey and also playing video games. </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faPython} color='#4b8bbe' />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faJava} color='#EC4D28' />
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About