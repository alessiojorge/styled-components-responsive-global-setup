import console = require('console');

const media = (em: string) => {
  return `@media screen and (max-width: ${em})`;
};

export const respond = (breakpoint: string, content: string) => {
  switch (breakpoint) {
    case 'phone':
      return `${media('37.5em')}{ ${content} }`;
    case 'tab-port':
      return `${media('56.25em')}{ ${content} }`;
    case 'tab-land':
      return `${media('75em')}{ ${content} }`;
    case 'big-device':
      return `@media screen and (min-width: 120.1em){ ${content} }`;
    default:
      break;
  }
};
