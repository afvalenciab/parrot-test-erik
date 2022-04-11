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
  const [categories, setCategories] = useState<any>()

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
      .then((res) => res.data.results)
      .catch((e) => e)
    console.log(products)
    setProducts(products)
    getCategories()
  }

  const getCategories = () => {
    let categories: string[] = []
    products.forEach((product: { category: { name: string } }) => {
      categories.push(product?.category.name)
    })
    categories = Array.from(new Set(categories))

    setCategories(categories)
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
            {categories?.map((category: string) => (
              <div className='store--categories-items'>
                <ProductColumn name={category} quantity={2}>
                  {products?.map(
                    (product: any) =>
                      product.category.name === category && (
                        <Product
                          image={product.imageUrl}
                          name={product.name}
                          description={product.description}
                          price={product.price}
                          available={
                            product.availability === "AVAILABLE" ? true : false
                          }
                        />
                      )
                  )}
                </ProductColumn>
              </div>
            ))}
          </div>
        </StyledStoreWrapper>
      </StoreBase>
    </>
  )
}

export default connect((state) => state, {})(Store)
