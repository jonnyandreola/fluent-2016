import {
	FETCH_REPOS,
	FETCH_REPOS_SUCCESS,
	FETCH_REPOS_ERROR,
	FETCH_TOKEN_SUCCESS
} from '../actions'

const initialState = {
  data: [],
  error: null,
  loading: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_REPOS : {
			return Object.assign({}, state, {
				loading: true
			})
		}
		case FETCH_REPOS_ERROR : {
			return Object.assign({}, state, {
				loading: false,
				error: action.error
			})
		}
		case FETCH_REPOS_SUCCESS: {
			return Object.assign({}, state, {
				loading: false,
				data: action.payload,
				error: null
			})
		}
	}
  
  return state
}
