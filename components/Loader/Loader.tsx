import React from "react"
import { StyledLoader } from "./loader.styles"

const Loader = () => {
  return (
    <StyledLoader>
      <img src='/images/loader.gif' alt='Cargando...' />
    </StyledLoader>
  )
}

export default Loader
