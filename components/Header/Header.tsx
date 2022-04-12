import React from "react"
import { StyledHeaderWrapper } from "./header.styles"
import { brandColors } from "../../styles/colors"
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage"
import Logo from "../Logo/Logo"
import SunIcon from "./SunIcon/SunIcon"
import MoonIcon from "./MoonIcon/MoonIcon"
import Logout from "./Logout/Logout"
import { HeaderProps } from "./Header.interfaces"
const Header = ({ currentTheme, handleTheme, ...props }: HeaderProps) => {
  return (
    <StyledHeaderWrapper {...props}>
      <div className='header--interior-wrapper'>
        <div className='header--logo'>
          <Logo fillBG={brandColors.main} />
        </div>
        <div className='header--interactions-wrapper'>
          <WelcomeMessage />
          <Logout />
        </div>
      </div>

      {/* TODO: Move this into a new component */}
      <div
        className='header--theme-switch'
        onClick={() => handleTheme(currentTheme === "light" ? "dark" : "light")}
      >
        <div>
          <SunIcon />
        </div>
        <div className='header--theme-switch--wrapper'>
          <div className='header--theme-switch--tracker'></div>
        </div>
        <div>
          <MoonIcon />
        </div>
      </div>
    </StyledHeaderWrapper>
  )
}

export default Header
