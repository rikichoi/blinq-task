import React from 'react'
import Request from '../popup/Request'
import { useState } from 'react'
import Confirmation from '../popup/Confirmation';

function Signup() {
  const [requestPopup, setRequestPopup] = useState(false);
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  return (
    <div className="signup">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
    <link href="https://fonts.googleapis.com/css2?family=Trispace:wght@300;400;500&display=swap" rel="stylesheet"/>
    <div className="contents">
      <h1>
        A better way <br /> to enjoy every day.
      </h1>
      <h2>Be the first to know when we launch.</h2>
      <button className='request-button' onClick={() => setRequestPopup(true)}>Request an invite</button>
      <Request requestPopup={requestPopup} setRequestPopup={setRequestPopup} confirmationPopup={confirmationPopup} setConfirmationPopup={setConfirmationPopup}>
      </Request>
      <Confirmation confirmationPopup={confirmationPopup} setConfirmationPopup={setConfirmationPopup}>
      </Confirmation>
    </div>
  </div>
  )
}

export default Signup