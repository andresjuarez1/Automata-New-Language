import React from 'react'
import visualIcon from '../assets/visual-icon.png'
import PuntosIcon from '../assets/puntos-icon.svg'

const Header = () => { 
  return (
    <div className='bg-[#252525] py-2 px-3 flex items-center'>
      <img src={visualIcon} alt="Visual Studio Icon" className='h-5 w-5 mr-3'/>
      <div className='flex text-[#CCCCCC] text-xs items-center gap-4 font-normal'>
        <h2>File</h2>
        <h2>Edit</h2>
        <h2>Selection</h2>
        <h2>View</h2>
        <h2>Go</h2>
        <h2>Run</h2>
        <img src={PuntosIcon} alt="Puntos Icon" />
      </div>
    </div>
  )
}

export default Header