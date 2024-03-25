import { css } from '@emotion/react';

const globalStyles = (theme, config) => {
  return css`
    pre *,
    code * {
      color: #ccc;
    }

    pre {
      color: ${config.code_text_color ? config.code_text_color : ''} !important;
      background-color: ${config.code_bg_color
        ? config.code_bg_color
        : ''} !important;
    }

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

    /*GITHUB MARKDOWN STYLING*/
    ${theme === 'light'
      ? `

      .markdown-body,
      [data-theme='light'] {
        /*light*/
        color-scheme: light;
        --color-prettylights-syntax-comment: #57606a;
        --color-prettylights-syntax-constant: #0550ae;
        --color-prettylights-syntax-entity: #6639ba;
        --color-prettylights-syntax-storage-modifier-import: #24292f;
        --color-prettylights-syntax-entity-tag: #116329;
        --color-prettylights-syntax-keyword: #cf222e;
        --color-prettylights-syntax-string: #0a3069;
        --color-prettylights-syntax-variable: #953800;
        --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
        --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
        --color-prettylights-syntax-invalid-illegal-bg: #82071e;
        --color-prettylights-syntax-carriage-return-text: #f6f8fa;
        --color-prettylights-syntax-carriage-return-bg: #cf222e;
        --color-prettylights-syntax-string-regexp: #116329;
        --color-prettylights-syntax-markup-list: #3b2300;
        --color-prettylights-syntax-markup-heading: #0550ae;
        --color-prettylights-syntax-markup-italic: #24292f;
        --color-prettylights-syntax-markup-bold: #24292f;
        --color-prettylights-syntax-markup-deleted-text: #82071e;
        --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
        --color-prettylights-syntax-markup-inserted-text: #116329;
        --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
        --color-prettylights-syntax-markup-changed-text: #953800;
        --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
        --color-prettylights-syntax-markup-ignored-text: #eaeef2;
        --color-prettylights-syntax-markup-ignored-bg: #0550ae;
        --color-prettylights-syntax-meta-diff-range: #8250df;
        --color-prettylights-syntax-brackethighlighter-angle: #57606a;
        --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
        --color-prettylights-syntax-constant-other-reference-link: #0a3069;
        --color-fg-default: #1f2328;
        --color-fg-muted: #656d76;
        --color-fg-subtle: #6e7781;
        --color-canvas-default: #ffffff;
        --color-canvas-subtle: #f6f8fa;
        --color-border-default: #d0d7de;
        --color-border-muted: hsla(210, 18%, 87%, 1);
        --color-neutral-muted: rgba(175, 184, 193, 0.2);
        --color-accent-fg: #0969da;
        --color-accent-emphasis: #0969da;
        --color-success-fg: #1a7f37;
        --color-success-emphasis: #1f883d;
        --color-attention-fg: #9a6700;
        --color-attention-emphasis: #9a6700;
        --color-attention-subtle: #fff8c5;
        --color-danger-fg: #d1242f;
        --color-danger-emphasis: #cf222e;
        --color-done-fg: #8250df;
        --color-done-emphasis: #8250df;
      }
    `
      : `
    .markdown-body,
    [data-theme='dark'] {
      /*dark*/
      color-scheme: dark;
      --color-prettylights-syntax-comment: #8b949e;
      --color-prettylights-syntax-constant: #79c0ff;
      --color-prettylights-syntax-entity: #d2a8ff;
      --color-prettylights-syntax-storage-modifier-import: #c9d1d9;
      --color-prettylights-syntax-entity-tag: #7ee787;
      --color-prettylights-syntax-keyword: #ff7b72;
      --color-prettylights-syntax-string: #a5d6ff;
      --color-prettylights-syntax-variable: #ffa657;
      --color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
      --color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
      --color-prettylights-syntax-invalid-illegal-bg: #8e1519;
      --color-prettylights-syntax-carriage-return-text: #f0f6fc;
      --color-prettylights-syntax-carriage-return-bg: #b62324;
      --color-prettylights-syntax-string-regexp: #7ee787;
      --color-prettylights-syntax-markup-list: #f2cc60;
      --color-prettylights-syntax-markup-heading: #1f6feb;
      --color-prettylights-syntax-markup-italic: #c9d1d9;
      --color-prettylights-syntax-markup-bold: #c9d1d9;
      --color-prettylights-syntax-markup-deleted-text: #ffdcd7;
      --color-prettylights-syntax-markup-deleted-bg: #67060c;
      --color-prettylights-syntax-markup-inserted-text: #aff5b4;
      --color-prettylights-syntax-markup-inserted-bg: #033a16;
      --color-prettylights-syntax-markup-changed-text: #ffdfb6;
      --color-prettylights-syntax-markup-changed-bg: #5a1e02;
      --color-prettylights-syntax-markup-ignored-text: #c9d1d9;
      --color-prettylights-syntax-markup-ignored-bg: #1158c7;
      --color-prettylights-syntax-meta-diff-range: #d2a8ff;
      --color-prettylights-syntax-brackethighlighter-angle: #8b949e;
      --color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;
      --color-prettylights-syntax-constant-other-reference-link: #a5d6ff;
      --color-fg-default: #e6edf3;
      --color-fg-muted: #848d97;
      --color-fg-subtle: #6e7681;
      --color-canvas-default: #0d1117;
      --color-canvas-subtle: #161b22;
      --color-border-default: #30363d;
      --color-border-muted: #21262d;
      --color-neutral-muted: rgba(110, 118, 129, 0.4);
      --color-accent-fg: #2f81f7;
      --color-accent-emphasis: #1f6feb;
      --color-success-fg: #3fb950;
      --color-success-emphasis: #238636;
      --color-attention-fg: #d29922;
      --color-attention-emphasis: #9e6a03;
      --color-attention-subtle: rgba(187, 128, 9, 0.15);
      --color-danger-fg: #f85149;
      --color-danger-emphasis: #da3633;
      --color-done-fg: #a371f7;
      --color-done-emphasis: #8957e5;
    }
    `}/* --- --- --- */
  `;
};

export default globalStyles;
