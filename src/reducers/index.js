import { combineReducers } from 'redux'
import route from './route'
import me from './me'
import repos from './repos'

export default combineReducers({
  route,
  me,
  repos
})
