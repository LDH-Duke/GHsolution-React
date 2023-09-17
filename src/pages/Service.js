import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import data from '../data'
import './style/Service.css'
import ServicePost from '../components/ServicePost'
import ServiceEdu from '../components/ServiceEdu'
import ServiceResearch from '../components/ServiceResearch'
import Footer from '../components/Footer'


function Service(props) {
    const tabs = data[4].nav

    const show = props.show
    const setView = props.setView



    // const serviceitem = () => {
    //     console.log('여까지')
    //     console.log(show)
    //     if (parseInt(show) === 0) {
    //         console.log('에듀')
    //         return <Route path='/service/edu' element={<ServiceEdu />} />
    //     } else if (show === 1) {
    //         return <Route path='/service/research' element={<ServiceResearch />} />
    //     }
    //     else if (show == 3) {
    //         return 0
    //     }
    //     else {
    //         return 0
    //     }
    // }


    return (
        <div className='service'>
            <ServicePost tabs={tabs} show={show} setView={setView} />
            <Routes>
                <Route path='/edu' element={<ServiceEdu />} exact />
                <Route path='/research' element={<ServiceResearch />} exact />
            </Routes>

            <Footer />
        </div>
    )
}

export default Service