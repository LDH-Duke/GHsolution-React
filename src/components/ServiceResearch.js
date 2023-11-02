import React from 'react'
import './style/ServiceResearch.css'
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
                        연구목표
                    </div>
                    <div className='intro-contents'>
                        <p>
                            (주)구현솔루션은 혁신적인 미래를 만들어나가기 위해 사람들과 함께 연구합니다.
                        </p>
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
                                    return (
                                        <li className='proc-card'>
                                            <div className='card-header'>
                                                {/* <img  alt='img'></img> */}
                                                <iconWrapper>{card.icon()}</iconWrapper>
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