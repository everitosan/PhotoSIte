import {SET_PICTURES} from '../Action-Types'

export default function GalleryPictures (state = {}, action) {
  switch(action.type) {
    case SET_PICTURES:
      return action.payload
    default:
      return state
  }
}
