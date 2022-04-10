import * as React from "react"
import { StyledHeaderWrapper } from "./header.styles"
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage"
import Logo from "../Logo/Logo"
import { brandColors } from "../../styles/colors"
const Header = ({ ...props }) => {
  return (
    <StyledHeaderWrapper {...props}>
      <div className='header--interior-wrapper'>
        <div className='header--logo'>
          <Logo fillBG={brandColors.main} />
        </div>
        <WelcomeMessage />
      </div>
    </StyledHeaderWrapper>
  )
}

export default Header
