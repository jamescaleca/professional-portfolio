import React from 'react'
import { Link } from 'react-router-dom'
import LinkedinIcon from '../icons/linkedin-icon.svg'
import GithubIcon from '../icons/github-icon.svg'
import ResumeIcon from '../icons/file-icon.svg'
import ReactIcon from '../icons/react-icon.svg'
import JsIcon from '../icons/js-icon.svg'
import HtmlIcon from '../icons/html5-icon.svg'
import CssIcon from '../icons/css3-icon.svg'
import VsIcon from '../icons/vscode-icon.svg'
import NodeIcon from '../icons/node-icon.svg'
import SassIcon from '../icons/sass-icon.svg'
import SelfPort from '../icons/it-me.jpg'
import DiaryIcon from '../project-screenshots/diary-buddy.png'
import BeerRecIcon from '../project-screenshots/beer-recipe.png'
import PostThingIcon from '../project-screenshots/post-a-thing.png'

import Resume from '../pdfs/James_Caleca_Resume_VSchool.pdf'

import '../styles/styles.css'


function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <div className='content'>
                <div className='content-container title'>
                    <div className='title-text'>
                        <div id='title-main'>
                            <h1>James Caleca</h1>
                        </div>
                        <div id='title-subtitle'>
                            <h2>Full-Stack Web Developer</h2>
                            <h3>Cat Lover</h3>
                            <h3>Video Game Enthusiast</h3>
                        </div>
                    </div>
                    <div id='title-img'>
                        <img src={SelfPort} alt='me-img' />
                    </div>
                </div>
                <div className='content-container'>
                    <div className='skills'>
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
                            <div className='skills-three-columns'>
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
                </div>
                <div className='content-container'>
                    <div className='projects'>
                        <div id='projects-title'>
                            <h2>Projects I've worked on</h2>
                        </div>
                        <ul className='projects-list list-style-none'>
                            <li className='project-screenshot'>
                                <h4>Diary Buddy</h4>
                                <img src={DiaryIcon} alt='diary-buddy'/>
                                <label htmlFor='diary-buddy'>
                                    Created by James Caleca and <a href='https://www.nyjiascott.com'>Nyjia Scott</a>
                                </label>
                            </li>
                            <li className='project-screenshot'>
                                <h4>Beer Recipe Finder</h4>
                                <img src={BeerRecIcon} alt='beer-recipes' />
                            </li>
                            <li className='project-screenshot'>
                                <h4>Item Poster</h4>
                                <img src={PostThingIcon} alt='ugly-things' />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content-container'>
                    <div id='contact-me'>
                        <h2>Send me an email:</h2>
                        <h3><a href='mailto:jacaleca2@gmail.com'>jacaleca2@gmail.com</a></h3>
                    </div>
                </div>
            </div>
            <footer>
                <ul className='professional-links list-style-none'>
                    <li className='professional-link tooltip'>
                        <span className='tooltiptext'>LinkedIn</span>
                        <Link to='/linkedin'>
                            <img src={LinkedinIcon} alt='linkedin'/>
                        </Link>
                    </li>
                    <li className='professional-link tooltip'>
                        <span className='tooltiptext'>Github</span>
                        <Link to='/github'>
                            <img src={GithubIcon} alt='github'/>
                        </Link>
                    </li>
                    <li className='professional-link tooltip'>
                        <span className='tooltiptext'>Resume</span>
                        <a href={Resume}><img src={ResumeIcon} alt='resume'/></a>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Home