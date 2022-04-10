import * as React from "react"
import { StyledButton } from "./button.styles"
import { ButtonProps } from "./button.interfaces"
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ buttonType, onClickAction, children, ...props }, ref): JSX.Element => (
    <StyledButton
      type={buttonType}
      onClick={() => onClickAction}
      ref={ref}
      {...props}
    >
      {children}
    </StyledButton>
  )
)

Button.displayName = "Input"
export default Button
