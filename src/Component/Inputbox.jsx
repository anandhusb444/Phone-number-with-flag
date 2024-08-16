import React from 'react'
import '../Style/Inputbox.css'


function Inputbox() {
  return (
    <div>
      <div className='divBoxParent'>
        <div className='first_child_div'>

            <div className='child_div_1'>
                <h4 className='h1_phone'>Enter Phone number</h4>
            </div>

            <div className='child_div_2'>
              <p className='main_p'>Enter your phone number to recive a passcode for authentiction</p>
              <input className='main_input'></input>
            </div>
            
            <div className='button_div'>
              <button className='main_button'>Continue</button>
            </div>
        </div>
    


      </div>
    </div>
  )
}

export default Inputbox
