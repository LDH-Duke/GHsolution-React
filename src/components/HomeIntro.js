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
                        <p align="left">
                            메인화면 (주)구현솔루션 소개글입니다.<br />
                            간략하게 소개글 입력
                            간략하게 소개글 입력간략하게 소개글 입력
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomeIntro