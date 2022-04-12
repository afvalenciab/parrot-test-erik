import * as React from "react"
import { StyledMoonIcon } from "./moon-icon.styles"

const MoonIcon = ({ ...props }) => (
  <StyledMoonIcon
    xmlSpace='preserve'
    xmlns='http://www.w3.org/2000/svg'
    enableBackground='new 0 0 16 16'
    viewBox='0 0 16 16'
    {...props}
  >
    <path d='M8 16a7.947 7.947 0 0 0 3.5-.815C8.838 13.886 7 11.161 7 8S8.838 2.114 11.5.815A7.947 7.947 0 0 0 8 0a8 8 0 0 0 0 16zM14 3a2 2 0 0 1-2 2 2 2 0 0 1 2 2 2 2 0 0 1 2-2 2 2 0 0 1-2-2z' />
    <path d='M10 6a2 2 0 0 1-2 2 2 2 0 0 1 2 2 2 2 0 0 1 2-2 2 2 0 0 1-2-2zM13 13a2 2 0 0 1 2-2 2 2 0 0 1-2-2 2 2 0 0 1-2 2 2 2 0 0 1 2 2z' />
  </StyledMoonIcon>
)

export default MoonIcon
