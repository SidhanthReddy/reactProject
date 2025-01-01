import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import { useTypeContext } from '../context/TypeContext'
import user from '../assets/images/user.png'
import { useLoginContext } from '../context/LoginContext'
function HomePage() {
  const {home,toggleHome} = useTypeContext();
  const {email} = useLoginContext();
  if(home === true){
    document.body.style.overflow = 'hidden';
    console.log("hidden");
  }
  else{
    console.log("visible");
    document.body.style.overflow = 'auto';
  }
  
  return (
    <div className='font-inter overflow-y-none'>
        <MainContent />
    </div>
  )
}

export default HomePage
 