import React, {FunctionComponent} from 'react'

import {SimpleButtonProps} from './types'
import {StyledSimpleButton} from './styles'

const SimpleButton: FunctionComponent<SimpleButtonProps> = props => (
  <StyledSimpleButton onClick={props.onClick} 
    backgroundColor={props.backgroundColor}
    color={props.color}>
    {props.text}
  </StyledSimpleButton>
)

export default SimpleButton