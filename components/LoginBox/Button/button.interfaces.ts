import React from "react"

export interface ButtonProps {
  buttonType?: "button" | "submit" | "reset"
  onClickAction?: () => void
  children: React.ReactNode
}
