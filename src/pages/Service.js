import React, { useState } from 'react'
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
    console.log(show)


    const serviceitem = () => {
        if (show == 0) {
            return <ServiceEdu />
        } else if (show == 1) {
            return <ServiceResearch />
        }
        else if (show == 3) {
            return 0
        }
        else {
            return 0
        }
    }


    return (
        <div className='service'>
            <ServicePost tabs={tabs} show={show} setView={setView} />
            {
                serviceitem()
            }
            <Footer />
        </div>
    )
}

export default Service