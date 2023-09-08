import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data'
import './style/ServicePost.css'

function ServicePost(props) {
    const tabs = props.tab
    // console.log(props.shows)
    return (
        <div id='servicepost'>
            <div className='wrap-spost'>
                <div className='service-title'>
                    <span>Service</span>
                </div>
                <ul className='service-tabs'>
                    {
                        tabs.map((tab, idx) => {
                            return (
                                <li className='tab'>
                                    <span onClick={props.shows(idx)}>{tab}</span>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    )
}

export default ServicePost