import React from "react"

export interface ProductProps {
  image: string
  name: string
  description: string
  price: string | number
  available: boolean
  onChangeAvailability: () => void
}
