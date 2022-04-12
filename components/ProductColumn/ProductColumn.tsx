import React, { forwardRef, useEffect } from "react"
import { StyledProductColumn } from "./product-column.styles"
import { ProductColumnProps } from "./product-column.interfaces"
const ProductColumn = forwardRef<HTMLDivElement, ProductColumnProps>(
  ({ children, name, onCloseColumn, ...props }, ref) => {
    return (
      <StyledProductColumn ref={ref} {...props}>
        <div className='product-column--info' onClick={() => onCloseColumn()}>
          <div>{name}</div>
          <div>({React.Children.toArray(children).length})</div>
        </div>
        <div className='product-column--products-list'>{children}</div>
      </StyledProductColumn>
    )
  }
)

export default ProductColumn
