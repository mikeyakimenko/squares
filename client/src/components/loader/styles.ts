import styled, {css, keyframes} from 'styled-components'

const loaderAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const loaderAnimationCss = css`
  animation: ${loaderAnimation} .8s linear infinite;
`

const StyledLoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, .9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

const StyledLoader = styled.div`
  width: 80px;
  height: 80px;
  border-right: 2px solid #a7380f;
  border-radius: 0 50% 50% 0;
  ${loaderAnimationCss}
`

export {
  StyledLoaderOverlay,
  StyledLoader
}