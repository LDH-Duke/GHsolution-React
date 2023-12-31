import React from 'react'
import './style/HomeIntroSVC.css'
import data from '../data'
import { Link } from 'react-router-dom'

function HomeIntroSVC(props) {
    const contents = data[0].intro_service
    return (
        <div id='introservice'>
            <div className='wrap-intro-svc'>
                <div className='introsvc-title'>
                    <h3>Our Service</h3>
                </div>
                <ul className='introsvc-item'>
                    {
                        contents.map((content, idx) => {
                            let width, height = 80;
                            if (window.innerWidth <= 480) {
                                width = 30
                                height = 30
                            } else {
                                width = 50
                                height = 50
                            }
                            // console.log(content, idx)
                            return (
                                <li key={idx} onClick={() => { props.setView(idx) }}>
                                    {/* < li className='svc-img' >
                                        <iconwrapper>{content.icon(width, height)}</iconwrapper>
                                    </li> */}
                                    <iconwrapper>{content.icon(width, height)}</iconwrapper>
                                    <li className='svc-item'>
                                        <span >{content.title}</span>
                                        <span style={{ 'display': 'inline-block', 'text-align': 'left' }}>{content.content}</span>
                                        <Link to={`/service/${content.url}`}>더보기 Click</Link>
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