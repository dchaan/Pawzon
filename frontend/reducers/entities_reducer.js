import { combineReducers } from 'redux'
import { usersReducer } from 'react'

const entitiesReducer = combineReducers({
  users: usersReducer
})

export default entitiesReducer