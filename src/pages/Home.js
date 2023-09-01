import React from 'react'
import HomePost from '../components/HomePost'
import HomeIntro from '../components/HomeIntro'
import HomeIntroSVC from '../components/HomeIntroSVC'
import './style/Home.css'

function Home() {
    return (
        <div className='home'>
            <HomePost />
            <HomeIntro />
            <HomeIntroSVC />
        </div>
    )
}

export default Home