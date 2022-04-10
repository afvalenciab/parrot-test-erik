import styled from "styled-components"
import { brandColors } from "../colors"

export const StyledLoginWrapper = styled.section`
  min-height: 100vh;
  background: ${brandColors.main};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  .login--logo-wrapper {
    width: 80%;
    max-width: 250px;
  }
  .login--login-box-wrapper {
    width: 100%;
  }
`
