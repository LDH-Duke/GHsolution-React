import React, { useState } from 'react'
import './style/ServiceEdu.css'
import EduEnterprise from './EduEnterprise'
import EduStudents from './EduStudents'
import EduNav from './EduNav'

function ServiceEdu() {
    const [show, setShow] = useState(0);

    const setView = (idx) => {
        setShow(idx)
    }

    return (
        <div id='edu'>
            <EduNav setView={setView} show={show} />
            {
                show == 0 ? <EduEnterprise /> : <EduStudents />
            }
        </div>
    )
}

export default ServiceEdu