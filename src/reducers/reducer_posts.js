import _ from 'lodash'

// import { FETCH_POSTS, CREATE_POST } from '../actions'
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload)
    case FETCH_POST:
      // take all existing posts we have out of the state object
      // and put them into this new object that we're returning
      // also add a new key/val pair with the id of the fetched post,
      // and the post itself
      // es5:
      // const post = action.payload.data
      // const newState = { ...state }
      // newState[post.id] = post
      // return newState
      // es6:
      return {
        // existing state
        ...state,
        // make a new key value pair, add it to state
        [action.payload.data.id]: action.payload.data
      }
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
    default:
      return state
  }
}
