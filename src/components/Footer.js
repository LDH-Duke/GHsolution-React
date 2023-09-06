import React from 'react'
import './style/Footer.css'
import data from '../data'

function Footer() {
    const items = data[1].footer[0]
    console.log(items)

    return (
        <div className='footer'>
            <div className='wrap-footer'>
                <ul className='footer-items'>
                    <li className='footer-list'>
                        <span id='footer-entitle'>{items.en_title}</span>
                    </li>
                    <li className='footer-list'>
                        <span id='footer-krtitle'>{items.kr_title}</span>
                    </li>
                    <li className='footer-list'>
                        <span>대표 : {items.name}</span>
                    </li>
                    <li className='footer-list'>
                        <span>주소 : {items.address}</span>
                    </li>
                    <li className='footer-list'>
                        <span>Tel: {items.tel} | e-mail : {items.email}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer