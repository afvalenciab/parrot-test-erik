import React, { useEffect } from "react"
import { StyledProductColumn } from "./product-column.styles"
import { ProductColumnProps } from "./product-column.interfaces"
const ProductColumn = ({ children, name, quantity }: ProductColumnProps) => {
  return (
    <StyledProductColumn>
      <div className='product-column--info'>
        <div>{name}</div>
        <div>({React.Children.toArray(children).length})</div>
      </div>
      <div className='product-column--products-list'>{children}</div>
    </StyledProductColumn>
  )
}

export default ProductColumn
