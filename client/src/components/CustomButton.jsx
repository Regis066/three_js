import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
const CustomButton = ({type,title,customStyles, handleClick}) => {

  const snap = useSnapshot(state)

  const generateStyles = (type) => {
    if(type === 'filled'){
      return {
        backgroundColor: snap.color,
        color: '#fff',

      }

  }
  }
  return (
    <button 
     className={`px-2 py-1.5 rounded-md ${customStyles}`} 
     style={generateStyles(type)}
     onClick={handleClick}
     >
      CustomButton
      {console.log(snap.intro)}
    </button>
  )
}

export default CustomButton