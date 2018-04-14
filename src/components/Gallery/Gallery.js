import React, {PureComponent} from 'react'
import './Gallery.css'
import ImageGallery from '../ImageGallery/ImageGallery'
import {connect} from 'react-redux'

class Gallery extends PureComponent {
  state = {
    translate: 0,
    index: 0
  }

  componentWillReceiveProps () {
    this.setState({
      translate: 0,
      index: 0
    })
  }

  goNext = (event) => {
    if(this.state.index === this.props.photos.length - 1) return false
    const newIndex = this.state.index + 1
    const newTranslate = newIndex * window.innerWidth * (-1)
    this.setState({
      translate: newTranslate,
      index: newIndex
    });
  }

  goPrev = (event) => {
    if(this.state.index === 0) return false
    const newIndex = this.state.index - 1
    const newTranslate = newIndex * window.innerWidth * (-1)
    this.setState({
      translate: newTranslate,
      index: newIndex
    });
  }

  render() {
    return (
      <div className="Gallery">
        <span className="icon-right-arrow slider-ctrl" id="right-ctrl" onClick={this.goNext}> </span>
        <span className="icon-left-arrow slider-ctrl" id="left-ctrl" onClick={this.goPrev}> </span>
        <div className="slider" style={{'transform' :'translate3d('+ this.state.translate +'px, 0, 0)' }} >
          <div className="items">
            {
              this.props.photos.map(photo => {
                return <ImageGallery {...photo} key={photo.id} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    photos: state.GalleryPictures
  }
}

export default connect(mapStateToProps)(Gallery)
