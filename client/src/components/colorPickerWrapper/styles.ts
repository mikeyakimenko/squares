import styled, {css} from 'styled-components'

const StyledColorPickerWrapperContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  > * + * {
    margin-left: 10px;
  }
`

const StyledPickerContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  transform: translateY(calc(100% + 10px));
`
const StyledColorLabel = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 100%;
  box-shadow: 0px 0px 0px 2px white;
  background-color: ${props => props.backgroundColor};
`

export {
  StyledColorPickerWrapperContainer,
  StyledPickerContainer,
  StyledColorLabel
}