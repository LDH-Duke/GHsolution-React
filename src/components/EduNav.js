import React from 'react'
import './style/EduNav.css'
function EduNav(porps) {
    const setView = porps.setView

    return (
        <div id='edunav'>
            <span onClick={() => { setView(0) }}>Enterprise</span>
            <span onClick={() => { setView(1) }}>Students</span>
        </div>
    )
}

export default EduNav