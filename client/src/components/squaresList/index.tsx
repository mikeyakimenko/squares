import React, {
  FunctionComponent,
  useEffect,
  useState
} from 'react'
import {connect} from 'react-redux'

import Square from '../square'
import {SquaresListProps} from './types'
import {StyledSquaresList} from './styles'
import {SquareModel} from '../square/types'
import {updateStoreSquares} from '../../fetchers/updateStoreSquares'

const SquaresList: FunctionComponent<SquaresListProps> = props => {
  const [squares, setSquares] = useState<SquareModel[]>([])

  useEffect(() => updateStoreSquares(), [])

  useEffect(() => {
    setSquares(props.squares)
  }, [props.squares])

  return (
    <StyledSquaresList>
      {squares.map((item, index) => (
        <Square key={`${item.size}${index}`} 
          id={item._id}
          size={item.size}
          backgroundColor={item.backgroundColor}
          borderRadius={item.borderRadius}
          isFirst={index == 0} />
      ))}
    </StyledSquaresList>
  )
}

const stateToProps = state => ({squares: state.squares})

export default connect(stateToProps)(SquaresList)