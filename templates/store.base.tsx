import React, { useEffect } from "react"
import { GlobalStyles } from "../styles/global"
import { ThemeProvider } from "styled-components"
import { LightMode, DarkMode } from "../styles/theme"
import Header from "../components/Header/Header"
import { BaseWrapper } from "./store.base.styles"
import useStorage from "../utils/hooks/useStorage"
import { SessionProps } from "../actions/session/session.interfaces"
import { storeSession } from "../actions/session/session"
import { connect, useDispatch } from "react-redux"
import { useRouter } from "next/router"

const StoreBase = ({ children }: any) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { getItem } = useStorage()

  const getUserSession = () => {
    const sessionData =
      getItem("userData", "session") &&
      JSON.parse(getItem("userData", "session"))

    if (sessionData) {
      const session: SessionProps = {
        access: sessionData.access,
        refresh: sessionData.refresh,
      }
      dispatch(storeSession(session))
    } else {
      router.push("/login")
    }
  }

  useEffect(() => {
    getUserSession()
  }, [])

  return (
    <>
      <ThemeProvider theme={LightMode}>
        <GlobalStyles />
        <Header />
        <BaseWrapper>{children}</BaseWrapper>
      </ThemeProvider>
    </>
  )
}

export default connect((state) => state, { storeSession })(StoreBase)
