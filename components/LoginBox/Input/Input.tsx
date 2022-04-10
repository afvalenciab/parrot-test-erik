import * as React from "react"
import { StyledInput } from "./input.styles"
import { InputProps } from "./input.interfaces"
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { fieldType, fieldName, fieldPlaceholder, fieldOnChange, ...props },
    ref
  ): JSX.Element => (
    <StyledInput
      type={fieldType}
      name={fieldName}
      placeholder={fieldPlaceholder}
      onChange={() => fieldOnChange}
      ref={ref}
      {...props}
    />
  )
)

Input.displayName = "Input"

export default Input
