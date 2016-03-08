import { FETCH_USER_SUCCESS } from '../actions'
const initialState = {
  user: ''
}

export default (state = initialState, action) => {
  if (action.type !== FETCH_USER_SUCCESS) {
    return state
  }

  return Object.assign({}, state, {name: action.payload.name})
}
