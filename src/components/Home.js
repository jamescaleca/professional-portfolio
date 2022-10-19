import React from 'react'
import Navbar from './Navbar'
import GithubIcon from '../icons/github-icon.svg'
import NextJsIcon from '../icons/nextjs-icon-svgrepo-com.svg'
import ReactIcon from '../icons/react-icon.svg'
import JsIcon from '../icons/js-icon.svg'
import HtmlIcon from '../icons/html5-icon.svg'
import CssIcon from '../icons/css3-icon.svg'
import VsIcon from '../icons/vscode-icon.svg'
import NodeIcon from '../icons/node-icon.svg'
import SassIcon from '../icons/sass-icon.svg'
import UpArrowIcon from '../icons/arrow-up-solid.svg'
import CatIcon from '../icons/cat-solid.svg'
import MusicIcon from '../icons/music-solid.svg'
import GamePadIcon from '../icons/gamepad-solid.svg'
import SelfPort from '../icons/it-me2.jpg'
import DiaryIcon from '../project-screenshots/diary-buddy.png'
import RTVIcon from '../project-screenshots/RTV-screenshot.png'
import CovidAppIcon from '../project-screenshots/COVID-vax-to-case-screenshot.png'
import OPVetIcon from '../project-screenshots/op-vet.png'
import '../styles/styles.css'

function Home() {
    return (
        <>
            <Navbar />
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
                    <div id='about-me'>
                        <h2>A LITTLE ABOUT ME</h2>
                        <p>Front-end web developer. Instructor at Utah-based V School. Experienced in: JavaScript, Next.js React.js, Node.js, HTML, CSS, AJAX, JSON, APIs, MongoDB, and Express. I love to learn, I love to help people, and I am thrilled that I get to do both of those things for my career.</p>
                            
                        <p>I have a great passion for music - listening to it, practicing my electric bass and guitar, and dabbling in music production. I am the caretaker of two incredible cats. And I am a lifelong lover of video games, as well as all art in general.</p>
                    </div>
                </div>
            </div>
            <div id='skills'>
                <div className='skills-icons'>
                    <h2 className='skills-header'>SKILLS</h2>
                    <ul className='list-style-none' id='skills-icon-list'>
                        <li className='tooltip'>
                            <span className='tooltiptext'>Next.js</span>
                            <img src={NextJsIcon} alt='next-js' />
                        </li>
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
                        <h2 className='skills-cat'>LANGUAGES</h2>
                        <ul className='list-style-none skills-list'>
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                    </div>
                    <div className='skills-three-columns' id='skills-column2'>
                        <h2 className='skills-cat'>FRAMEWORKS</h2>
                        <ul className='list-style-none skills-list'>
                            <li>React.js</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <div className='skills-three-columns' id='skills-column3'>
                        <h2 className='skills-cat'>DATABASE</h2>
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
                    <h2>PROJECTS I'VE WORKED ON</h2>
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
                            <label htmlFor='op-vet' className="project-description">Collaborated with a team of stage two developers and instructors from V School on a registration website for an event organized by <a href="https://www.opveteran.org/" target="_blank" rel="noopener noreferrer">OP Veteran</a>. Contributed work on the user interface, including the booth registration page, displaying local and Shopify cart information, and design aspects of the sidebar.</label>
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
                            Collaborated with <a href='https://www.nyjiascott.com' target="_blank" rel="noopener noreferrer">Nyjia Scott</a> for an application that allows users to submit diary entries, either from a blank entry page or by choosing from a list of changing templates so they can write entries based on those prompts. I worked on much of the functionality, including adding user functionality, the search bar, and the ability to add, delete, and edit entries.</label>
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
                            <label htmlFor='rtv' className="project-description">Developed a website that allows users to create an account, post about politically-related issues, and upvote/downvote posts (similar to Reddit). This is one of my solo projects and was a study in creating a combination front-end and back-end application, so this gave me plenty of experience with creating Mongoose schemas and sub-schemas.</label>
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
                            <label htmlFor='covid-app' className="project-description">Another one of my solo projects. Engineered an app, using three APIs, that allows users to see COVID vaccination data and compare them to case numbers in each state and county across the USA. Vaccination data is illustrated using a Google heat map. This gave me excellent experience with visualizing daily-updated API data.</label>
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
                <a id="top-link" href="#top">
                    <img src={UpArrowIcon} alt="up-arrow"></img><p>BACK TO TOP</p>
                </a>
            </div>
        </>
    )
}

export default Home