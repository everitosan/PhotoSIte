import React, {Component} from 'react'
import './social.css'

class Social extends Component {
  render () {
    return (
      <div className="Social">
        <a target="_blank" rel="noreferrer noopener" href="https://unsplash.com/@everitosan">
          <span className="icon-photo-camera"></span>
        </a>
        <a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/evesanpics/">
          <span className="icon-facebook"></span>
        </a>
        <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/everitosan/">
          <span className="icon-instagram"></span>
        </a>
      </div>
    )
  }
}

export default Social