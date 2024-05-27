import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import EmpList from './components/EmpList.jsx'
import AddEmp from './components/AddEmp.jsx'
import EditEmp from './components/EditEmp.jsx'
import { EmpProvider } from './context/EmpContext.js'
import EditList from './components/EditList.jsx'
import axios from 'axios'

function App() {

  const [empData, setempData] = useState([])
  const [fdata, setfdata] = useState([])

  const addEmp = (emp) => {
    axios.get('http://localhost:8000/emp')
      .then(res => setempData(res.data))
      .catch(err => console.log(err))
  }

  const deleteEmp = async (id) => {
    // const resourceid = id ;
    alert(id)
    await axios.delete('http://localhost:8000/emp/' + id)
      .then(result => console.log(result))
      .catch(err => console.log(err))
    addEmp()
  }

  const updateEmp = () => {

  }

  // const updateEmp = (id, emp) => {
  //   setempData((prev) => prev.map((prevEmp) => (
  //     prevEmp.id === id ? emp : prevEmp
  //   )))
  //   console.log(emp)
  // }


  useEffect(() => {
    axios.get('http://localhost:8000/emp')
      .then(res => setempData(res.data))
      .catch(err => console.log(err))

    console.log(fdata)
  }, [])


  // useEffect(() => {
  //   const empData = JSON.parse(localStorage.getItem("employessDetails"))
  //   if (empData && empData.length > 0) {
  //     setempData(empData)
  //   }
  // }, [])
  // useEffect(() => {
  //   localStorage.setItem("employessDetails", JSON.stringify(empData))
  // }, [empData])

  const navrouter = createBrowserRouter([

    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <EmpList />
        },
        {
          path: 'addemp',
          element: <AddEmp />
        },
        {
          path: 'editemp',
          element: <EditList />
        },
        {
          element: <EditEmp />
        }
      ]
    }
  ])

  return (

    <EmpProvider value={{ empData, addEmp, deleteEmp, updateEmp }} >
      <RouterProvider router={navrouter} />
    </EmpProvider>


  )
}

export default App

