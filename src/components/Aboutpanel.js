import React from 'react'
import './style/Aboutpanel.css'
import data from '../data'

function Aboutpanel() {
    const datas = data[3].panel
    return (
        <div id='panel'>
            <div className='wrap-panel'>
                <div className='panel-title'>
                    <span>Advisory Panel</span>
                </div>
                <div className='panel-intro'>
                    <p>
                        안녕하세요 (주)구현솔루션의 자문단입니다.<br />
                        안녕하세요 (주)구현솔루션의 자문단입니다.안녕하세요 (주)구현솔루션의 자문단입니다.<br />
                        안녕하세요 (주)구현솔루션의 자문단입니다.안녕하세요 (주)구현솔루션의 자문단입니다.안녕하세요 (주)구현솔루션의 자문단입니다..<br />
                        안녕하세요 (주)구현솔루션의 자문단입니다.안녕하세요 (주)구현솔루션의 자문단입니다.<br />
                    </p>
                </div>
                <ul className='panel-items'>
                    {
                        datas.map((panel, idx) => {
                            return (
                                <li className='panel'>
                                    <li className='panel-img'>
                                        <img src={panel.img} alt='이미지'></img>
                                    </li>
                                    {
                                        Object.keys(panel).map((key, idx) => {
                                            return (
                                                <li>
                                                    {
                                                        panel[key] != 0 && key != 'img' ? <span>{panel[key]}</span> : null
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
    )
}

export default Aboutpanel