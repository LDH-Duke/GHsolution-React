import React, { useEffect, useRef, useState } from 'react'
import './style/Side.css'
import { Link } from 'react-scroll'

function Side(props) {
    const [sc, setSc] = useState(0);

    const datas = props.data;

    useEffect(() => {
        const handleScroll = () => {
            setSc(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const testScroll = (idx) => {
        const arrTab = Object.entries(datas)
        let i = 0
        let sumHeight = 0

        const frontComHeight = 0
        if (idx - 1 < 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            while (i < idx) {
                sumHeight += arrTab[i][1]
                i++
            }
            window.scrollTo({ top: sumHeight + 1, behavior: 'smooth' })
        }

    }

    const selected = (idx) => {
        const arrTab = Object.entries(datas)
        let allHeight = 0
        let i = 0
        let startH = 0

        arrTab.forEach((h) => {
            allHeight += h[1]
        })

        if (idx - 1 < 0) {
            return sc < (arrTab[idx][1] * 2 / 3) + 1 ? 'selected' : ''
        } else {
            while (i < idx) {
                startH += arrTab[i][1]
                i++
            }
            return sc > startH - (arrTab[idx - 1][1] * 1 / 3) && sc < (startH) + (arrTab[idx][1] * 2 / 3) ? 'selected' : ''
        }
    }

    const selectedV = (idx) => selected(idx)

    return (
        <div id='side'>
            <div className='wrap-side'>
                <ul>
                    {
                        Object.keys(datas).map((sidetab, idx) => {
                            return (
                                <li id={sidetab.toLowerCase()} onClick={() => { testScroll(idx) }}>
                                    <i className={'dot ' + (selectedV(idx))}></i>
                                    <p>{sidetab}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div >
    )
}

export default Side