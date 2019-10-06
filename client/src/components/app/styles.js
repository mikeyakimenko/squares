import styled, {createGlobalStyle} from 'styled-components'

import {mq} from '../../utils/mediaQueries'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f9e5a6;
  }
`

const StyledApp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  z-index: 1;
`

const StyledAppHeader = styled.div`
  flex: 0 0 auto;
  box-sizing: border-box;
  padding: 20px;
  background-color: #f1c40f;
  ${mq(['lg', 'xl'], `
    box-sizing: border-box;
    padding: 20px 30%;
  `)}
`

const StyledAppContent = styled.div`
  flex: auto;
  box-sizing: border-box;
  padding: 20px;
  margin-top: auto;
  background-color: #f9e5a6;
  overflow-y: auto;
  ${mq(['lg', 'xl'], `
    box-sizing: border-box;
    padding: 20px 30%;
  `)}
`

export {
  GlobalStyles,
  StyledApp,
  StyledAppHeader,
  StyledAppContent
}