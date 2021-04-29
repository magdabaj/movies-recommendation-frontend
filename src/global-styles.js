import { createGlobalStyle } from 'styled-components'
import { getColor } from './themes/color/getColor'
import Color from './themes/color/constants'

const GlobalStyle = createGlobalStyle`
  * {
    transition:
      width 0.2s ease,
      margin 0.2s ease,
      padding 0.2s ease;
  }

  html,
  body {
    height: 100%;
    width: 100%;

  }

  body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(
      205.28deg,
      ${getColor(Color.token.appBackground01)} 14.05%,
      ${getColor(Color.token.appBackground02)} 102.1%
    );
    background-attachment: fixed;

    ::-webkit-scrollbar {
      width: 12px;
      background-color: ${props => props.theme.color.background};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: ${props => props.theme.color.primary};
    }
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    color: ${props => props.theme.color.text}
    height: 100%;
    width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    font-weight: normal;
    line-height: 1.5em;
  }

  :checked + .lever {
    background-color: ${props => props.theme.color.primaryLight} !important;
  }

  :checked + .lever:after {
    background-color: ${props => props.theme.color.primary} !important;
  }

  .active-nav {
    color:${props => props.theme.color.primary} !important;
  }

  .active-nav:hover {
    color:${props => props.theme.color.primaryDark} !important;
  }

  .range-field input[type="range"]{
    border:none !important;
    margin: 0!important;
  }

  .range-field input[type="range"]:focus{
    border:none !important;
    outline:1px solid transparent !important;
  }

  .side-nav a{
    line-height: inherit !important;
  }
`

export default GlobalStyle
