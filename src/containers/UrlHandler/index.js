import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import GalleryPhotos from '../../mock.js'
import {setPictures} from '../../Actions'

class UrlHandler extends Component {
  constructor (props){
    super(props)

    this.path = 'travel'
    this.props.history.listen(this.onRouteChange)
    this.onRouteChange(this.props.location)
  }

  onRouteChange = (location) => {
    if (location.pathname === "/") {
      this.setPictures(this.path)
      return true
    }

    const lastSplitPath = location.pathname.split("/")
    const lastPath = lastSplitPath[lastSplitPath.length -1]

    if( lastPath === 'travel' ||
        lastPath === 'food' ||
        lastPath === 'portrait') {
          this.path = lastPath
          this.setPictures(this.path)
        }
    else {
      this.setPictures(this.path)
    }
  }

  setPictures (category) {
    this.props.dispatch(setPictures(GalleryPhotos[category]))
  }

  render () {
    return this.props.children
  }
}

export default withRouter(connect()(UrlHandler))
