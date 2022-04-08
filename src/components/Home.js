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
import SelfPort from '../icons/it-me2.jpg'
import DiaryIcon from '../project-screenshots/diary-buddy.png'
import BudgetIcon from '../project-screenshots/budget-app.png'
import RTVIcon from '../project-screenshots/RTV-screenshot.png'
import CovidAppIcon from '../project-screenshots/COVID-vax-to-case-screenshot.png'

import '../styles/styles.css'

function Home() {
    return (
        <>
            <div id='title-text'>
                <div id='title-main'>
                    <h1 id='name'>JAMES CALECA</h1>
                    <img className='self-port' src={SelfPort} alt='me-img' />
                </div>
                <div id='title-subtitle'>
                    <h2>Full-Stack Web Developer</h2>
                    <h3>Musician</h3>
                    <h3>Cat Lover</h3>
                    <h3>Video Game Enthusiast</h3>
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
            <div className='content-container'>
                <div id='projects'>
                    <div id='projects-title'>
                        <h2>Projects I've worked on</h2>
                    </div>
                    <ul id='projects-list' className='list-style-none'>
                        <li className='project-screenshot'>
                            <h4>Covid Vax-To-Case</h4>
                            <a href='https://angry-goldstine-db1057.netlify.app/' target="_blank" rel="noopener noreferrer">
                                <img src={CovidAppIcon} alt='covid-app' />
                            </a>
                            <label htmlFor='covid-app'>Engineered an app, using three APIs (Google Maps, COVID Act Now, OpenDataSoft), that allows users to see COVID vaccination data and compare them to case numbers in each state and county across the USA. Vaccination data is illustrated using a Google heat map.</label>
                        </li><hr />
                        <li className='project-screenshot'>
                            <h4>Diary Buddy</h4>
                            <a href='https://diarybuddy.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                                <img src={DiaryIcon} alt='diary-buddy'/>
                            </a>
                            <label htmlFor='diary-buddy'>
                            Collaborated with <a href='https://www.nyjiascott.com' target="_blank" rel="noopener noreferrer">Nyjia Scott</a> for an application that allows users to submit diary entries, either from a blank entry page or by choosing from a list of changing templates so they can write entries based on those prompts.</label>
                        </li><hr />
                        <li className='project-screenshot'>
                            <h4>Rock the Vote</h4>
                            <a href='https://rtv-heroku.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                                <img src={RTVIcon} alt='rtv'/>
                            </a>
                            <label htmlFor='rtv'>Developed a website that allows users to create an account, post about politically-related issues, and upvote/downvote posts (similar to Reddit).</label>
                        </li>
                        <li className='project-screenshot'>
                            <h4>Budget App</h4>
                            <a href='https://tender-borg-29ac3b.netlify.app/' target="_blank" rel="noopener noreferrer">
                                <img src={BudgetIcon} alt='budget-app'/>
                            </a>
                            <label htmlFor='budget-app'>Compiled a simple budget application that allows users to track their spending with multiple budget categories.</label>
                        </li><hr />
                    </ul>
                </div>
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
                </ul>
            </footer>
        </>
    )
}

export default Home