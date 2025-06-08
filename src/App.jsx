import { useState } from 'react'
import './App.css'

function App() {

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = ()=>{
    showPopup===true? setShowPopup(false) : setShowPopup(true); 
  }

  return (
    <>
      
      <p className='text-2xl p-2 bg-blue-600 text-right text-white hover:text-black cursor-pointer' onClick={handleClick}>Login/Signup</p>
      {showPopup && (
        
          <div className='bg-amber-600/50 w-screen h-screen fixed top-0 left-0 flex justify-center items-center' onClick={handleClick}>

            <div className='bg-yellow-300 w-[300px] h-[300px] p-5 flex flex-col justify-between' onClick={(event)=>{event.stopPropagation()}}>
              <p>gdgsdhghgsh</p>
              <button className='bg-white py-2 px-3 cursor-pointer' onClick={handleClick}>close</button>

            </div>

          </div>
        
      )}

    </>
  )
}

export default App
