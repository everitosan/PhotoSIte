import React from 'react'
import { Link } from 'react-router-dom'
import './Modal.css'

function Modal (props) {
  return (
    <div className={"ModalContainer " + (props.hide? 'hide': 'show') }>
      <div className="ModalBody" >
        <Link to="/"> <div className="closeModal">  </div> </Link>
        <div className="modalContent">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal