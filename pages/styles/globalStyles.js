import { css } from '@emotion/react';

const globalStyles = (theme) => {
  return css`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

    * {
      scroll-behavior: smooth;
      color: ${theme == 'light' ? '#222' : '#ccc'};
      font-family: 'JetBrains Mono', monospace;
    }

    .force-font * {
      color: ${theme == 'light' ? '#222' : '#ccc'} !important;
    }

    body {
      background-color: ${theme == 'light' ? 'white' : '#101010'} !important;
      transition: background-color 0.2s ease-in-out;
    }

    main {
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
      min-height: 100vh;
      height: max-content;
      width: 100vw;
    }

    .pfp {
      padding: 1px;
      height: 100%;
      aspect-ratio: 1/1;
      border-radius: 100%;
      border: 2px solid ${theme == 'light' ? '#101010' : 'white'};
    }

    @media only screen and (max-width: 992px) {
      .header-links {
        margin-bottom: 8px;
      }
    }
    @media only screen and (min-width: 992px) {
      .header-links {
        margin-right: 20px;
      }
      .navbar-nav {
        margin-left: 35px;
      }
      #content {
        padding: 5rem 8rem 0 8rem;
      }
      .animated-link .text {
        padding: 0 !important;
      }
    }
    @media only screen and (min-width: 1200px) {
      #content {
        padding: 5rem 12rem 0 12rem;
      }
    }

    /* custom underlined text (headings) --- start */
    .underlined_text {
      position: relative;
      display: inline-block;
    }
    .underlined_text .text {
      position: relative;
      display: inline-block;
      overflow: visible;
    }
    .underlined_text .text::before {
      content: '';
      position: absolute;
      bottom: -4.5px; /* Adjust the distance from the bottom */
      width: 100%;
      height: 3.5px; /* Adjust the thickness of the underline */
      background-color: ${theme == 'light' ? '#222' : '#7e7e7e'};
    }
    /* custom underlined text (headings) --- end */

    /* custom underlined text (animated) --- start */
    .animated-link {
      position: relative;
      display: inline-block;
    }

    .animated-link .text {
      padding: 10px 0 10px 0;
      position: relative;
      display: inline-block;
      overflow: hidden;
      transition: 0.25s;
    }

    .animated-link .text::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px; /* Adjust the thickness of the underline */
      background-color: ${theme === 'dark' ? 'white' : 'black'};
      transition: width 0.25s ease; /* Adjust the animation duration and timing function */
    }

    .animated-link .text:hover::before {
      width: 100%;
    }
    .animated-link .text:hover {
      filter: brightness(2);
    }

    .animated-link .text .active::before {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${theme === 'dark' ? 'white' : 'black'};
    }

    /* custom underlined text (animated) --- end */
    /* social badges --- start*/
    .social-badge {
      aspect-ratio: 1/1;
      background-color: ${theme === 'dark' ? 'white' : ''};
    }
  `;
};

export default globalStyles;
