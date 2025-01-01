import React from 'react'
import plus from '../../../assets/images/plus.png';
function HomeDirections({className,buttonName,buttonValue,clickHandler}) {
  return (
    <div className={className}>
      <button className={buttonName} onClick={clickHandler}><img className = 'w-[20px]' src={plus} alt="" />{buttonValue}</button>
    </div>
  )
}
 
export default HomeDirections
