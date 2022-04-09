import React from "react"
import { GlobalStyles } from "../styles/global"
import { StyledLoginWrapper } from "../styles/login/login.styles"
import Logo from "../components/Logo/Logo"
const Login = () => {
  return (
    <>
      <GlobalStyles />
      <StyledLoginWrapper>
        <div className='login--logo-wrapper'>
          <Logo fill='#ffffff' />
        </div>
      </StyledLoginWrapper>
    </>
  )
}

export default Login
