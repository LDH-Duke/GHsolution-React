import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import data from '../data'
import './style/ServicePost.css'

function ServicePost(props) {
    const tabs = props.tabs[0]


    const activeStyle = {
        color: '#00A3FF'
    }

    return (
        <div id='servicepost'>
            <div className='wrap-spost'>
                <div className='service-title'>
                    <span>Service</span>
                </div>
                <ul className='service-tabs'>
                    {
                        Object.keys(tabs).map((tab, idx) => {

                            return (
                                <li className='tab'>
                                    <NavLink to={`/service/${tab}`} style={({ isActive }) => (isActive ? activeStyle : {})} onClick={() => { props.shows(idx) }}>{tabs[tab]}</NavLink>
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