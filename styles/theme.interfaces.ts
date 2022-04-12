export interface Theme {
  name: string
  fontFamily: string
  fontColor: string
  backgroundColor: string
  mainColor: string
  breakpoints: {
    mobile: number
    tablet: number
  }
}
