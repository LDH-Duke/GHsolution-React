import React, { useState, useEffect } from 'react'
import './style/EduStudents.css'
import data from '../data'

function EduEnterprise() {
    const datas = data[5].ent_card
    const portfolio = data[8].stu_edu_portfolio

    let slideWidth = 200,
        slideMargin = 30,
        slideLen = portfolio.length;
    let index = 1


    // const [index, setIndex] = useState(1);
    const [slide, setSlides] = useState(null)

    useEffect(() => {
        if (window.innerWidth <= 480) {
            slideWidth = 100
            slideMargin = 10
        }
        const slides = document.getElementById('slides');
        slides.style.width = `${(slideWidth + slideMargin) * slideLen - slideMargin}px`
    }, [])

    const preSlide = () => {

        const slides = document.getElementById('slides');

        if (window.innerWidth <= 480) {
            slideWidth = 100
            slideMargin = 10
        }

        // console.log(index)
        if (index > 1) {
            // console.log("이전 버튼 동작 전 : "+index)
            index = index - 1
            slides.style.left = (-index + 1) * (slideWidth + slideMargin) + 'px';
            // console.log("이전 버튼 동작 후 : "+index)
        } else {
            index = 1
            slides.style.left = 0 + 'px';
        }


    }

    const nextSlide = () => {
        const slides = document.getElementById('slides');

        if (window.innerWidth <= 480) {
            slideWidth = 100
            slideMargin = 10
        }

        if (index < slideLen - 4) {
            // console.log('다음 버튼 동작 전 : '+index)
            slides.style.left = -index * (slideWidth + slideMargin) + 'px';
            index += 1
            // console.log('다음 버튼 동작 후 : ' +index)
        } else {
            // console.log('최대값 : '+ index)
            index = 1
            slides.style.left = 0 * 230 + 'px';
        }


    }



    return (
        <div id='student'>
            <div className='wrap-stu'>
                <div className='intro-edu'>
                    <div className='title'>
                        학생 교육 서비스
                    </div>
                    <div className='intro-contents'>
                        <p>
                            학생들에게 필요한 SW교육(기초 프로그래밍, 데이터 분석 등)을 지원합니다.
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
                    <div className='wrap-slides'>
                        <ul id='slides' className='slides'>
                            {
                                portfolio.map((card, idx) => {
                                    return (
                                        <li id='slide-card' className='slide-card'>
                                            <div className='card-img'>
                                                {/* <img alt='img'></img> */}
                                                <span>{card.title}</span>
                                            </div>
                                            {/* <div className='card-title'>
                                                <span>{card.title}</span>
                                            </div> */}
                                            <div className='hidden-contents'>
                                                <span>{card.contents}</span>
                                                <span>{idx}</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className='preBtn'>
                            <span onClick={preSlide}>{'<'}</span>
                        </div>
                        <div className='nextBtn'>
                            <span onClick={nextSlide}>{'>'}</span>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default EduEnterprise