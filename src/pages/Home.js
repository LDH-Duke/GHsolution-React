import React, { useState } from 'react'
import HomePost from '../components/HomePost'
import HomeIntro from '../components/HomeIntro'
import HomeIntroSVC from '../components/HomeIntroSVC'
import Footer from '../components/Footer'
import Side from '../components/Side'
import './style/Home.css'

function Home() {
    // const [height, setHeight] = useState(window.scrollY)

    // window.addEventListener('wheel', (event) => {
    //     setHeight(window.scrollY)
    //     console.log(height)
    //     if (height < 964) {
    //         if (event.deltaY > 0) {
    //             window.scrollTo({ top: 964, behavior: 'smooth' })
    //         }
    //     } else if (height >= 964 && height < 1928) {
    //         console.log('현재위치:' + height)
    //         if (event.deltaY > 0) {
    //             window.scrollTo({ top: 1927, behavior: 'smooth' })
    //         } else if (event.deltaY < 0) {
    //             console.log('동작')
    //             window.scrollTo({ top: 0, behavior: 'smooth' })
    //         }
    //     }
    // })



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