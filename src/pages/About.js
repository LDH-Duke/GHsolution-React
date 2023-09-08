import React from 'react'
import AboutPost from '../components/AboutPost'
import AboutIntro from '../components/AboutIntro'
import AboutMember from '../components/AboutMember'
import Aboutpanel from '../components/Aboutpanel'
import Footer from '../components/Footer'
import './style/About.css'

function About() {
    return (
        <div className='about'>
            <AboutPost />
            <AboutIntro />
            <AboutMember />
            <Aboutpanel />
            <Footer />
        </div>
    )
}

export default About