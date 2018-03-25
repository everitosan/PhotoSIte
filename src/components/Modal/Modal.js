import React from 'react'
import './Modal.css'

function Modal (props) {
  return (
    <div className={"ModalContainer " + (props.hide? 'hide': 'show') }>
      <div className="ModalBody" >
        <div className="closeModal">  </div>
        <div className="modalContent">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal