import styled from "styled-components"
import { brandColors } from "../../styles/colors"
export const StyledStoreName = styled.div`
  h3 {
    font-size: 2em;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.fontColor};
    &::after {
      content: "";
      width: 85%;
      height: 1px;
      background: ${brandColors.main};
    }
  }
`
