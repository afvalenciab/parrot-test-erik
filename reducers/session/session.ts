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
  switch (action.type) {
    case SESSION_STORE:
      return {
        ...state,
        access: action.payload.access,
        refresh: action.payload.refresh,
      }
    case SESSION_DESTROY:
      return {
        ...state,
        access: null,
        refresh: null,
      }
    default:
      return state
  }
}
