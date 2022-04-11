import {
  SESSION_DESTROY,
  SESSION_STORE,
  SessionActionsProps,
  SessionProps,
} from "../../actions/session/session.interfaces"

const sessionInitialState: SessionProps = {
  access: undefined,
  refresh: undefined,
}

export default function sessionData(
  state: SessionProps = sessionInitialState,
  action: SessionActionsProps
) {
  console.log(action.type, " Was called")
  switch (action.type) {
    case SESSION_STORE:
      console.log(SESSION_STORE, " SESSION_STORE")
      return {
        ...state,
        access: action.payload.access,
        refresh: action.payload.refresh,
      }
    case SESSION_DESTROY:
      console.log(SESSION_STORE, " destroy")
      return {
        ...state,
        access: null,
        refresh: null,
      }
    default:
      return state
  }
}
