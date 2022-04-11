import { applyMiddleware, createStore, Middleware, Store } from "redux"
import { createWrapper, MakeStore, Context } from "next-redux-wrapper"
import reducers from "../reducers"
import thunkMiddleware from "redux-thunk"

const bindMiddleware = (middleware: Middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension")
    return composeWithDevTools(applyMiddleware(middleware))
  } else {
    return applyMiddleware(middleware)
  }
}

const makeStore: MakeStore<Store> = (_context: Context) =>
  createStore(reducers, bindMiddleware(thunkMiddleware))

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === "development",
})

export default wrapper
