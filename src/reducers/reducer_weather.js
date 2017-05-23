import { FETCH_WEATHER } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:

      // create new array rather than mutating state
      return [ action.payload.data, ...state ];
  }
  return state;
}
