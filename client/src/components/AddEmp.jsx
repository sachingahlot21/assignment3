import React, { useState } from 'react'
import { useEmp } from '../context/EmpContext'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddEmp() {

  const [empName, setEmpName] = useState('')
  const [empDepart, setEmpDepart] = useState('Finance')
  const { addEmp, deleteEmp, updateEmp, empData } = useEmp()

  const navigate = useNavigate()

  const check = (e) => {
    e.preventDefault();
    console.log(empData)
  }

  const add = async (e) => {
    e.preventDefault();
    if (!empName) return alert("enter name")
    //addEmp({ empName, empDepart })

    await axios.post('http://localhost:8000/emp', { empName: empName, empDepartment: empDepart })
      .then((result) => console.log(result))
      .catch((err) => console.log(err))

    console.log(empData)
    setEmpName('')
    navigate("/")
    addEmp()
  }

  return (
    <div>
      <form onSubmit={add} id='empDetails'>
        Name:
        <input
          type='text'
          placeholder='enter name'
          onChange={(e) => setEmpName(e.target.value)}
          value={empName}
        />
        <label for="departments">Departments: </label>
        <select id='departments' name='departmentslist' form='empDetails' onChange={(e) => setEmpDepart(e.target.value)}>
          <option value="Finance">Finance</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
        </select>
        {/* <Link to={'/'} ><button onClick={add} id='btn'>ADD EMPLOYEE</button></Link> */}
        <button onClick={add} id='btn'>ADD EMPLOYEE</button>
        {/* <Link to={'/'} ><button onSubmit={add} id='btn'>ADD EMPLOYEE</button></Link> */}
      </form>
      <button onClick={check}>check</button>
    </div>
  )
}

export default AddEmp