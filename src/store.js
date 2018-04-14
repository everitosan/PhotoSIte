import {createStore} from 'redux'
import Reducers from './Reducers'

const initialState = {
  GalleryPictures: {}
}

const store = createStore(
  Reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
