import React from 'react'
import './style/HomeIntroSVC.css'
import data from '../data'

function HomeIntroSVC() {
    const contents = data[0].intro_service
    console.log(contents)
    return (
        <div id='introservice'>
            <div className='wrap-intro-svc'>
                <div className='introsvc-title'>
                    <h3>GuHyun Service</h3>
                </div>
                <ul className='introsvc-item'>
                    {
                        contents.map((content, idx) => {

                            // console.log(content, idx)
                            return (
                                <li key={idx}>
                                    < li className='svc-img' >
                                        <img src={content.url} alt='이미지'></img>
                                        {
                                            console.log(content.a)
                                        }
                                    </li>
                                    <li className='svc-item'>
                                        <span style={{ 'font-weight': 'bold', 'font-size': '30px' }}>{content.title}</span>
                                        <span>{content.content}</span>
                                        <span>더보기 Click</span>
                                    </li>

                                </li>)
                        })
                    }

                </ul>
            </div >
        </div >
    )
}

export default HomeIntroSVC