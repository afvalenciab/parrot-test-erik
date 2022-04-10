import styled from "styled-components"

export const StyledLabel = styled.label`
  font-size: 0.9em;
  display: inline-block;
  vertical-align: middle;
  margin: 0.5em 0;

  & + input {
    display: block;
  }
`
