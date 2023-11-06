import React from 'react'
import visualIcon from '../assets/visual-icon.png'

const Header = () => { 
  return (
    <div className='bg-[#252525] py-2 px-3'>
      <img src={visualIcon} alt="Visual Studio Icon" className='h-5 w-5'/>  
    </div>
  )
}

export default Header