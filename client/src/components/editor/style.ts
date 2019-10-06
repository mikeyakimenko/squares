import styled from 'styled-components'

const StyledInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 15px;
`

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledEditorTitle = styled.div`
  text-align: center;
  font-size: 22px;
  font-style: italic;
  font-family: 'Georgia'
`

const StyledEditorPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 240px;
  background-color: #424242;
  margin-top: 20px;
`

export {
  StyledInputsContainer,
  StyledButtonContainer,
  StyledEditorTitle,
  StyledEditorPreview
}