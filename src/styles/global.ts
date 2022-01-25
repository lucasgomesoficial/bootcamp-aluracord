import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.colors.neutrals['000']};
    font: 400 16px Roboto, sans-serif;
  }
  html, body, #__next {
    min-height: 100vh;
    display: flex;
    flex: 1;
  }
  #__next {
    flex: 1;
  }
  #__next > * {
    flex: 1;
  }
`
