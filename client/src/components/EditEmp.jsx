import React from 'react'
import { useEffect} from 'react'
import { useEmp } from '../context/EmpContext'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Appcss.css'
import axios from 'axios'
// import EditList from './components/EditList.jsx'

function EditEmp({ singleEmp }) {
  const { deleteEmp, updateEmp ,addEmp} = useEmp()
  const [isEmpEditable, setIsEmpEditable] = useState(false)
  const [singleEmpName, setSingleEmpName] = useState(singleEmp.empName)
  const [singleEmpDepart, setSingleEmpDepart] = useState(singleEmp.empDepartment)

  // const addEmp = (emp) => {
  //   axios.get('http://localhost:8000/emp')
  //     .then(res => setempData(res.data))
  //     .catch(err => console.log(err))
  // }


  const  editEmp = async (id) => {
    //e.prevent.default();
   await axios.patch("http://localhost:8000/emp/" + id, { empName: singleEmpName, empDepartment: singleEmpDepart })
      .then((result) => console.log(result))
      .catch((err) => console.log(err))

    addEmp()
    setIsEmpEditable((prev) => !prev)
    // Navigate('/')

  }

  //  useEffect(() => {
  //   axios.get('http://localhost:8000/emp')
  //     .then(res => setempData(res.data))
  //     .catch(err => console.log(err))

      
  // },[])

  return (
    <>

      <div id='datadiv'>

        {


          <div key={singleEmp.id} className='editdiv'>
            <div>
              <input type='text'
                id='nameoutput'
                value={singleEmpName}
                onChange={(e) => setSingleEmpName(e.target.value)}
                readOnly={!isEmpEditable}
              />
            </div>
            <div>
              <select id="departments" name="departmentslist" value={singleEmpDepart} form="empDetails" onChange={(e) => setSingleEmpDepart(e.target.value)} disabled={!isEmpEditable}>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Engineering">Engineering</option>
              </select>
            </div>
            <div>

              <button onClick={() => {
                if (isEmpEditable) {
                  editEmp(singleEmp._id);
                  //setIsEmpEditable((prev) => !prev);
                }
                else setIsEmpEditable((prev) => !prev);
              }} id='btn'>
                {isEmpEditable ? "Save" : "Edit"}
              </button>
            </div>
            <div>
              <button onClick={() => deleteEmp(singleEmp._id)} id='btn'>
                Delete
              </button>
            </div>
          </div>

        }
      </div>
    </>
  )
}

export default EditEmp