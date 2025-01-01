import React from 'react'
import { useTypeContext } from '../context/TypeContext';
function Navbar() {
  const {toggleNote, toggleTimeTable, toggleDiary } = useTypeContext();
  return (
    <nav className='flex border-b-2 py-2 sticky top-0 justify-start z-20 bg-white'>
        <button onClick={toggleNote} className='text-gray-400 ml-6 text-base hover:text-black'>Notes</button>
        <button onClick={toggleTimeTable} className='text-gray-400 ml-6 text-base hover:text-black'>TimeTables</button>
        <button onClick={toggleDiary} className='text-gray-400 ml-6 text-base hover:text-black'>Diary</button>
    </nav>
  )
}

export default Navbar
 