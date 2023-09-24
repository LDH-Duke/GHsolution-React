import React, { useState } from 'react'
import HomePost from '../components/HomePost'
import HomeIntro from '../components/HomeIntro'
import HomeIntroSVC from '../components/HomeIntroSVC'
import Footer from '../components/Footer'
import Side from '../components/Side'
import './style/Home.css'
import data from '../data'

function Home(props) {

    const datas = data[6].componentData[0].sections
    console.log(datas)

    return (
        <div className='home'>
            <Side data={datas} />
            <HomePost />
            <HomeIntro />
            <HomeIntroSVC setView={props.setView}/>
            <Footer />
        </div>
    )
}

export default Home