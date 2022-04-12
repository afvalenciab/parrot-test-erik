import * as React from "react"
import { StyledHeaderWrapper } from "./header.styles"
import { brandColors } from "../../styles/colors"
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage"
import Logo from "../Logo/Logo"
import SunIcon from "./SunIcon/SunIcon"
import MoonIcon from "./MoonIcon/MoonIcon"
const Header = ({ ...props }) => {
  return (
    <StyledHeaderWrapper {...props}>
      <div className='header--interior-wrapper'>
        <div className='header--logo'>
          <Logo fillBG={brandColors.main} />
        </div>
        <WelcomeMessage />
        <div className='header--theme-switch'>
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
      </div>
    </StyledHeaderWrapper>
  )
}

export default Header
