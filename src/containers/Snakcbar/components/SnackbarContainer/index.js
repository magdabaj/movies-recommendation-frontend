import styled from 'styled-components'
import { themeSpacing, themeZIndex } from '../../../../themes/fromTheme'
import { Breakpoint, themeBreakpoint, Type } from '../../../../themes/fromTheme/breakpoint'
import { useInjectSaga } from '../../../../utils/injectSaga'
import { sagaKey } from '../../constants'
import { snackbarSaga } from '../../sagas'
import { multipleChildrenPropType } from '../../../../utils/propTypes/childrenPropTypes'
import React from 'react'
import { RESTART_ON_REMOUNT } from '../../../../utils/constants'

const StyledSnackbarContainer = styled.div`
  position: fixed;
  width: 320px;
  ${themeBreakpoint(Type.down, Breakpoint.xs)} {
    width: auto;
  }
  bottom: ${themeSpacing(2)};
  left: ${themeSpacing(2)};
  right: ${themeSpacing(2)};
  z-index: ${themeZIndex('snackbarToaster')};
  & > * {
    margin-bottom: ${themeSpacing(1)};
  }
`

const SnackbarContainer = ({ children }) => {
  useInjectSaga({ key: sagaKey, saga: snackbarSaga, mode: RESTART_ON_REMOUNT })

  return <StyledSnackbarContainer>{children}</StyledSnackbarContainer>
}

SnackbarContainer.propTypes = {
  children: multipleChildrenPropType,
}

export default React.memo(SnackbarContainer)
