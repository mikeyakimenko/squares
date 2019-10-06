import React, {FunctionComponent, useState} from 'react'
import {connect} from 'react-redux'

import {StyledSquare} from './styles'
import {SquareProps} from './types'
import {deleteSquare} from '../../fetchers/squaresFetcher'
import { updateStoreSquares } from '../../fetchers/updateStoreSquares'

const Square: FunctionComponent<SquareProps> = props => {
  const [deleteAnimation, setDeleteAnimation] = useState<boolean>(false)
  const [deleted, setDeleted] = useState<boolean>(false)

  const onClickHandler = () => {
    setDeleteAnimation(true)
    setTimeout(() => {
      setDeleteAnimation(false)
      setDeleted(true)
      deleteSquare(props.id)
      setTimeout(() => updateStoreSquares(), 0)
    }, 500)
  }

  return (
    <StyledSquare onClick={onClickHandler}
      deleteAnimation={deleteAnimation}
      deleted={deleted}
      createAnimation={props.animteCreated && props.isFirst}
      {...props} />
  )
}

const stateToProps = state => ({
  animteCreated: state.animateSquare
})

export default connect(stateToProps)(Square)