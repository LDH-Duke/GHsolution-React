import React from 'react'
import './style/EduEnterprise.css'
import data from '../data'

function EduEnterprise() {
    const datas = data[5].ent_card
    const portfolio = data[8].ent_edu_portfolio
    console.log(datas)
    return (
        <div id='enterprise'>
            <div className='wrap-ent'>
                <div className='intro-edu'>
                    <div className='title'>
                        Enterprise Education
                    </div>
                    <div className='intro-contents'>
                        <p>
                            기업에서 필요한 SW교육(기초 프로그래밍, 데이터 분석 등)을 지원합니다.
                        </p>
                    </div>
                </div>

                <div className='service-card'>
                    <div className='title'>
                        교육 분야
                    </div>
                    <ul className='items'>
                        {
                            datas.map((card, idx) => {
                                return (
                                    <li className='card'>
                                        <li className='card-img'>
                                            <div className='img'>
                                                <img src='' alt='이미지'></img>
                                            </div>
                                        </li>
                                        {
                                            Object.keys(card).map((key, idx) => {
                                                return (
                                                    <li className='field'>
                                                        {
                                                            card[key] != 0 && key != 'img' ? <span>{card[key]}</span> : null
                                                        }
                                                    </li>
                                                )
                                            })
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className='slide'>
                    <div className='title'>
                        포트폴리오
                    </div>
                    <ul className='wrap-slide'>
                        {
                            portfolio.map((card, idx) => {
                                return (
                                    <li className='slide-card'>
                                        <div className='card-img'>
                                            <img alt='img'></img>
                                            <span>{card.title}</span>
                                        </div>
                                        <div className='card-title'>
                                            <span>{card.title}</span>
                                        </div>
                                        <div className='hidden-contents'>
                                            <span>{card.contents}</span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default EduEnterprise