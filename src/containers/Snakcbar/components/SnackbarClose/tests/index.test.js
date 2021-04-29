import React from 'react'
import { render, screen } from '@testing-library/react'
import { withProviders, withThemeProviders } from 'utils/testHelpers/fp'
import { clickElement, commonTests } from 'utils/testHelpers'
import SnackbarClose from 'containers/Snackbar/components/SnackbarClose/index'

describe('<SnackbarClose/>', () => {
  const renderSnackbarClose = (args = {}) => {
    const props = {
      close: jest.fn(),
      ...args,
    }

    return render(
      withProviders(<SnackbarClose {...props} />, [withThemeProviders()]),
    )
  }

  commonTests(renderSnackbarClose)

  it('closes snackbar', () => {
    const close = jest.fn()
    renderSnackbarClose({ close })

    clickElement(screen.getByTestId('snackbar-close'))

    expect(close).toHaveBeenCalledTimes(1)
  })
})
