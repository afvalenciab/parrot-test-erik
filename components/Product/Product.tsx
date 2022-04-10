import React from "react"
import { StyledProduct } from "./product.styles"
import { ProductProps } from "./product.interfaces"
const Product = ({
  image,
  name,
  description,
  price,
  available,
}: ProductProps) => {
  return (
    <StyledProduct>
      <div className='product--image-wrapper'>
        <img src={image} alt='Imagen del producto' />
      </div>
      <div className='product--info'>
        <div className='product--name'>
          <div>{name}</div>
          <div></div>
        </div>
        <div className='product--description'>{description}</div>
        <div className='product--price'>${price} MXN</div>
        <div className='product--cta'>
          <button>Ver mas</button>
        </div>
      </div>
    </StyledProduct>
  )
}

export default Product
