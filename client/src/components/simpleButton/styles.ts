import styled from 'styled-components'

const StyledSimpleButton = styled.span`
  display: inline-block;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 15px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`

export {StyledSimpleButton}