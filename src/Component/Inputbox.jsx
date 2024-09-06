import React from 'react'
import '../Style/Inputbox.css'


function Inputbox() {
  return (
    <div>
      <div className='divBoxParent'>
        <div className='first_child_div'>
          <div className='continer_div'>
          <div className='child_div_1'>
                <h4 className='h1_phone'>Enter phone number</h4>
            </div>

            <div className='child_div_2'>
              <p className='main_p'>Enter your phone number to recive a<br/> passcode for authentiction</p>
              <input className='main_input'></input>
            </div>
            
            <div className='button_div'>
              <p className='p_button'>By Continuing, you May receive an SMS for<br/> Verification. Message and the data rates may apply </p>
              <button className='main_button'>Continue</button>
            </div>

          </div>

            
        </div>
    


      </div>
    </div>
  )
}

export default Inputbox
