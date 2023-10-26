import React from 'react'
import './style/Homemain.css'
import mainImg from '../img/yellowplant.jpg'
import mainImg2 from '../img/orangewall.jpg'

function Homemain() {
    return (
        <div id='home-main'>
            <div className='wrap-main'>
                {/* <img src={mainImg}></img> */}
                <div className='title'>
                    <p>저렴한 비용으로 </p>
                    <p>소프트웨어 프로토타입 개발을 도와드립니다.</p>
                </div>
                <div className='title-contents'>
                    <p>구현솔루션은 아이디어로만 가지고 있던 아이템을 동작하는 소프트웨어로 만들어드립니다.</p>
                    <p>프로토타입 개발을 통해 기획이나 설계단계에서 발견하지 못한 이슈를 소프트웨어로 구현함으로써 미리 검증해보세요</p>

                </div>

            </div>
        </div>
    )
}

export default Homemain