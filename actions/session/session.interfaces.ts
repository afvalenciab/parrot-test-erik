export const SESSION_STORE = "SESSION_STORE"
export const SESSION_DESTROY = "SESSION_DESTROY"

export interface SessionActionsProps {
  type: "SESSION_STORE" | "SESSION_DESTROY"
  payload: SessionProps
}

export interface SessionProps {
  access: string | undefined
  refresh: string | undefined
}
