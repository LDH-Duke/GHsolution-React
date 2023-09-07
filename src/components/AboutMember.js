import React from 'react'
import './style/AboutMember.css'
import data from '../data'

function AboutMember() {
    const datas = data[2].members

    return (
        <div id='aboutmember'>
            <div className='wrap-member'>
                <div className='mem-title'>
                    <span>Members</span>
                </div>
                <ul className='mem-items'>
                    {
                        datas.map((member, idx) => {
                            return (
                                <li className='member' key={idx}>
                                    <li className='mem-img'>
                                        <img src={member.img} alt='이미지'></img>
                                    </li>
                                    <li className='mem-content'>
                                        {
                                            Object.keys(member).map((key, idx) => {

                                                return (
                                                    <li>
                                                        {
                                                            member[key] != 0 && key != 'img' ? <span>{member[key]}</span> : null
                                                        }
                                                    </li>
                                                )
                                            })
                                        }
                                    </li>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

export default AboutMember