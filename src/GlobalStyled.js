import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
      width:100%;
      height:100%;
  }
  body {
    margin: 0;
    padding: 0;
    background: #00050c;
    font-family: 'Roboto', sans-serif;
    width:100%;
      height:100%;
  }
  #root{
      width:100%;
      height:100%;
  }
  a{
    color:inherit;
    text-decoration:none;
    :hover{
      text-decoration:none;
    }
  }
  
`;

export default GlobalStyle;