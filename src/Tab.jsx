import React from 'react'
import {NavLink} from 'react-router-dom'
import './Tab.css'
const Tab = () => {
  return (
    <div>
      
        <div className='tab-pages'>
<NavLink className="navlink" to="/">Top Recipes</NavLink>
<NavLink className="navlink" to="/favourate-Recipes"> favourate Recipes</NavLink>
</div>
      
    </div>
  )
}

export default Tab