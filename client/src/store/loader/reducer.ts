import { LoaderActionTypes } from "./types";

const reducerLoader = (state: boolean = false, action) => {
  switch (action.type) {
    case LoaderActionTypes.SHOW_LOADER:
      return true
    case LoaderActionTypes.HIDE_LOADER:
      return false
    default: 
      return state
  }
}

export {reducerLoader}