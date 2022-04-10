import {
  SESSION_DESTROY,
  SESSION_STORE,
  SessionActionsProps,
  SessionProps,
} from "./session.interfaces"

export const storeSession = (data: SessionProps): SessionActionsProps => {
  return {
    type: SESSION_STORE,
    payload: data,
  }
}

export const destroySession = () => {
  return {
    type: SESSION_DESTROY,
  }
}
