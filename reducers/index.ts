import session from "./session/session"
import { AnyAction, combineReducers, Reducer } from "redux"
import { HYDRATE } from "next-redux-wrapper"

const combinedReducer = combineReducers({
  session,
})

const reducers: Reducer = (state, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  } else {
    return combinedReducer(state, action)
  }
}

export default reducers
