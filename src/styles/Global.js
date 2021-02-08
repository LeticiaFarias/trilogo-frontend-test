import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: "Roboto";
    font-size: 14px;
    background-color: #E5E5E5;
    color: #141414;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
  }
`;
