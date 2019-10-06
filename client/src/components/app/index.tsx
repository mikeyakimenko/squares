import React, {FunctionComponent} from 'react'
import {Provider} from 'react-redux'

import {appStore} from '../../store/store'
import {
  GlobalStyles,
  StyledApp,
  StyledAppHeader,
  StyledAppContent
} from './styles'
import Loader from '../loader'
import Editor from '../editor'
import SquaresList from '../squaresList'

const App: FunctionComponent = () => {
  return (
    <Provider store={appStore}>
      <GlobalStyles />
      <Loader />
      <StyledApp>
        <StyledAppHeader>
          <Editor />
        </StyledAppHeader>
        <StyledAppContent>
          <SquaresList />
        </StyledAppContent>
      </StyledApp>
    </Provider>
  )
}

export default App