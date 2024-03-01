import React from 'react'
import {NavLink} from 'react-router-dom'
function Home() {


  return (
    <div>
        <div>
            <ul>
                <li>
                   <NavLink to={'/'} >EMPLOYEES LIST</NavLink>
                </li>
                <li>
                <NavLink to={'/addemp'} >ADD EMPLOYEE</NavLink>
                </li>
                <li>
                <NavLink to={'/editemp'} >EDIT EMPLOYEE</NavLink>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Home