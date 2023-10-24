import React from 'react'
import { Link } from 'react-router-dom'
import './style/Nav.css'

function Nav(props) {
    return (
        <div className='nav'>
            <div className='wrap-nav'>
                <div className='nav-logo'>
                    <Link to='/' className='tab-link'>(주)구현솔루션</Link>
                </div>
                <div className='nav-tab'>
                    <ul className='main-tab'>
                        {/* <li>
                            <Link to='/about' className='tab-link'>About</Link>
                        </li> */}
                        <li>
                            <Link to='/service' onClick={() => { props.setView(99) }} className='tab-link'>Service</Link>
                            <ul className='sub-tab'>
                                <li>
                                    <Link to='/service/edu' onClick={() => { props.setView(0) }} className='sub-link'>교육</Link>

                                </li>
                                <li>
                                    <Link to='/service/research' onClick={() => { props.setView(1) }} className='sub-link'>연구</Link>

                                </li>
                                <li>
                                    <Link to='/service/dev' onClick={() => { props.setView(2) }} className='sub-link'>개발</Link>

                                </li>
                                <li>
                                    <Link to='/service/consulting' onClick={() => { props.setView(3) }} className='sub-link'>컨설팅</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to='/contact' className='tab-link'>Contact</Link>
                        </li>
                    </ul>
                </div>

            </div>
            {/* <div className='nav-sub'>
                <ul className='sub-tab'>
                    <li>
                        <Link to='/education' className='sub-link'>교육</Link>

                    </li>
                    <li>
                        <Link to='/research' className='sub-link'>연구</Link>

                    </li>
                    <li>
                        <Link to='/development' className='sub-link'>개발</Link>

                    </li>
                    <li>
                        <Link to='/gsconsulting' className='sub-link'>컨설팅</Link>
                    </li>
                </ul>

            </div> */}
        </div>
    )
}

export default Nav