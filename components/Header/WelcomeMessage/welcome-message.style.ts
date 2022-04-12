import styled from "styled-components"

export const StyledWelcomeMessage = styled.div`
  svg {
    stroke: ${({ theme }) => theme.fontColor};
  }
  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`
