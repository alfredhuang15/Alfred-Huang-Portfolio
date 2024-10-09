import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import React, { useState } from 'react'
import Logo from '../../assets/images/A_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faPadlet } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
      <img src={Logo} alt='logo' />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink onClick={() => setShowNav(false)} exact='true' activeclassname="active" to='/' >
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} exact='true' activeclassname="active" className="about-link" to='/about' >
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} exact='true' activeclassname="active" className="project-link" to='/projects' >
          <FontAwesomeIcon icon={faPadlet} color='#4d4d4e' />
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} exact='true' activeclassname="active" className="contact-link" to='/contacts' >
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color='#ffd700' size='3x' className='close-icon'/>
      </nav>
      <ul>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/alfred-huang-8475a8297/'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://github.com/alfredhuang15'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
          </a>
        </li>
      </ul>
      <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color='#ffd700' size='3x' className='hamburger-icon'/>
    </div>
  )
}

export default Sidebar
