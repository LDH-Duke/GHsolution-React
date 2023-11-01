import React from 'react'
import './style/EduNav.css'
function EduNav(porps) {
    const setView = porps.setView

    return (
        <div id='edunav'>
            <ul className='wrap-edunav'>
                <li>
                    {
                        console.log(setView)
                    }
                    <span className={porps.show === 0 ? 'selected' : ''} onClick={() => { setView(0) }} >Enterprise</span>
                </li>
                <li>
                    <span className={porps.show === 1 ? 'selected' : ''} onClick={() => { setView(1) }} >Students</span>
                </li>
            </ul>

        </div>
    )
}

export default EduNav