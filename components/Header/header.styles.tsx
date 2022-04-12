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
    width: 85%;
    right: 0;
    left: 0;
    max-width: 1400px;
    align-items: center;
    padding-top: 1.8em;
    color: ${({ theme }) => theme.fontColor};
  }
  span {
    font-weight: 500;
  }
  .header--theme-switch {
    position: absolute;
    right: -180px;
    display: flex;
    align-items: center;
  }
  .header--theme-switch--wrapper {
    min-width: 75px;
    border: 2px solid #000;
    padding: 3px 8px;
    border-radius: 50px;
    margin: 0 10px;
    cursor: pointer;
  }
  .header--theme-switch--tracker {
    width: 15px;
    height: 15px;
    background: #000;
    border-radius: 100%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    .header--interior-wrapper {
      width: 90%;
    }
  }
`
