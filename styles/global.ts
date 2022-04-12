import { createGlobalStyle } from "styled-components"
import { GlobalVariables } from "./global.interfaces"
import { Theme } from "./theme.interfaces"
/* GLOBAL VARIABLES */
export const GlobalSettingsVariables: GlobalVariables = {
  fontFamily: "Roboto",
  fontSize: "16px",
  marginSize: 0,
  paddingSize: 0,
  boxSizing: "border-box",
}

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: ${GlobalSettingsVariables.fontSize};
  }

  body {
    background: ${({ theme }: { theme: { backgroundColor: string } }) =>
      theme ? theme.backgroundColor : "#fff"}
  }
  * {
    font-family: ${GlobalSettingsVariables.fontFamily}, sans-serif;
    font-size: ${GlobalSettingsVariables.fontSize};
    box-sizing: ${GlobalSettingsVariables.boxSizing};
    padding: ${GlobalSettingsVariables.paddingSize};
    margin: ${GlobalSettingsVariables.marginSize};
  }
  @media screen and (max-width: 960px) {
    * {
      font-size: 15px;
    }
  }
`
