import {appStore} from '../store/store'
import {actionShowLoader} from '../store/loader/actions'
import {fetchSquares} from './squaresFetcher'

const updateStoreSquares = () => {
  appStore.dispatch(actionShowLoader())
    // for make request processa bit more cute
    setTimeout(() => {
      fetchSquares()
    }, 1000)
}

export {updateStoreSquares}