import React from 'react'
import './style/HomeIntroSVC.css'
import data from '../data'

function HomeIntroSVC() {
    const contents = data[0].intro_service
    return (
        <div className='introservice'>
            <div className='wrap-intro-svc'>
                <div className='introsvc-title'>
                    <h3>GuHyun Service</h3>
                </div>
                <ul className='introsvc-item'>
                    {
                        contents.map((content, idx) => {
                            return (
                                <li className={idx} key={idx}>
                                    <li>
                                        <img src={content.url} alt='이미지'></img>
                                    </li>
                                    <li>
                                        <span>{content.title}</span><br />
                                        <span>{content.content}</span>
                                    </li>
                                </li>)
                        })
                    }

                </ul>
            </div>
        </div >
    )
}

export default HomeIntroSVC