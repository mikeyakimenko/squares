import styled from 'styled-components'

const StyledRngeInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 30px;
  background: transparent;
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    display: block;
    width: 16px;
    height: 16px;
    background-color: #c0392b;
    position: relative;
    top: -8px;
    border-radius: 100%;
  }
  &::-webkit-slider-runnable-track {
    background-color: #c0392b;
    height: 2px;
  }
`

const StyledLabel = styled.span`
  display: block;
  > b {
    color: #c0392b;
  }
`

export {
  StyledRngeInput,
  StyledLabel
}