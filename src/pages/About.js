import React from 'react'
import AboutPost from '../components/AboutPost'
import AboutIntro from '../components/AboutIntro'
import AboutMember from '../components/AboutMember'
import Aboutpanel from '../components/Aboutpanel'
import Footer from '../components/Footer'
import Side from '../components/Side'
import data from '../data'
import './style/About.css'

function About() {
    const datas = data[6].componentData[1].sections
    return (
        <div className='about'>
            <Side data={datas} />
            <AboutPost />
            <AboutIntro />
            <AboutMember />
            <Aboutpanel />
            <Footer />
        </div>
    )
}

export default About