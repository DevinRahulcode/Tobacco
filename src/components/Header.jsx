import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faGlobe } from '@fortawesome/free-solid-svg-icons'
import './css/header.css'


function Header() {
  return (
   <div className='main-div'>
     <div className='header-main'>
      <div className='left-con'>
        <FontAwesomeIcon icon={faBars} />
        <h5>Menu</h5>
      </div>
      <div className='middle-con'><h1>Tobacco</h1></div>
      <div className='right-con'>En <FontAwesomeIcon icon={faGlobe} /></div>
    </div>
   </div>
  )
}

export default Header
