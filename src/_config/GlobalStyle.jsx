import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

  :root {
    font-size: 62.5%;

    --font-normal: 'Segoe UI', sans-serif;
    --font-title: 'SegoeProBlack', sans-serif;
    --font-Bangers: 'Bangers', cursive;

    --color-background-one: #E6E6E6; /* cinza xbox */
    --color-background-two: #107c10; /* verde xbox */
    --color-background-three: #f8f8f2; /* branco drácula */
    --color-background-four: #282a36; /* dark drácula */
    --color-background-five: #;

    --color-text-one: #E6E6E6;
    --color-text-two: #107c10;
    --color-text-three: #f8f8f2;
    --color-text-four: #282a36;
    --color-text-five: #;

    -transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  * {
    font-family: var(--font-normal);
  }

  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    background-color: var(--color-background-one);
    color: var(--color-text-four);
  }

  body, input, button, textarea {
    font-size: 15px;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
