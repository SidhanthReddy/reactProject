import React from 'react'
import Navbar from '../Navbar'
import { useLoginContext} from '../../context/LoginContext';
import user from '../../assets/images/user.png';
import { useNavigate } from 'react-router-dom';
import Modal from './HomeSubComponents/Modal';
function NoteShow() {
  const navigate = useNavigate();
const userIconButton = () => {
  console.log("loggedIn");
  return(
    <button className='mr-5 w-[28px]'><img src={user} alt="" /></button>
  )
}
const userLoginButton = () =>{
  return(
    <button className="mr-5" onClick={()=>document.getElementById('my_modal_2').showModal()}>Login</button>
  )
}
const {email} = useLoginContext();
return (
  <>
        <div className='font-inter py-2 mt-5 ml-6 mb-2 font-bold flex font-bold justify-between '>
            <button  className='text-4xl' onClick={()=>navigate('/')}>Noter.</button>
            {email ? userIconButton() : userLoginButton()}
        </div>
        <Navbar />
      <div className='m-6'>
        <p>note</p>
      </div>
      <Modal />
    </>
  )
}

export default NoteShow
