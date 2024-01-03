import { css } from '@emotion/react';

const globalStyles = (theme, config) => {
  return css`
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

    pre {
      color: ${config.code_text_color ? config.code_text_color : 'black'};
      padding: 5px;
      background-color: ${config.code_bg_color
        ? config.code_bg_color
        : '#f1e4c3'};
      width: max-content;
      line-height: 1.2;
      border-radius: 0.25rem;
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
      overflow: hidden;
      height: 100%;
      aspect-ratio: 1/1;
      border-radius: 100%;
      border: ${config.profile_picture_border
        ? `2px solid ${theme == 'light' ? '#101010' : 'white'}`
        : 'none'};
    }

    @media only screen and (max-width: 992px) {
      .header-links {
        margin-top: 10px;
        margin-bottom: 10px;
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
        padding: 3rem 5rem 0 5rem;
      }
    }

    @media only screen and (min-width: 1200px) {
      #content {
        padding: 4rem 12rem 0 12rem;
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
      position: relative;
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
      ${config.disable_animated_underline
        ? ''
        : 'transition: width 0.25s ease;'}// transition: width 0.25s ease; /* Adjust the animation duration and timing function */
    }

    .animated-link .text:hover::before {
      width: 100%;
    }
    .animated-link:hover * {
      transition: 0.2s;
      color: ${theme === 'dark' ? '#999' : '#666'} !important;
    }

    .animated-link .text .active::before {
      content: '';
      position: absolute;
      bottom: 0;
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
    /*pagination*/
    .MuiPagination-root .Mui-selected {
      color: ${theme == 'light' ? '' : 'black'} !important;
    }
    /*theme*/
    .theme-toggler {
      background-color: ${theme === 'light' ? 'rgb(32, 32, 32)' : '#fbcc84'};
      transition: 0.2s;
    }
    .theme-toggler:hover {
      background-color: ${theme === 'light' ? 'rgb(64, 64, 64)' : '#d0aa64'};
      transition: 0.2s;
    }
  `;
};

export default globalStyles;
