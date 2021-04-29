import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import {
  withIntlProvider,
  withProviders,
  withStore,
  withThemeProviders,
} from 'utils/testHelpers/fp'
import { clickElement, commonTests } from 'utils/testHelpers'
import Snackbar from 'containers/Snackbar/index'
import SnackbarProvider from 'containers/Snackbar/containers/SnackbarProvider'
import { SnackbarVariant } from 'containers/Snackbar/constants'
import { randomTestSafeString } from 'utils/string'

jest.useFakeTimers()

describe('<Snackbar/>', () => {
  const renderSnackbar = (args = {}) => {
    const props = {
      text: 'Tomo!',
      id: 1986,
      ...args,
    }

    return render(
      withProviders(
        <SnackbarProvider>
          <Snackbar {...props} />
        </SnackbarProvider>,
        [withThemeProviders(), withIntlProvider(), withStore()],
      ),
    )
  }

  commonTests(renderSnackbar)

  const timeout = 6e3

  it('closes itself after ~5s (~ because of animation) ', async () => {
    const text = randomTestSafeString()
    renderSnackbar({ text })
    screen.getByText(text)
    jest.advanceTimersByTime(timeout)
    await waitFor(() => {
      expect(screen.queryByText(text)).not.toBeInTheDocument()
    })
  })

  it('not closes itself after 5s because its variant error', async () => {
    const text = randomTestSafeString()
    renderSnackbar({ variant: SnackbarVariant.error, text })
    jest.advanceTimersByTime(timeout)
    await waitFor(() => {
      expect(screen.queryByText(text)).toBeInTheDocument()
    })
  })

  it('closes when user clicks X', async () => {
    const text = randomTestSafeString()
    renderSnackbar({ variant: SnackbarVariant.error, text })
    screen.getByText(text)

    clickElement(screen.getByTestId('snackbar-close'))
    jest.advanceTimersByTime(timeout)
    await waitFor(() => {
      expect(screen.queryByText(text)).not.toBeInTheDocument()
    })
  })
})
