import React, { useRef, useState } from 'react'
import './style/Side.css'
import { Link } from 'react-scroll'

function Side() {


    const moveScorll = (tab) => {

        if (tab == 'main') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        else if (tab == 'introduction') {
            window.scrollTo({ top: 964, behavior: 'smooth' })
        } else if (tab == 'service') {
            window.scrollTo({ top: 1928, behavior: 'smooth' })
        }

    }

    return (
        <div id='side'>
            <div className='wrap-side'>
                <ul>
                    <li id='main' onClick={() => { moveScorll('main') }}>
                        <i className='dot'></i>
                        <p>Main</p>
                    </li>
                    <li id='introduction' onClick={() => { moveScorll('introduction') }} >
                        <i className='dot'></i>
                        <p>Introdution</p>
                    </li>
                    <li id='service' onClick={() => { moveScorll('service') }}>
                        <i className='dot'></i>
                        <p>Service</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Side