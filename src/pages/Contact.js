import React from 'react'
import data from '../data'


function Contact() {
    const datas = data[1].footer

    return (
        <div id='contact'>
            <div className='wrap-contact'>
                <div className='contact-title'>
                    <span>Contact</span>
                </div>
                <div className='contact-item'>
                    <div className='con-name'>
                        <sapn>GuHyun</sapn>
                    </div>
                    <ul>
                        <li>{datas.address}</li>
                        <li>{datas.tel}</li>
                        <li>{datas.email}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact