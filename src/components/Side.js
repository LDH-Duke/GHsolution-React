import React, { useEffect, useRef, useState } from 'react'
import './style/Side.css'
import { Link } from 'react-scroll'

function Side(props) {
    const [sc, setSc] = useState(0);

    const datas = props.data;
    console.log(datas)

    // const sc = window.addEventListener('scroll', (e) => {
    //     return window.scrollY
    // })


    useEffect(() => {
        const handleScroll = () => {
            setSc(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const moveScorll = (tab) => {

        if (tab == 'main') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        else if (tab == 'introduction') {
            window.scrollTo({ top: 964, behavior: 'smooth' })
        } else if (tab == 'service') {
            window.scrollTo({ top: 1928, behavior: 'smooth' })
        }

    }

    const active1 = sc < 643 ? 'selected' : '';
    const active2 = sc >= 643 && sc < 1607 ? 'selected' : '';
    const active3 = sc >= 1607 ? 'selected' : '';

    return (
        <div id='side'>
            <div className='wrap-side'>
                <ul>
                    {
                        Object.keys(datas).map((sidetab) => {
                            return (
                                <li id={sidetab.toLowerCase()} onClick={() => { moveScorll(sidetab.toLowerCase()) }}>
                                    <i className={'dot' + active1}></i>
                                    <p>{sidetab}</p>
                                </li>
                            )
                        })
                    }

                    <li id='main' onClick={() => { moveScorll('main') }} >
                        <i className={'dot ' + active1}></i>
                        <p>Main</p>
                    </li>
                    <li id='introduction' onClick={() => { moveScorll('introduction') }} >
                        <i className={'dot ' + active2}></i>
                        <p>Introdution</p>
                    </li>
                    <li id='service' onClick={() => { moveScorll('service') }}>
                        <i className={'dot ' + active3}></i>
                        <p>Service</p>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Side