import React from 'react'
import data from '../data'
import './style/ServiceResearch.css'

function ServiceResearch() {
    const procedure = data[9].research
    const portfolio = data[9].research_portfolio


    return (
        <div id='research'>
            <div className='wrap-re'>
                <div className='intro-re'>
                    <div className='title'>
                        연구목표
                    </div>
                    <div className='intro-contents'>
                        <p>
                            (주)구현솔루션은 혁신적인 미래를 만들어나가기 위해 사람들과 함께 연구합니다.
                        </p>
                    </div>
                </div>
                <div className='procedure'>
                    <div className='title'>
                        연구 과정
                    </div>
                    <div className='explain'>
                        구현솔루션은 4단계로 연구를 진행합니다.
                    </div>
                    <div className='procedure-contents'>
                        {
                            procedure.map((step, idx) => {
                                return (
                                    <div className='step'>
                                        <iconwrapper>{step.icon()}</iconwrapper>
                                        <span className='step-title'>
                                            {step.title}
                                        </span>
                                        <p className='step-contents'>
                                            {step.contents}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='portfolio'>
                    <div className='title'>
                        연구 성과
                    </div>
                    <ul className='wrap-card'>
                        {
                            portfolio.map((card, idx) => {
                                return (
                                    <li className='card'>
                                        <div className='card-img'>

                                        </div>
                                        <div className='card-contents'>
                                            <span className='card-title'>{card.name}</span>
                                            <span className='card-text'>{card.contents}</span>
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

export default ServiceResearch