import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux'
import thunk from 'redux-thunk'

import {reducerSquares} from './squares/reducer'
import {reducerLoader} from './loader/reducer'
import {reducerAnimateSquare} from './animateSquare/reducer'

const rootReducer = combineReducers({
  squares: reducerSquares,
  loader: reducerLoader,
  animateSquare: reducerAnimateSquare
})

const configuredStore = () => {
  return createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
  )
}

const appStore = configuredStore()

export {appStore}
