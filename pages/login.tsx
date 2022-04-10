import React from "react"
import { GlobalStyles } from "../styles/global"
import { StyledLoginWrapper } from "../styles/login/login.styles"
import Logo from "../components/Logo/Logo"
import LoginBox from "../components/LoginBox/LoginBox"
const Login = () => {
  return (
    <>
      <GlobalStyles />
      <StyledLoginWrapper>
        <div className='login--logo-wrapper'>
          <Logo fillBG='#ffffff' />
        </div>
        <div className='login--login-box-wrapper'>
          <LoginBox />
        </div>
      </StyledLoginWrapper>
    </>
  )
}

export default Login
