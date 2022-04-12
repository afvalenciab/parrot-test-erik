import React, { forwardRef } from "react"
import { StyledProduct } from "./product.styles"
import { ProductProps } from "./product.interfaces"
const Product = forwardRef<HTMLDivElement, ProductProps>(
  (
    {
      image,
      name,
      description,
      price,
      available,
      onChangeAvailability,
      ...props
    },
    ref
  ) => {
    return (
      <StyledProduct ref={ref} {...props}>
        <div className='product--image-wrapper'>
          <img src={image} alt='Imagen del producto' />
        </div>
        <div className='product--info'>
          <div className='product--name'>
            <div>{name}</div>
            {available === false && (
              <div className='product--availability'>Agotado</div>
            )}
          </div>
          <div className='product--description'>{description}</div>
          <div className='product--price'>${price} MXN</div>
          <div className='product--cta'>
            <button onClick={onChangeAvailability}>
              {available ? <span>¡Ya no hay!</span> : <span>¡Hay!</span>}
            </button>
          </div>
        </div>
      </StyledProduct>
    )
  }
)

export default Product
