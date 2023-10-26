import React from 'react'
import data from '../data'
import './style/Contact.css'

function Contact() {
    const datas = data[1].footer[0]
    console.log(datas)

    return (
        <div id='contact'>
            <div className='wrap-contact'>
                <div className='contact-title'>
                    {/* <span>Contact</span> */}
                </div>
                <div className='contact-item'>
                    <div className='con-name'>
                        <sapn>(주)구현솔루션</sapn>
                    </div>
                    <ul>
                        <li>Address : {datas.address}</li>
                        <li>Tel : {datas.tel}</li>
                        <li>e-mail : {datas.email}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact