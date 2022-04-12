import styled from "styled-components"

export const StyledProductColumn = styled.div`
  .product-column--info {
    font-weight: bold;
    display: flex;
    div {
      font-size: 1.1em;
      color: ${({ theme }) => theme.fontColor};
    }
  }
  .product-column--products-list {
    margin-top: 3.425em;
  }
`
