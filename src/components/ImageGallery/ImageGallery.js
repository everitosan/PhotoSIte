import React, {Component} from 'react'
import './ImageGallery.css'


class ImageGallery extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }

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
