import React, {
  FunctionComponent,
  useState,
  useEffect
} from 'react'
import {connect} from 'react-redux'

import {
  StyledLoaderOverlay,
  StyledLoader
} from './styles'

const Loader: FunctionComponent<any> = props => {
  return (
    <>
      {props.showLoader && (
        <StyledLoaderOverlay>
          <StyledLoader />
        </StyledLoaderOverlay>
      )}
    </>
  )
}

const statetoProps = state => ({
  showLoader: state.loader
})

export default connect(statetoProps)(Loader)