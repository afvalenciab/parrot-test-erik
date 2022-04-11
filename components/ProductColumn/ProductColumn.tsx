import React from "react"
import { StyledProductColumn } from "./product-column.styles"
import { ProductColumnProps } from "./product-column.interfaces"
const ProductColumn = ({ children, name, quantity }: ProductColumnProps) => {
  console.log(React.Children)

  const getQuantity = () => {
    React.Children.forEach(children, (child) => {
      console.log(children?.valueOf())
    })
  }

  return (
    <StyledProductColumn>
      <div className='product-column--info'>
        <div>{name}</div>
        <div>({})</div>
      </div>
      <div className='product-column--products-list'>{children}</div>
    </StyledProductColumn>
  )
}

export default ProductColumn
