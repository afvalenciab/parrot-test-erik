import React from "react"
import StoreBase from "../templates/store.base"
import StoreName from "../components/StoreName/StoreName"
import { StyledStoreWrapper } from "../styles/store/store.styles"
import ProductColumn from "../components/ProductColumn/ProductColumn"
import Product from "../components/Product/Product"

const Store = () => {
  return (
    <>
      <StoreBase>
        <StyledStoreWrapper>
          <div className='store--name'>
            <StoreName>Dayri Queen</StoreName>
          </div>
          <div className='store--categories-wrapper'>
            <div className='store--categories-items'>
              <ProductColumn name='Promociones' quantity={2}>
                <Product
                  image='https://images.pexels.com/photos/1848973/pexels-photo-1848973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  name='Galleta de chocolate'
                  description='Esta es la descripción de la galleta, tiene muchas chispas, 120 gramos es el total de la misma.'
                  price={10}
                  available={true}
                />
                <Product
                  image='https://images.pexels.com/photos/1848973/pexels-photo-1848973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  name='Galleta de chocolate'
                  description='Esta es la descripción de la galleta, tiene muchas chispas, 120 gramos es el total de la misma.'
                  price={10}
                  available={true}
                />
                <Product
                  image='https://images.pexels.com/photos/1848973/pexels-photo-1848973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  name='Galleta de chocolate'
                  description='Esta es la descripción de la galleta, tiene muchas chispas, 120 gramos es el total de la misma.'
                  price={10}
                  available={true}
                />
              </ProductColumn>
            </div>
            <div className='store--categories-items'>
              <ProductColumn name='Combos' quantity={3}>
                <Product
                  image='https://images.pexels.com/photos/1848973/pexels-photo-1848973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  name='Galleta de chocolate'
                  description='Esta es la descripción de la galleta, tiene muchas chispas, 120 gramos es el total de la misma.'
                  price={10}
                  available={true}
                />
                <Product
                  image='https://images.pexels.com/photos/1848973/pexels-photo-1848973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  name='Galleta de chocolate'
                  description='Esta es la descripción de la galleta, tiene muchas chispas, 120 gramos es el total de la misma.'
                  price={10}
                  available={true}
                />
                <Product
                  image='https://images.pexels.com/photos/1848973/pexels-photo-1848973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  name='Galleta de chocolate'
                  description='Esta es la descripción de la galleta, tiene muchas chispas, 120 gramos es el total de la misma.'
                  price={10}
                  available={true}
                />
                <Product
                  image='https://images.pexels.com/photos/1848973/pexels-photo-1848973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  name='Galleta de chocolate'
                  description='Esta es la descripción de la galleta, tiene muchas chispas, 120 gramos es el total de la misma.'
                  price={10}
                  available={true}
                />
                <Product
                  image='https://images.pexels.com/photos/1848973/pexels-photo-1848973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  name='Galleta de chocolate'
                  description='Esta es la descripción de la galleta, tiene muchas chispas, 120 gramos es el total de la misma.'
                  price={10}
                  available={true}
                />
              </ProductColumn>
            </div>
            <div className='store--categories-items'>
              <ProductColumn name='Comida' quantity={5}>
                <Product
                  image='https://images.pexels.com/photos/1848973/pexels-photo-1848973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  name='Galleta de chocolate'
                  description='Esta es la descripción de la galleta, tiene muchas chispas, 120 gramos es el total de la misma.'
                  price={10}
                  available={true}
                />
                <Product
                  image='https://images.pexels.com/photos/1848973/pexels-photo-1848973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  name='Galleta de chocolate'
                  description='Esta es la descripción de la galleta, tiene muchas chispas, 120 gramos es el total de la misma.'
                  price={10}
                  available={true}
                />
                <Product
                  image='https://images.pexels.com/photos/1848973/pexels-photo-1848973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  name='Galleta de chocolate'
                  description='Esta es la descripción de la galleta, tiene muchas chispas, 120 gramos es el total de la misma.'
                  price={10}
                  available={true}
                />
                <Product
                  image='https://images.pexels.com/photos/1848973/pexels-photo-1848973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  name='Galleta de chocolate'
                  description='Esta es la descripción de la galleta, tiene muchas chispas, 120 gramos es el total de la misma.'
                  price={10}
                  available={true}
                />
                <Product
                  image='https://images.pexels.com/photos/1848973/pexels-photo-1848973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  name='Galleta de chocolate'
                  description='Esta es la descripción de la galleta, tiene muchas chispas, 120 gramos es el total de la misma.'
                  price={10}
                  available={true}
                />
                <Product
                  image='https://images.pexels.com/photos/1848973/pexels-photo-1848973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  name='Galleta de chocolate'
                  description='Esta es la descripción de la galleta, tiene muchas chispas, 120 gramos es el total de la misma.'
                  price={10}
                  available={true}
                />
              </ProductColumn>
            </div>
          </div>
        </StyledStoreWrapper>
      </StoreBase>
    </>
  )
}

export default Store
