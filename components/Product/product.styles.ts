import styled from "styled-components"
import { brandColors } from "../../styles/colors"
export const StyledProduct = styled.div`
  display: flex;
  margin-bottom: 3.125em;
  background: #fff;
  border-radius: 41px;
  padding: 1.5em 1.5em;
  margin-right: 1.5em;
  line-height: 1.7em;

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
    display: flex;
    align-items: center;
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
  .product--availability {
    background: ${brandColors.main};
    font-size: 0.75em;
    max-width: 6em;
    color: #fff;
    padding: 0em 0.1em;
    text-align: center;
    border-radius: 6px;
    width: 100%;
    margin-left: 1.5em;
    align-items: center;
  }
`
