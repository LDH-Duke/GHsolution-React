import React from 'react'
import HomePost from '../components/HomePost'
import HomeIntro from '../components/HomeIntro'
import HomeIntroSVC from '../components/HomeIntroSVC'
import Footer from '../components/Footer'
import Side from '../components/Side'
import './style/Home.css'

function Home() {
    return (
        <div className='home'>
            <Side />
            <HomePost />
            <HomeIntro />
            <HomeIntroSVC />
            <Footer />
        </div>
    )
}

export default Home