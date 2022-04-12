import React, { useEffect, useState } from "react"
import StoreBase from "../templates/store.base"
import StoreName from "../components/StoreName/StoreName"
import { StyledStoreWrapper } from "../styles/store/store.styles"
import ProductColumn from "../components/ProductColumn/ProductColumn"
import Product from "../components/Product/Product"
import { connect } from "react-redux"
import { fetchFromAPI, putToAPI } from "../requests/fetch"
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

interface Product {
  key: string
  imageUrl: string
  name: string
  description: string
  price: string
  availability: string
  uuid: string
  category: { name: string }
}

const Store = ({ session }: StoreProps) => {
  const { access: token } = session
  const [storeInfo, setStoreInfo] = useState<StoreInfo>()
  const [products, setProducts] = useState<any>()
  const [categories, setCategories] = useState<any>()
  const [closedColumns, setClosedColumns] = useState<string[]>([])

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
    setProducts(products)
    getCategories(products)
  }

  const getCategories = (products: any) => {
    let categories: string[] = []
    products?.forEach((product: { category: { name: string } }) => {
      categories.push(product?.category.name)
    })
    categories = Array.from(new Set(categories))

    setCategories(categories)
  }

  const handleProductAvailabilitiy = async (
    productId: string,
    currentAvailability: string
  ) => {
    const newAvailability =
      currentAvailability === "AVAILABLE" ? "UNAVAILABLE" : "AVAILABLE"

    await putToAPI(token, `/api/v1/products/${productId}/availability`, {
      availability: newAvailability,
    })
      .then((res) => {
        getProducts(storeInfo?.uuid as string)
      })
      .catch((e) => e)
  }

  const closedColumnsHandler = (id: string) => {
    const closedCoumnsClone = [...closedColumns]

    const alreadyClosed = closedColumns.includes(id)
    if (!alreadyClosed) {
      closedCoumnsClone.push(id)
    }
    if (alreadyClosed) {
      const index = closedCoumnsClone.indexOf(id)
      closedCoumnsClone.splice(index, 1)
    }

    setClosedColumns(closedCoumnsClone)
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
            {categories?.map((category: string, columnIndex: number) => (
              <div key={category} className='store--categories-items'>
                <ProductColumn
                  name={category}
                  onCloseColumn={() => closedColumnsHandler(category as string)}
                >
                  {products?.map(
                    (product: Product) =>
                      product.category.name === category && (
                        <div
                          key={product.uuid}
                          className={
                            closedColumns.includes(category)
                              ? "closed-column"
                              : ""
                          }
                        >
                          <Product
                            onChangeAvailability={() =>
                              handleProductAvailabilitiy(
                                product.uuid,
                                product.availability
                              )
                            }
                            image={product.imageUrl}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            available={
                              product.availability === "AVAILABLE"
                                ? true
                                : false
                            }
                          />
                        </div>
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
