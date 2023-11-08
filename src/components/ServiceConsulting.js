import React from 'react'
import './style/ServiceConsulting.css'
import data from '../data'
import gslogo from '../img/gs.png'

function ServiceConsulting() {
    const keywords = data[7].GStarget
    const cards = data[7].Procedure


    return (
        <div id='consulting'>
            <div className='wrap-consult'>
                <div className='intro-consult'>
                    <div className='title'>
                        GS인증 컨설팅이란?
                    </div>
                    <div className='intro-contents'>
                        <div className='img'>
                            <img src={gslogo} alt='이미지'></img>
                        </div>
                        <div className='text'>
                            <span align="left">
                                GS(Good softsware)인증은 소프트웨어 진흥법 제20조에 의거한 소프트웨어의 품질 인증 시스템입니다.
                                전문 인력이 진행하는 GS인증 컨설팅을 통해 GS인증에 필요한 정보를 취득하고 인증 획득 시간을 줄여보세요.
                            </span>
                        </div>

                    </div>
                </div>
                <div className='target'>
                    <div className='title'>
                        컨설팅 분야
                    </div>
                    <div className='explain'>
                        구현솔루션은 소프트웨어와 관련된 모든 분야에 대해 컨설팅을 진행합니다.
                    </div>
                    <div className='target-contents'>
                        {
                            keywords.map((keyword, idx) => {
                                return (
                                    <span className='target-keyword'>
                                        {keyword}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='procedure'>
                    <div className='title'>
                        컨설팅 과정
                    </div>

                    <div className='proc-contents'>
                        <ul className='wrap-card'>
                            {
                                cards.map((card, idx) => {
                                    let width, height = 80;
                                    if (window.innerWidth <= 480) {
                                        width = 30
                                        height = 30
                                    }
                                    return (
                                        <li className='proc-card'>
                                            <div className='card-header'>
                                                {/* <img  alt='img'></img> */}
                                                <iconWrapper>{card.icon(width, height)}</iconWrapper>
                                                <span className='card-title'>{card.title}</span>
                                            </div>
                                            <div className='card-body'>
                                                {
                                                    card.contents.map((text, idx) => {
                                                        return (
                                                            <span>
                                                                {text}
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceConsulting