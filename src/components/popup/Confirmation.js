import React from 'react'
import { useEffect } from "react";
import { useRef } from "react";

function Confirmation(props) {

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(props.confirmationPopup === true && !menuRef.current.contains(e.target)){
        props.setConfirmationPopup(false);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }
  });


    return (props.confirmationPopup) ? (
        <div className="popup-confirmation">
          <div className="popup-confirmation-inner" ref={menuRef}>
            <h3><i>All done!</i></h3>
            <hr className="hr-small"></hr>
            <h4>You will be one of the first to experience Broccoli & Co. when we launch.</h4>
            <button className="button-ok" onClick={() => props.setConfirmationPopup(false)}>OK</button>
          </div>
        </div>
      ) : "";
}

export default Confirmation