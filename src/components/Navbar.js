import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <nav>
                <ul className='nav-ul'>
                    <li><Link to='/'>Home</Link></li>
                    {/* <li><Link to='/contact'>Contact</Link></li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar