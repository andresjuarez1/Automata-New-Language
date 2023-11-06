import React from 'react'
import visualIcon from '../assets/visual-icon.png'

const Header = () => { 
  return (
    <div className='bg-red-500'>
      <img src={visualIcon} alt="Visual Studio Icon" className='h-6 w-6'/>  
    </div>
  )
}

export default Header