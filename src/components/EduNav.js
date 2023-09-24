import React from 'react'
import './style/EduNav.css'
function EduNav(porps) {
    const setView = porps.setView

    return (
        <div id='edunav'>
            <ul className='wrap-edunav'>
                <li>
                    <span onClick={() => { setView(0) }}>Enterprise</span>
                </li>
                <li>
                    <span onClick={() => { setView(1) }}>Students</span>
                </li>
            </ul>

        </div>
    )
}

export default EduNav