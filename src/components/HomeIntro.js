import React from 'react'
import './style/HomeIntro.css'
import introImg from '../img/image2.png'

function HomeIntro() {
    return (
        <div id='homeintro'>
            <div className='wrap-intro'>
                <div className='intro-title'>
                    <h3>GuHyun</h3>
                </div>
                <ul className='intro-item'>
                    <li className='intro-imgbox'>
                        <img src={introImg} alt='이미지'></img>
                    </li>
                    <li className='intro-content'>
                        <p>
                            (주)구현솔루션sadsadsadsadsads은<br />
                            xzcxzcxz
                            adsadsa
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomeIntro