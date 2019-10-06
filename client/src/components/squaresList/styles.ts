import styled from 'styled-components'

const StyledSquaresList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * + * {
    margin-top: 20px;
  }
`

export {StyledSquaresList}