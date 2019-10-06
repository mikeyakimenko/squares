import React, {
  FunctionComponent,
  useState
} from 'react'

import {
  StyledButtonContainer,
  StyledInputsContainer,
  StyledEditorTitle,
  StyledEditorPreview
} from './style'
import RangeWrapper from '../rangeWrapper'
import SimpleButton from '../simpleButton'
import ColorPickerWrapper from '../colorPickerWrapper'
import {updateStoreSquares} from '../../fetchers/updateStoreSquares'
import {addSquare} from '../../fetchers/squaresFetcher'
import { appStore } from '../../store/store'
import {
  actionRunAnimation, 
  actionStopAnimation
} from '../../store/animateSquare/actions'
import Preview from '../preview'

const Editor: FunctionComponent<any> = props => {
  const [borderRadius, setBorderRadius] = useState<number>(0)
  const [size, setSize] = useState<number>(1)
  const [color, setColor] = useState<string>('#fccb00')
  const [showPreview, setShowPreview] = useState<boolean>(false)

  const addClickHandler = () => {
    setShowPreview(false)
    addSquare({
      backgroundColor: color,
      borderRadius: borderRadius,
      size: size
    })
    updateStoreSquares()
    
    setTimeout(() => {
      appStore.dispatch(actionRunAnimation())
      setTimeout(() => {
        appStore.dispatch(actionStopAnimation())
      }, 2000)
    }, 1000)
  }

  return (
    <div>
      <StyledEditorTitle>Add some squre!</StyledEditorTitle>
      <StyledInputsContainer>
        <div>
          <RangeWrapper 
            title={'Set border raius'}
            value={borderRadius}
            min={0}
            max={30}
            step={1}
            onChange={setBorderRadius}  />
        </div>
        <div>
          <RangeWrapper 
            title={'Set size'}
            value={size}
            min={1}
            max={5}
            step={1}
            onChange={setSize} />
        </div>
        <div>
          <ColorPickerWrapper onChange={setColor} />
        </div>
      </StyledInputsContainer>
      <StyledButtonContainer>
        <SimpleButton 
          text={'Add'}
          color={'rgba(255, 255, 255, 0.8)'}
          backgroundColor={'#d35400'}
          onClick={addClickHandler} />
          <SimpleButton 
            text={showPreview ? 'hide preview' : 'show preview?'}
            color={'#424242'}
            backgroundColor={'transparent'}
            onClick={e => setShowPreview(!showPreview)} />
      </StyledButtonContainer>
      {showPreview && (
        <StyledEditorPreview>
        <Preview backgroundColor={color}
          borderRadius={borderRadius}
          size={size} />
        </StyledEditorPreview>
      )}
    </div>
  )
}

export default Editor