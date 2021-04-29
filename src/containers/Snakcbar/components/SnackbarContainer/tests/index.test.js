import React from 'react'
import { render } from '@testing-library/react'
import {
  withProviders,
  withStore,
  withThemeProviders,
} from 'utils/testHelpers/fp'
import { commonTests } from 'utils/testHelpers'
import SnackbarContainer from 'containers/Snackbar/components/SnackbarContainer/index'

describe('<SnackbarContainer/>', () => {
  const renderSnackbarContainer = (args = {}) => {
    const props = {
      ...args,
    }

    return render(
      withProviders(<SnackbarContainer {...props} />, [
        withStore(),
        withThemeProviders(),
      ]),
    )
  }

  commonTests(renderSnackbarContainer)
})
