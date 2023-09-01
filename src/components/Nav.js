import React from 'react'
import { Link } from 'react-router-dom'
import './style/Nav.css'

function Nav() {
    return (
        <div className='nav'>
            <div className='wrap-nav'>
                <div className='nav-logo'>
                    <Link to='/' className='tab-link'>GUHYUN</Link>
                </div>
                <div className='nav-tab'>
                    <ul>
                        <li>
                            <Link to='/about' className='tab-link'>About</Link>
                        </li>
                        <li>
                            <Link to='/service' className='tab-link'>Service</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='tab-link'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav