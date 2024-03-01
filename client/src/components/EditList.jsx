import React, { useContext } from 'react'
import EditEmp from './EditEmp'
import { useEmp } from '../context/EmpContext'
function EditList() {
    const{empData} = useEmp()
    return (
        <div>   
            <div id='datadiv'>
            <div id='dataheading'>Employees Details:</div>
            {
                empData.map((singleEmp) => (
                    <div key={singleEmp.id}>
                        <EditEmp singleEmp={singleEmp} />
                    </div>
                ))
            }
        </div>
        </div>
       
  )
}

export default EditList