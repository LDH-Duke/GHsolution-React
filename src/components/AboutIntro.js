import React from 'react'
import './style/AboutIntro.css'
import meeting from '../img/meeting1.jpg'

function AboutIntro() {
    return (
        <div id='aboutintro'>
            <div className='wrap-aintro'>
                <div className='aintro-title'>
                    <span>GuHyun</span>
                </div>
                <div className='aintro-contents'>
                    <p>
                        (주)구현솔루션은 아이디어를 현실로 구현하는 기업입니다. 기획단계부터 개발까지 가능성을 함께 찾아드립니다.
                    </p>
                </div>
                <div className='aintro-img'>
                    <img src={meeting}></img>
                </div>

            </div>

        </div>
    )
}

export default AboutIntro