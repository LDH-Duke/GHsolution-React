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
                    <h3>GuHyun Service</h3>
                </div>
                <ul className='introsvc-item'>
                    {
                        contents.map((content, idx) => {

                            // console.log(content, idx)
                            return (
                                <li key={idx} onClick={()=>{props.setView(idx)}}>
                                    < li className='svc-img' >
                                        <img src={content.img} alt='이미지'></img>
                                    </li>
                                    <li className='svc-item'>
                                        <span style={{ 'font-weight': 'bold', 'font-size': '30px' }}>{content.title}</span>
                                        <span style={{'display':'inline-block', 'text-align':'left'}}>{content.content}</span>
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