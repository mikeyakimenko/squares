import styled, {css} from 'styled-components'

import {SQUARE_SIZES} from '../square/constants'

const StyledPreview = styled.div.attrs(props => ({
  style: {
    width: SQUARE_SIZES[props.size].width,
    height: SQUARE_SIZES[props.size].height,
    backgroundColor: props.backgroundColor,
    borderRadius: `${props.borderRadius}px`
  }
}))`
  transition: all .5s ease;
`

export {StyledPreview}