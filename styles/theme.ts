import { Theme } from "./theme.interfaces"
import { brandColors } from "./colors"

export const LightMode: Theme = {
  name: "LightMode",
  fontFamily: "Roboto",
  fontColor: "#333",
  backgroundColor: "#fff",
  mainColor: brandColors.main,
  breakpoints: {
    mobile: 369,
    tablet: 768,
    desktop: 960,
  },
}

export const DarkMode: Theme = {
  name: "DarkMode",
  fontFamily: "Roboto",
  fontColor: "#fff",
  backgroundColor: "#333",
  mainColor: brandColors.main,
  breakpoints: {
    mobile: 369,
    tablet: 768,
    desktop: 960,
  },
}
