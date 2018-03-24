import React, {Component} from 'react'
import './Gallery.css'
import ImageGallery from '../ImageGallery/ImageGallery'

class Gallery extends Component {
  state = {
    translate: 0,
    index: 0,
    photoSection: 0,
    photos: [{
      id: 0,
      src: 'https://images.unsplash.com/photo-1520104473919-d5901328c2b0?ixlib=rb-0.3.5&s=f497ca0e0a2efbb323503d36f1f6f46b&auto=format&fit=crop&w=600&q=60'
    }, {
      id: 1,
      src: 'https://images.unsplash.com/photo-1509306645072-357e1100d227?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2acdebc7c75587421fcc467173b32601&auto=format&fit=crop&w=1100&q=60'
    }, {
      id: 2,
      src: 'https://images.unsplash.com/photo-1520189954102-4fc772317bc5?ixlib=rb-0.3.5&s=642ef81f4e7983d0d90d9b2e00ddbff3&auto=format&fit=crop&w=1100&q=60'
    }, {
      id: 3,
      src: 'https://images.unsplash.com/photo-1520118033049-6aae70b11539?ixlib=rb-0.3.5&s=b141ca6cd953bf6c6491fe5882346dca&auto=format&fit=crop&w=1100&q=60'
    }]
  }

  goNext = (event) => {
    if(this.state.index === this.state.photos.length - 1) return false
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
              this.state.photos.map(photo => {
                return <ImageGallery {...photo} key={photo.id} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery