import React from 'react'
import { Link } from 'react-router-dom'
import './Modal.css'

function Modal (props) {
  return (
    <div className={"ModalContainer " + (props.hide? 'hide': 'show') }>
      <div className="ModalBody" >
        <div className="background" >
          <div className="bg1 bg" ></div>
          <div className="bg2 bg" ></div>

          <div className="bg3 bg" ></div>
          <div className="bg4 bg" ></div>

          <div className="bg5 bg" ></div>
          <div className="bg6 bg" ></div>

          <div className="bg7 bg" ></div>
          <div className="bg8 bg" ></div>

        </div>
        <Link to="/"> <div className="closeModal">  </div> </Link>
        <div className="modalContent">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal
