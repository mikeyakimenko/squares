import {css} from 'styled-components'
import {MEDIA_QUERIES} from '../constants/mediaQueries'


const mq = (mq, styles) => {
  const result = mq.reduce((acc, curr) => acc += `${MEDIA_QUERIES[curr]} {${styles}}`, '')

  return css`${result}`
}

export {mq}
