import React from 'react';
import HomeDirections from './HomeSubComponents/HomeDirections';
import backgroundImage from '../../assets/images/backg2.png'
import { useNavigate } from 'react-router-dom';
function HomeShow() {
  const navigate = useNavigate();
  const handleNoteClick = () => {
    navigate('/notes');
    console.log('Note button clicked');
  };

  const handleTimeTableClick = () => {
    navigate('/timetable');
    console.log('Time Table button clicked');
  }; 

  const handleDiaryClick = () => {
    navigate('/diary');
    console.log('Diary button clicked');
  };
  return (
    <div  className = 'mt-0 bg-cover'style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className='ml-6 mr-6 grid grid-cols-12 grid-rows-12 gap-2 h-[800px]' >
      <div className='col-start-1 col-end-8 z-10 row-start-1 row-end-4 flex justify-center'>
        <p className='text-14xl mt-20'>Noter.</p>
      </div>
      <div className='col-start-1 col-end-8 z-10 row-start-5 row-end-6 flex justify-center'>
        <p className=' mt-20 text-xl'>A simplistic , easy-to-use document web application</p>
      </div>

      <div className='col-start-8 col-end-12 z-10 row-start-1 row-end-6 flex justify-center'>
      </div>
      <div className='col-start-1 col-end-12 z-10 h-[250px] row-start-8 mt-0 mb-[50px]  grid grid-cols-12 grid-rows-3'>
      <HomeDirections 
          className='col-start-2 row-start-1 sm:col-span-12 sm:col-start-2 sm:row-start-1 md:col-start-2 md:row-start-auto md:col-span-4 lg:col-span-3 lg:col-start-2 lg:row-start-auto'   
          buttonName='flex items-center justify-start gap-5 text-xl w-full px-5 py-3 border-2 rounded-xl text-gray-500 hover:text-gray-700'
          buttonValue="Start writing a Note"
          clickHandler={handleNoteClick}
        />

        {/* Second button */}
        <HomeDirections 
          className='col-start-6 row-start-1 sm:col-span-12 sm:col-start-2 sm:row-start-2  md:col-start-6 md:row-start-auto md:col-span-4 lg:col-span-3 lg:col-start-6 lg:row-start-auto'  
          buttonName='flex items-center justify-start gap-5 text-xl w-full px-5 py-3 border-2 rounded-xl text-gray-500 hover:text-gray-700'
          buttonValue="Prepare Time-Tables"
          clickHandler={handleTimeTableClick}
        />

        {/* Third button */}
        <HomeDirections 
          className='col-start-10 row-start-1 sm:col-span-12 sm:col-start-2 sm:row-start-3 md:col-start-10 md:row-start-auto md:col-span-4 lg:col-span-3 lg:col-start-10 lg:row-start-auto'  
          buttonName='flex items-center justify-start gap-5 text-xl w-full px-5 py-3 border-2 rounded-xl text-gray-500 hover:text-gray-700'
          buttonValue="Start writing a diary"
          clickHandler={handleDiaryClick}
        />
        </div>
    </div>
    </div>

  )
}

export default HomeShow
