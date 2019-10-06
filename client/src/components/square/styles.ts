import styled, {css, keyframes} from 'styled-components'

import {SQUARE_SIZES} from './constants'

const preDeleteAnimation = keyframes`
  from {
    transform: scale(1);
    opcaity: 1;
  }
  to {
    opacity: 0;
    transform: scale(0);
  }
`

const newItemAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  30% {
    transform: scale(1.2) rotate(-360deg)
  }

  40% {
    transform: scale(1.1) rotate(360deg)
  }

  800% {
    transform: scale(1) rotate(-360deg)
  }

  100% {
    transform: scale(1) rotate(360deg)
  }
`

const StyledSquare = styled.div`
  border: 2px solid white;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius}px;
  width: ${props => SQUARE_SIZES[props.size].width};
  height: ${props => SQUARE_SIZES[props.size].height};
  ${props => {
    if (props.deleted) {
      return css`display: none;`
    }
  }}
  ${props => {
    if (props.deleteAnimation) {
      return css`animation: ${preDeleteAnimation} .5s linear 1;`
    }
  }}
  ${props => {
    if (props.createAnimation)
    return css`
      animation: ${newItemAnimation} 2s linear infinite;
    `
  }}
`

export {StyledSquare}