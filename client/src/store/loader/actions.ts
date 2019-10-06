import { LoaderActionTypes } from "./types";

const actionShowLoader = () => ({
  type: LoaderActionTypes.SHOW_LOADER
})

const actionHideLoader = () => ({
  type: LoaderActionTypes.HIDE_LOADER
})

export {
  actionShowLoader,
  actionHideLoader
}