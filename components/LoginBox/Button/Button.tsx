import * as React from "react"
import { StyledButton } from "./button.styles"
import { ButtonProps } from "./button.interfaces"
const Input = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ buttonType, onClickAction, ...props }, ref): JSX.Element => (
    <StyledButton
      type={buttonType}
      onClick={() => onClickAction}
      ref={ref}
      {...props}
    />
  )
)

export default Input
