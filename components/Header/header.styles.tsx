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
    position: relative;
    display: flex;
    align-items: center;
    fill: ${({ theme }) => theme.fontColor};
    max-width: 1400px;
    margin: 0 auto;
    margin-top: 2em;
    justify-content: end;
    width: 85%;
  }
  .header--theme-switch--wrapper {
    min-width: 75px;
    border: 2px solid ${({ theme }) => theme.fontColor};
    padding: 3px 8px;
    border-radius: 50px;
    margin: 0 10px;
    cursor: pointer;
    position: relative;
    min-height: 24px;
  }
  .header--theme-switch--tracker {
    width: 15px;
    height: 15px;
    background: ${({ theme }) => theme.fontColor};
    border-radius: 100%;
    left: ${({ theme }) => (theme.name === "LightMode" ? "5px" : "51px")};
    position: absolute;
    transition left .4s ease;
  }

  .header--interactions-wrapper {
    display: flex;
    align-items: baseline;
    min-width: 470px;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    .header--interactions-wrapper {
      justify-content: end;
      min-width: auto;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    .header--interior-wrapper, .header--theme-switch{
      width: 90%;
    }
  }
`
