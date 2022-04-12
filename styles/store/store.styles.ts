import styled from "styled-components"

export const StyledStoreWrapper = styled.div`
  .store--name {
    margin-top: 8em;
  }
  .store--categories-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .store--categories-items {
    width: 33%;
    margin-top: 5.125em;
  }

  .closed-column {
    display: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    .store--categories-items {
      width: 45%;
      margin-right: 5%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    .store--categories-items {
      width: 100%;
    }
  }
`
