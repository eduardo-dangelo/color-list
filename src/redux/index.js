import { combineReducers } from 'redux'
import { reducer as colorList } from './ColorReducer'


const rootReducer = combineReducers({
  colorList,
})

export default rootReducer
