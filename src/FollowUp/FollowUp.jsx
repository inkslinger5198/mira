import React from 'react'
import './FollowUp.css'
import bgimg from './../assets/pexels-steve.jpg'
const FollowUp = () => {
  return (
    <div>
      <div className="initial-details-page follow-up">
      <div className="initial-details-container">
        <h2 className='font-extrabold text-3xl'>MIRA</h2>
        <div className="initial-details-form-container">
          <div className='initial-details-input'>
            <input type="text" id="nickname" placeholder='' required className=''></input>
            <label for="nickname">NickName</label>
          </div>
          <div className="initial-details-input">
          <input type="text" id="age" placeholder='' required className=''></input>
          <label for="age">Age</label>
          </div>
          <div className='initial-details-input'>
            <input type="text" id='height' placeholder='' required className=''></input>
            <label for='height'>Height</label>
          </div>
          <div className='initial-details-input'>
            <input type="text" id='weight' placeholder='' required className=''></input>
            <label for='weight'>Weight</label>
          </div>
        </div>
        <div className='initial-details-input'>
          <textarea className='resize-none' id='medical-history' placeholder=''></textarea>
          <label for='medical-history'>Medical History</label>
        </div>
        <button className='initial-details-sub-btn'>Continue</button>
      </div>
    </div>
    </div>
  )
}

export default FollowUp
