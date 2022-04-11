import session from "./session/session"
import { AnyAction, combineReducers, Reducer } from "redux"
import { HYDRATE } from "next-redux-wrapper"

const combinedReducer = combineReducers({
  session,
})

const reducers: Reducer = (state, action: any) => {
  return combinedReducer(state, action)
}

export default reducers
