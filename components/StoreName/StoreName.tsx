import React from "react"
import { StyledStoreName } from "./store-name.styles"
const StoreName = ({ children }: any) => {
  return (
    <StyledStoreName>
      <h3 className='stored-name--title'>{children}</h3>
    </StyledStoreName>
  )
}

export default StoreName
