import React from 'react'
import LinkedinIcon from '../icons/linkedin-icon.svg'
import GithubIcon from '../icons/github-icon.svg'
import ReactIcon from '../icons/react-icon.svg'
import JsIcon from '../icons/js-icon.svg'
import HtmlIcon from '../icons/html5-icon.svg'
import CssIcon from '../icons/css3-icon.svg'
import VsIcon from '../icons/vscode-icon.svg'
import NodeIcon from '../icons/node-icon.svg'
import SassIcon from '../icons/sass-icon.svg'
import EmailIcon from '../icons/email-icon.svg'
import FileIcon from '../icons/file-icon.svg'
import CatIcon from '../icons/cat-solid.svg'
import MusicIcon from '../icons/music-solid.svg'
import GamePadIcon from '../icons/gamepad-solid.svg'
import SelfPort from '../icons/it-me2.jpg'
import DiaryIcon from '../project-screenshots/diary-buddy.png'
import RTVIcon from '../project-screenshots/RTV-screenshot.png'
import CovidAppIcon from '../project-screenshots/COVID-vax-to-case-screenshot.png'
import OPVetIcon from '../project-screenshots/op-vet.png'
import Resume from '../pdfs/James-Caleca-Resume.pdf'
import '../styles/styles.css'

function Home() {
    return (
        <>
            <div id='title'>
                <img id='self-port' src={SelfPort} alt='me-img' />
                <div id='title-main'>
                    <h1 id='name'>JAMES CALECA</h1>
                    <ul id='title-subtitle'>
                        <li id='profession'>FULL-STACK WEB DEVELOPER</li>
                        <li className='hobbies'>
                            <img src={MusicIcon} alt='cat-icon'/>
                            <span className='hobby-text'>MUSICIAN</span>
                        </li>
                        <li className='hobbies'>
                            <img src={CatIcon} alt='cat-icon'/>
                            <span className='hobby-text'>CAT DAD</span>
                        </li>
                        <li className='hobbies'>
                            <img src={GamePadIcon} alt='cat-icon'/>
                            <span className='hobby-text'>VIDEO GAME ENTHUSIAST</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div id='skills'>
                <div className='skills-icons'>
                    <h2 className='skills-header'>Skills</h2>
                    <ul className='list-style-none' id='skills-icon-list'>
                        <li className='tooltip'>
                            <span className='tooltiptext'>React</span>
                            <img src={ReactIcon} alt='react' />
                        </li>
                        <li className='tooltip'>
                            <span className='tooltiptext'>JavaScript</span>
                            <img src={JsIcon} alt='javascript' />
                        </li>
                        <li className='tooltip'>
                            <span className='tooltiptext'>Node.js</span>
                            <img src={NodeIcon} alt='nodejs' />
                        </li>
                        <li className='tooltip'>
                            <span className='tooltiptext'>HTML5</span>
                            <img src={HtmlIcon} alt='html5' />
                        </li>
                        <li className='tooltip'>
                            <span className='tooltiptext'>CSS3</span>
                            <img src={CssIcon} alt='css3' />
                        </li>
                        <li className='tooltip'>
                            <span className='tooltiptext'>Github</span>
                            <img src={GithubIcon} alt='github' />
                        </li>
                        <li className='tooltip'>
                            <span className='tooltiptext'>VS Code</span>
                            <img src={VsIcon} alt='visualstudio' />
                        </li>
                        <li className='tooltip'>
                            <span className='tooltiptext'>Sass</span>
                            <img src={SassIcon} alt='sass' />
                        </li>
                    </ul>
                </div>
                <div id='skills-list-grid'>
                    <div className='skills-three-columns' id='skills-column1'>
                        <h2 className='skills-cat'>Languages</h2>
                        <ul className='list-style-none skills-list'>
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                    </div>
                    <div className='skills-three-columns' id='skills-column2'>
                        <h2 className='skills-cat'>Frameworks</h2>
                        <ul className='list-style-none skills-list'>
                            <li>React.js</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <div className='skills-three-columns' id='skills-column3'>
                        <h2 className='skills-cat'>Database</h2>
                        <ul className='list-style-none skills-list'>
                            <li>MongoDB</li>
                            <li>Express.js</li>
                            <li>Mongoose</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id='projects'>
                <div id='projects-title'>
                    <h2>Projects I've worked on</h2>
                </div>
                <ul id='projects-list' className='list-style-none'>
                    <li className='project-screenshot'>
                        <a href='https://op-veterans-dev.web.app/' target="_blank" rel="noopener noreferrer">
                            <img src={OPVetIcon} alt='op-vet'/>
                        </a>
                        <div>
                            <span className="skills-span">SKILLS USED</span>
                            <ul>
                                <li>React.js</li>
                                <li>Firebase</li>
                                <li>Shopify</li>
                            </ul>
                            <a href='https://op-veterans-dev.web.app/' target="_blank" rel="noopener noreferrer" className="project-title">OP VETFEST</a>
                            <label htmlFor='op-vet' className="project-description">Collaborated with a team of stage two developers and instructors from V School on a registration website for an event organized by <a href="https://www.opveteran.org/" target="_blank" rel="noopener noreferrer">OP Veteran</a>. Contributed work on the user interface, particularly on the booth registration page.</label>
                        </div>
                        <span className="project-github">
                            <a 
                                href='https://github.com/V-School-Module-7/op-veteran' 
                                target="_blank" 
                                rel="noopener noreferrer"
                            ><img src={GithubIcon} alt='proj-git'/>View on Github
                            </a>
                        </span>
                    </li>
                    <li className='project-screenshot'>
                        <a href='https://diarybuddy.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                            <img src={DiaryIcon} alt='diary-buddy'/>
                        </a>
                        <div>
                            <span className="skills-span">SKILLS USED</span>
                            <ul>
                                <li>React.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                            </ul>
                            <a href='https://diarybuddy.herokuapp.com/' target="_blank" rel="noopener noreferrer" className="project-title">DIARY BUDDY</a>
                            <label htmlFor='diary-buddy' className="project-description">
                            Collaborated with <a href='https://www.nyjiascott.com' target="_blank" rel="noopener noreferrer">Nyjia Scott</a> for an application that allows users to submit diary entries, either from a blank entry page or by choosing from a list of changing templates so they can write entries based on those prompts.</label>
                        </div>
                        <span className="project-github">
                            <a 
                                href='https://github.com/jamescaleca/diary-buddy-heroku'
                                target="_blank" 
                                rel="noopener noreferrer"
                            ><img src={GithubIcon} alt='proj-git'/>View on Github
                            </a>
                        </span>
                    </li>
                    <li className='project-screenshot'>
                        <a href='https://rtv-heroku.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                            <img src={RTVIcon} alt='rtv'/>
                        </a>
                        <div>
                            <span className="skills-span">SKILLS USED</span>
                            <ul>
                                <li>React.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>Mongoose Schemas</li>
                            </ul>
                            <a href='https://rtv-heroku.herokuapp.com/' target="_blank" rel="noopener noreferrer" className="project-title">ROCK THE VOTE</a>
                            <label htmlFor='rtv' className="project-description">Developed a website that allows users to create an account, post about politically-related issues, and upvote/downvote posts (similar to Reddit).</label>
                        </div>
                        <span className="project-github">
                            <a 
                                href='https://github.com/jamescaleca/rtv-heroku' 
                                target="_blank" 
                                rel="noopener noreferrer"
                            ><img src={GithubIcon} alt='proj-git'/>View on Github
                            </a>
                        </span>
                    </li>
                    <li className='project-screenshot'>
                        <a href='https://angry-goldstine-db1057.netlify.app/' target="_blank" rel="noopener noreferrer">
                            <img src={CovidAppIcon} alt='covid-app' />
                        </a>
                        <div>
                            <span className="skills-span">SKILLS USED</span>
                            <ul>
                                <li>React.js</li>
                                <li>Google Maps API</li>
                                <li>COVID Act Now API</li>
                                <li>OpenDataSoft API</li>
                            </ul>
                            <a href='https://angry-goldstine-db1057.netlify.app/' target="_blank" rel="noopener noreferrer" className="project-title">COVID VAX-TO-CASE</a>
                            <label htmlFor='covid-app' className="project-description">Engineered an app, using three APIs, that allows users to see COVID vaccination data and compare them to case numbers in each state and county across the USA. Vaccination data is illustrated using a Google heat map.</label>
                        </div>
                        <span className="project-github">
                            <a 
                                href='https://github.com/jamescaleca/covid-vax-to-case' target="_blank" 
                                rel="noopener noreferrer"
                            ><img src={GithubIcon} alt='proj-git'/>View on Github
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
            <footer>
                <ul className='professional-links list-style-none'>
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
                        <span className='tooltiptext'>E-mail</span>
                        <a href='mailto:jacaleca2@gmail.com'><img src={EmailIcon} alt='email'/></a>
                    </li>
                    <li className='professional-link tooltip'>
                        <span className='tooltiptext'>Resume</span>
                        <a href={Resume} target="_blank" rel="noopener noreferrer">
                            <img src={FileIcon} alt='resume' />
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Home