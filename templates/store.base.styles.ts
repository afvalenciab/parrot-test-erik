import styled from "styled-components"

export const BaseWrapper = styled.section`
  max-width: 87.5em;
  margin: 0 auto;
  margin-top: 3.125em;
  width: 85%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    & {
      width: 90%;
    }
  }
`
