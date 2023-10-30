import React from 'react'
import './style/EduEnterprise.css'
import data from '../data'

function EduEnterprise() {
    const datas = data[5].ent_card
    console.log(datas)
    return (
        <div id='enterprise'>
            <div className='wrap-ent'>
                <div className='ent-title'>
                    <span>Enterprise Education</span>
                </div>
                <div className='ent-contents'>
                    <p>
                        기업에서 필요한 SW교육(기초 프로그래밍, 데이터 분석 등)을 지원합니다.
                    </p>
                </div>
                <div className='ent-items'>
                    <ul className='items'>
                        {
                            datas.map((card, idx) => {
                                return (
                                    <li className='card'>
                                        <li className='card-img'>
                                            <img src='' alt='이미지'></img>
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
            </div>
        </div>
    )
}

export default EduEnterprise