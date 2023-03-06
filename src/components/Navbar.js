import React from 'react'
import Logo from "../icons/logo3.png"
import LinkedinIcon from '../icons/linkedin-icon.svg'
import GithubIcon from '../icons/github-icon.svg'
// import EmailIcon from '../icons/email-icon.svg'
import FileIcon from '../icons/file-icon.svg'
import Resume from '../pdfs/James-Caleca-Resume-General.pdf'
import '../styles/styles.css'

function Navbar({toggleModal}) {
    return (
        <header>
            <img className="logo" src={Logo} alt="logo"></img>
            <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
            
            <nav>
                <ul>
                    <li className="active">
                        <a href="#skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li className='professional-link tooltip'>
                        <span className='tooltiptext'>LinkedIn</span>
                        <a href="https://www.linkedin.com/in/james-caleca/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedinIcon} alt='linkedin'/>
                        </a>
                    </li>
                    <li className='professional-link tooltip'>
                        <span className='tooltiptext'>Github</span>
                        <a href="https://github.com/jamescaleca" target="_blank" rel="noopener noreferrer">
                            <img src={GithubIcon} alt='github'/>
                        </a>
                    </li>
                    <li className='professional-link tooltip'>
                        <span className='tooltiptext'>Resume</span>
                        <a href={Resume} target="_blank" rel="noopener noreferrer">
                            <img src={FileIcon} alt='resume' />
                        </a>
                    </li>
                    <li className='professional-link tooltip'>
                        <button onClick={toggleModal} className='contact-me'>
                            Contact Me
                        </button>
                    </li>
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
        </header>
    )
}

export default Navbar