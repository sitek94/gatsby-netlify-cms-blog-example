import { css, Theme } from '@emotion/react'

function createReset(theme: Theme) {
  const { palette } = theme

  return css`
    form {
      margin: 0;
    }
    ul,
    ol {
      list-style-position: inside;
      margin-left: 0;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    html,
    body {
      padding: 0;
      margin: 0;
    }
    html {
      text-rendering: optimizeLegibility;
      overflow-x: hidden;
      overflow-y: auto !important;
      box-sizing: border-box;
      -ms-overflow-style: scrollbar;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      scroll-behavior: smooth;
    }
    body {
      color: ${palette.text.primary};
      background-color: ${palette.background.default};
    }
    ::selection {
      color: ${palette.common.white};
      background-color: ${palette.primary.main};
    }
    a {
      color: ${palette.primary.main};
      transition: all 0.3s ease-in-out;
      text-decoration: none;
      &:hover,
      &:focus {
        color: ${palette.primary.light};
      }
    }
    a:not([href]):not([tabindex]) {
      color: inherit;
      text-decoration: none;
      &:hover,
      &:focus {
        color: inherit;
        text-decoration: none;
      }
      &:focus {
        outline: 0;
      }
    }
    blockquote {
      border-left: 5px solid ${palette.primary.main};
      padding-left: 1rem !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      font-style: italic;
      p {
        line-height: 1.3 !important;
      }
    }
    [tabindex='-1']:focus {
      outline: none !important;
    }
    details {
      margin-bottom: 1rem;
    }
    pre {
      margin-top: 0;
      margin-bottom: 1rem;
      overflow: auto;
      white-space: pre;
    }
    pre,
    code {
      font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
        'Courier New', monospace;
    }
    figure {
      margin: 0 0 1rem 0;
    }
    img {
      vertical-align: middle;
    }
    [role='button'] {
      cursor: pointer;
    }
    a,
    area,
    button,
    [role='button'],
    input,
    label,
    select,
    summary,
    textarea {
      touch-action: manipulation;
    }
    table {
      border-collapse: collapse;
      background-color: ${palette.background.default};
    }
    caption {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      color: ${palette.text.primary};
      text-align: center;
      caption-side: bottom;
    }
    th {
      text-align: left;
    }
    label {
      display: inline-block;
      margin-bottom: 0.5rem;
    }
    button:focus {
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }
    input,
    button,
    select,
    textarea {
      line-height: inherit;
    }
    input[type='date'],
    input[type='time'],
    input[type='datetime-local'],
    input[type='month'] {
      -webkit-appearance: listbox;
    }
    textarea {
      resize: vertical;
    }
    fieldset {
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }
    legend {
      display: block;
      width: 100%;
      padding: 0;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      line-height: inherit;
    }
    input[type='search'] {
      -webkit-appearance: none;
    }
    output {
      display: inline-block;
    }
    svg:not(:root) {
      overflow: hidden;
      vertical-align: middle;
    }
    [hidden] {
      display: none !important;
    }
  `
}
export default createReset
