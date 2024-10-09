import React, { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/A_logo.png'
import profile from '../../assets/images/profile_pic.jpg'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = "lfred".split("")
  const jobArray = "Computing".split("")

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br/>
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
        <img src={LogoTitle} alt='developer'/>
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
        <br/>
        {<AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20}/>}
        </h1>
        <h2>Student / Aspiring software engineer</h2>
        <Link to="/contacts" className='flat-button'>CONTACT ME</Link>
      </div>
      <div className='profile-container'>
        <img className='profile' src={profile} alt='profile'/>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home