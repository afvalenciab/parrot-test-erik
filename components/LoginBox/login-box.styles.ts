import styled from "styled-components"

export const StyledLoginBox = styled.div`
  width: 90%;
  max-width: 33.125em;
  background: #fff;
  padding: 3.5em 2.5em;
  border-radius: 12px;
  margin: 0 auto;
  margin-top: 2.2em;
  box-shadow: -3px 4px 7px 0px #6c6c6c;

  .login-box--field-wrapper {
    margin: 0.7em 0;
  }
  label {
    font-weight: 500;
  }
  .login-box--forgot-password {
    margin-top: 1em;
    span {
      font-size: 0.9em;
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
      color: #526092;
    }
  }
  .login-box--submit {
    margin-top: 2em;
  }
`
