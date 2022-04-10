import styled from "styled-components"

export const StyledHeaderWrapper = styled.section`
  .header--logo {
    width: 120px;
  }
  .header--interior-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    position: sticky;
    width: 100%;
    right: 0;
    left: 0;
    max-width: 1400px;
    align-items: center;
    padding-top: 1.8em;
  }
  span {
    font-weight: 500;
  }
`
