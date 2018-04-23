import {SET_PICTURES} from '../Action-Types'


export function setPictures(photosList) {
  return {
    type: SET_PICTURES,
    payload: photosList
  }
}
