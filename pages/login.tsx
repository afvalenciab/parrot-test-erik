import React, { useEffect } from "react"
import { GlobalStyles } from "../styles/global"
import { StyledLoginWrapper } from "../styles/login/login.styles"
import Logo from "../components/Logo/Logo"
import LoginBox from "../components/LoginBox/LoginBox"
import useStorage from "../utils/hooks/useStorage"
import { useRouter } from "next/router"

const Login = () => {
  const router = useRouter()
  const { getItem: getItemStorage } = useStorage()

  const getUserSession = () => {
    const sessionData =
      getItemStorage("userData", "session") &&
      JSON.parse(getItemStorage("userData", "session"))
    if (sessionData) {
      router.push("/store")
    }
  }

  useEffect(() => {
    getUserSession()
  }, [])
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
