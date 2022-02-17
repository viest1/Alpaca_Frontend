import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body{
    margin:0;
  }
  html{
    margin:0;
  }
  .box{
    display:block;
    padding:2rem;
    background:blue;
  }
`;
