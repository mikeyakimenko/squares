import {appStore} from '../store/store'
import {actionGetSquares} from '../store/squares/actions'
import {actionHideLoader} from '../store/loader/actions'

const fetchSquares = async (): Promise<void> => {
  const response = await fetch('http://localhost:3001/squares/')
  const json = await response.json()
  appStore.dispatch(actionGetSquares(json))
  appStore.dispatch(actionHideLoader())
}

const addSquare = async (data): Promise<void> => {
  await fetch('http://localhost:3001/squares/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

const deleteSquare = async (id) => {
  await fetch('http://localhost:3001/squares/', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: id})
  })
}

export {
  fetchSquares,
  addSquare,
  deleteSquare
}