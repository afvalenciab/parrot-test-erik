import React, { useState, useEffect } from "react"
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
  const { getItem: getItemStorage, setItem: setItemStorage } = useStorage()
  const [theme, setTheme] = useState<string>("light")
  const getUserSession = () => {
    const sessionData =
      getItemStorage("userData", "session") &&
      JSON.parse(getItemStorage("userData", "session"))

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

  const handleTheme = (theme: string) => {
    console.log(theme, " theme")
    setItemStorage("theme", theme)
    setTheme(theme)
  }

  const getTheme = () => {
    const savedTheme = getItemStorage("theme")
    const hasSavedTheme = savedTheme !== null
    if (hasSavedTheme) setTheme(savedTheme)
  }

  useEffect(() => {
    getUserSession()
    getTheme()
  }, [])

  return (
    <>
      <ThemeProvider theme={theme === "light" ? LightMode : DarkMode}>
        <GlobalStyles />
        <Header currentTheme={theme} handleTheme={handleTheme} />
        <BaseWrapper>{children}</BaseWrapper>
      </ThemeProvider>
    </>
  )
}

export default connect((state) => state, { storeSession })(StoreBase)
