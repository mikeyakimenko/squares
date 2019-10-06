import React, {
  FunctionComponent,
  useState
} from 'react'
import {GithubPicker} from 'react-color'

import SimpleButton from '../simpleButton'
import {ColorPickerWrapperProps} from './types'
import {
  StyledColorPickerWrapperContainer,
  StyledPickerContainer,
  StyledColorLabel
} from './styles'

const ColorPickerWrapper: FunctionComponent<ColorPickerWrapperProps> = props => {
  const [showPicker, setShowPicker] = useState<boolean>(false)
  const [color, setColor] = useState<string>('#fccb00')

  return (
    <StyledColorPickerWrapperContainer>
      <SimpleButton 
        text={'Choose color'} 
        color={'#827171'}
        backgroundColor={'#deb42b'}
        onClick={() => setShowPicker(!showPicker)} />
        <StyledColorLabel backgroundColor={color}
          onClick={event => setShowPicker(true)} />
      {showPicker && (
        <StyledPickerContainer>
          <GithubPicker onChangeComplete={(color) => {
            props.onChange(color.hex)
            setColor(color.hex)
            setShowPicker(false)
          }} />
        </StyledPickerContainer>
      )}
    </StyledColorPickerWrapperContainer>
  )
}

export default ColorPickerWrapper
