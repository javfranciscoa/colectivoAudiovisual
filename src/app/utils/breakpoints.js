import { css } from 'styled-components';

export const breakpoints = {
    extraSmall: 0,
    small: 576,
    medium: 768,
    large: 992,
    xlarge: 1200,
  };
  
 export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
    accumulator[label] = `
      @media (min-width: ${breakpoints[label]}px)
    `
    return accumulator;
  }, {});