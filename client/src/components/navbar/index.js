import { React, useEffect } from 'react'
import { link } from 'react-router-dom'
import API from '../../utils/fakeStoreApi'

const Navbar = () => {
  useEffect(() => {
    API.getAllCategories();
    
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Navbar
