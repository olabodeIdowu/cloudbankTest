import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: #444;
  background-color: rgba(230, 230, 250, 0.348);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

.menu-svg {
  display: none;
  width: 2rem;
  height: 2rem;
}

    @media screen and (max-width: 640px) {
    .appLayout {
      display: grid;
      grid-template-columns: 1fr;
    }

    .main {
     overflow-y: scroll;
     background: inherit;
    }

    #loanList {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      row-gap: 1rem;
    }

    #logo {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 2.5rem;
    }


    .loanHeader {
      margin-top: 2rem;
    }

    .styledNav {
    background-color: rgba(255, 255, 255, 0.97);
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100vh;
    transform: translateX(-100%);
    transition: all 0.5s ease-in;
    z-index: 500;
    /* Hide navigation */
    /* Allows NO transitions at all */
    /* display: none; */

    /* 1) Hide it visually */
    opacity: 0;

    /* 2) Make it unaccessible to mouse and keyboard */
    pointer-events: none;

    /* 3) Hide it from screen readers */
    visibility: hidden;
  }

    /* .nav-open .styledNav {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
    transform: translateX(0);
  }

  .nav-open .icon-mobile-nav[name="close-outline"] {
    display: block;
  }

  .nav-open .icon-mobile-nav[name="menu-outline"] {
    display: none;
  } */

  .menu-svg {
  display: block;
  cursor: pointer;
  z-index: 1000;
}


    }

`;

export default GlobalStyles;
