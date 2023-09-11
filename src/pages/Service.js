import React, { useState } from 'react'
import data from '../data'
import './style/Service.css'
import ServicePost from '../components/ServicePost'
import ServiceEdu from '../components/ServiceEdu'
import ServiceResearch from '../components/ServiceResearch'
import Footer from '../components/Footer'

function Service() {
    const tabs = data[4].nav

    const [show, setShow] = useState(0)

    const serviceitem = () => {
        if (show == 0) {
            console.log('여기옴')
            return <ServiceEdu />
        } else if (show == 1) {
            return <ServiceResearch />
        }
    }
    const shows = (idx) => {
        console.log(idx)
        setShow(idx)
    }

    return (
        <div className='service'>
            <ServicePost tabs={tabs} shows={shows} />
            {
                serviceitem()
            }
            <Footer />
        </div>
    )
}

export default Service