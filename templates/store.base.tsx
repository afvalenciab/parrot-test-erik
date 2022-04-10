import React from "react"
import { GlobalStyles } from "../styles/global"
import { ThemeProvider } from "styled-components"
import { LightMode, DarkMode } from "../styles/theme"
import Header from "../components/Header/Header"
const StoreBase = ({ children }: any) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={LightMode}>
        <Header />
        {children}
      </ThemeProvider>
    </>
  )
}

export default StoreBase
