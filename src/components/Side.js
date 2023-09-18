import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

function Side() {
    const SideDiv = styled.div`
    color:black;
    position:fixed;
    top:50%;
    right:90px;
    div>a>i {
        display:inline-block;
        width:6px;
        height:6px;
        background:black;
    }
    `
    return (
        <SideDiv>
            <div className='wrap-side'>
                <Link to='main'>
                    <i className='dot'></i>
                    <p>Main</p>
                </Link>
                <Link to='intro'>
                    <i className='dot'></i>
                    <p>Introdution</p>
                </Link>
                <Link to='service'>
                    <i className='dot'></i>
                    <p>Service</p>
                </Link>

            </div>
        </SideDiv>
    )
}

export default Side