import React from "react"

export interface ProductColumnProps {
  name: string
  children: React.ReactNode
  onCloseColumn: () => void
}
