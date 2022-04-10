import styled from "styled-components"
import { brandColors } from "../../styles/colors"
export const StyledProduct = styled.div`
  display: flex;
  margin-bottom: 3.125em;
  .product--image-wrapper {
    img {
      width: 3.125em;
      height: 3.125em;
      object-fit: cover;
      object-position: bottom;
      border-radius: 100px;
    }
  }
  .product--info {
    margin-left: 1.25em;
  }
  .product--name {
    margin-bottom: 0.5em;
    div {
      &:nth-child(1) {
        font-weight: bold;
      }
    }
  }
  .product--description {
    font-size: 0.95em;
    line-height: 23px;
    margin-bottom: 0.6em;
  }

  .product--cta {
    button {
      background: none;
      border: 0;
      outline: 0;
      color: ${brandColors.main};
      text-decoration: underline;
      margin-top: 0.7em;
      cursor: pointer;
    }
  }
`
