import * as React from "react"
import { StyledLoginBox } from "./login-box.styles"
import Input from "./Input/Input"
const LoginBox = React.forwardRef(({ ...props }) => {
  return (
    <StyledLoginBox>
      <div>
        <div>
          <Input type='text' />
        </div>
        <div>{/* Input here */}</div>
      </div>
      <div>
        <span>Olvidé mi contraseña</span>
      </div>
      <div>{/* Button here */}</div>
    </StyledLoginBox>
  )
})

export default LoginBox
