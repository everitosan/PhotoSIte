import React, {Component} from 'react'
import './ImageGallery.css'


class ImageGallery extends Component {
  render () {
    const imageStyle = {
      backgroundImage: 'url("'+ this.props.src + '")'
    }
    return (
      <div className="ImageGallery" style={imageStyle} >
        
      </div>
    )
  }
}

export default ImageGallery