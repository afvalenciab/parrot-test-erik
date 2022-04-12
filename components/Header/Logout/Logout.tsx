import * as React from "react"
import { StyledLogout } from "./logout.styles"
import useStorage from "../../../utils/hooks/useStorage"
import { SessionProps } from "../../../actions/session/session.interfaces"
import { storeSession } from "../../../actions/session/session"
import { connect, useDispatch } from "react-redux"
import { useRouter } from "next/router"

const Logout = ({ ...props }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { removeItem } = useStorage()
  const logout = () => {
    const session: SessionProps = {
      access: undefined,
      refresh: undefined,
    }
    dispatch(storeSession(session))
    removeItem("userData")
    router.push("/login")
  }

  return (
    <>
      <StyledLogout {...props}>
        <button onClick={logout}>Cerrar sesión</button>
      </StyledLogout>
    </>
  )
}
export default connect((state) => state, { storeSession })(Logout)
