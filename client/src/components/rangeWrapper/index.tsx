import React, {
  FunctionComponent,
  useState
} from 'react'

import {RangeWrapperProps} from './types'
import {
  StyledLabel,
  StyledRngeInput
} from './styles'

const RangeWrapper: FunctionComponent<RangeWrapperProps> = props => {
  const [value, setValue] = useState<number>(props.value)

  return (
    <div>
      <StyledRngeInput type='range' 
        value={value}
        min={props.min}
        max={props.max}
        step={props.step} 
        onChange={event => {
          setValue(parseInt(event.target.value))
          props.onChange(event.target.value)
        }} />
      <StyledLabel>
        {props.title}: <b>{value}</b>
      </StyledLabel>
    </div>
  )
}

export default RangeWrapper