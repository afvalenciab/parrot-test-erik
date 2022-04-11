import * as React from "react"
import { StyledWelcomeMessage } from "./welcome-message.style"

const ChefsHat = (props: any) => (
  <svg
    width={41}
    height={41}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M30.75 41h-20.5a.854.854 0 0 1-.852-.788l-1.65-21.467c-3.396-.394-6.04-3.287-6.04-6.787 0-3.774 3.142-6.962 6.86-6.962.778 0 1.541.151 2.252.444C12.02 2.143 15.75 0 20.5 0c4.462 0 7.583 1.804 9.515 5.51a5.918 5.918 0 0 1 2.416-.515c3.719.001 6.86 3.189 6.86 6.963 0 3.5-2.643 6.393-6.038 6.787l-1.651 21.467a.854.854 0 0 1-.852.788Zm-19.71-1.708h18.918l1.648-21.42a.856.856 0 0 1 .852-.789 5.13 5.13 0 0 0 5.125-5.125c0-3.096-2.715-5.254-5.152-5.254-.839 0-1.622.234-2.327.698a.853.853 0 0 1-1.25-.369C27.246 3.4 24.592 1.708 20.5 1.708c-4.405 0-7.738 2.063-8.294 5.133a.853.853 0 0 1-1.31.561 4.165 4.165 0 0 0-2.326-.698c-2.438 0-5.153 2.158-5.153 5.254a5.13 5.13 0 0 0 5.125 5.125c.445 0 .817.344.851.789l1.648 21.42Z'
      fill='#000'
    />
    <path
      d='M31.284 34.167H9.716a.854.854 0 1 1 0-1.709h21.568a.854.854 0 1 1 0 1.709Z'
      fill='#000'
    />
    <path
      d='M16.23 34.167a.854.854 0 0 1-.855-.855V26.48a.854.854 0 1 1 1.708 0v6.834a.854.854 0 0 1-.854.854ZM20.5 34.167a.854.854 0 0 1-.854-.855v-8.541a.854.854 0 1 1 1.708 0v8.541a.854.854 0 0 1-.854.855ZM24.77 34.167a.854.854 0 0 1-.854-.855V26.48a.854.854 0 1 1 1.709 0v6.834a.854.854 0 0 1-.854.854Z'
      fill='#000'
    />
  </svg>
)

const WelcomeMessage = ({ ...props }: any) => {
  return (
    <StyledWelcomeMessage>
      <span>¡Bienvenido a tu panel de administración!</span>
      <span>
        <ChefsHat />
      </span>
    </StyledWelcomeMessage>
  )
}

export default WelcomeMessage
