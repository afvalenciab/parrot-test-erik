import styled from "styled-components"

export const StyledLoginBox = styled.div`
  width: 90%;
  max-width: 33.125em;
  background: #fff;
  padding: 2.5em;
  border-radius: 12px;
  margin: 0 auto;
  margin-top: 2.2em;
  .login-box--field-wrapper {
    margin: 0.7em 0;
  }
  label {
    font-weight: 500;
  }
  .login-box--forgot-password {
    span {
      font-size: 0.9em;
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
      color: #526092;
    }
  }
`
