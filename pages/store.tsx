import React, { useEffect, useState } from "react"
import StoreBase from "../templates/store.base"
import StoreName from "../components/StoreName/StoreName"
import { StyledStoreWrapper } from "../styles/store/store.styles"
import ProductColumn from "../components/ProductColumn/ProductColumn"
import Product from "../components/Product/Product"
import { connect } from "react-redux"
import { fetchFromAPI } from "../requests/fetch"
interface StoreProps {
  session: {
    access: string
    refresh: string
  }
}

interface StoreInfo {
  availabilityState: string
  config: {}
  name: string
  uuid: string
}

const Store = ({ session }: StoreProps) => {
  const { access: token } = session
  const [storeInfo, setStoreInfo] = useState<StoreInfo>()
  const [products, setProducts] = useState<any>()

  const getStoreInfo = async () => {
    const storeInfo = await fetchFromAPI(token, `/api/v1/users/me`)
      .then((res) => {
        const storeId: string = res.data?.result?.stores[0].uuid
        getProducts(storeId)
        return res.data?.result?.stores
      })
      .catch((e) => e)

    setStoreInfo(storeInfo?.length > 0 ? storeInfo[0] : undefined)
  }

  const getProducts = async (storeId: string) => {
    const products = await fetchFromAPI(
      token,
      `/api/v1/products/?store=${storeId}`
    )
      .then((res) => res.data)
      .catch((e) => e)

    console.log(products)
    setProducts(products)
  }

  useEffect(() => {
    const hasToken = token !== undefined
    if (hasToken) {
      getStoreInfo()
    }
  }, [token])
  return (
    <>
      <StoreBase>
        <StyledStoreWrapper>
          <div className='store--name'>
            <StoreName>{storeInfo && storeInfo.name}</StoreName>
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

export default connect((state) => state, {})(Store)
