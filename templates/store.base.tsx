import React from "react"
import { GlobalStyles } from "../styles/global"
import { ThemeProvider } from "styled-components"
import { LightMode, DarkMode } from "../styles/theme"
import Header from "../components/Header/Header"
import { BaseWrapper } from "./store.base.styles"
const StoreBase = ({ children }: any) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={LightMode}>
        <Header />
        <BaseWrapper>{children}</BaseWrapper>
      </ThemeProvider>
    </>
  )
}

export default StoreBase
