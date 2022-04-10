import React from "react"
import { StyledLabel } from "./label.styles"
import { LabelProps } from "./label.interface"

const Label = ({ children }: LabelProps): JSX.Element => {
  return <StyledLabel>{children}</StyledLabel>
}

Label.displayName = "Label"

export default Label
