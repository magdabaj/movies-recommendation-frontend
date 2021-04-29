import React from 'react'
import { render } from '@testing-library/react'
import {
  withIntlProvider,
  withProviders,
  withStore,
  withThemeProviders,
} from 'utils/testHelpers/fp'
import { commonTests } from 'utils/testHelpers'
import SnackbarProvider from 'containers/Snackbar/containers/SnackbarProvider/index'
import { useSnackbarContext } from 'containers/Snackbar/hooks/useSnackbarContext'
import {
  SnackbarPriority,
  SnackbarToken,
  SnackbarVariant,
} from 'containers/Snackbar/constants'

describe('<SnackbarProvider/>', () => {
  const renderSnackbarProvider = (args = {}) => {
    const props = {
      ...args,
    }

    return render(
      withProviders(<SnackbarProvider {...props} />, [
        withThemeProviders(),
        withIntlProvider(),
        withStore(),
      ]),
    )
  }

  commonTests(renderSnackbarProvider)

  let snackbarCtx
  let TestFC
  beforeEach(() => {
    TestFC = () => {
      snackbarCtx = useSnackbarContext()
      return <div>Something</div>
    }
  })
  const message = 'snacky!'
  const createResult = (id, token) => ({
    id,
    message,
    variant: SnackbarVariant[token],
    priority: SnackbarPriority[token],
  })

  it('provides values to its children', () => {
    const props = {
      children: <TestFC />,
      maxQueueSize: 12,
    }

    renderSnackbarProvider(props)

    expect(snackbarCtx.snackbarMessagesQueue).toEqual([])
    expect(snackbarCtx.maxQueueSize).toEqual(12)
  })

  it('fails to add a new snack', () => {
    renderSnackbarProvider({ children: <TestFC /> })

    expect(() => snackbarCtx.addSnackbar(undefined, 'Yo!')).toThrow()
  })

  it('adds a new snack', () => {
    const token = SnackbarToken.info

    renderSnackbarProvider({ children: <TestFC /> })
    snackbarCtx.addSnackbar(token, message)

    const expectedResult = createResult(1, token)

    expect(snackbarCtx.snackbarMessagesQueue[0]).toEqual(expectedResult)
  })

  it('adds a new success snack', () => {
    const token = SnackbarToken.success

    renderSnackbarProvider({ children: <TestFC /> })
    snackbarCtx.addSuccessSnackbar(message)

    const expectedResult = createResult(1, token)

    expect(snackbarCtx.snackbarMessagesQueue[0]).toEqual(expectedResult)
  })

  it('adds a new error snack', () => {
    const token = SnackbarToken.error

    renderSnackbarProvider({ children: <TestFC /> })
    snackbarCtx.addErrorSnackbar(message)

    const expectedResult = createResult(1, token)

    expect(snackbarCtx.snackbarMessagesQueue[0]).toEqual(expectedResult)
  })

  it('adds a new warning snack', () => {
    const token = SnackbarToken.warning

    renderSnackbarProvider({ children: <TestFC /> })
    snackbarCtx.addWarningSnackbar(message)

    const expectedResult = createResult(1, token)

    expect(snackbarCtx.snackbarMessagesQueue[0]).toEqual(expectedResult)
  })

  it('adds a new info snack', () => {
    const token = SnackbarToken.info

    renderSnackbarProvider({ children: <TestFC /> })
    snackbarCtx.addInfoSnackbar(message)

    const expectedResult = createResult(1, token)

    expect(snackbarCtx.snackbarMessagesQueue[0]).toEqual(expectedResult)
  })

  it('removes snackbar by id', () => {
    const token = SnackbarToken.info

    renderSnackbarProvider({ children: <TestFC /> })
    snackbarCtx.addInfoSnackbar(message)
    const expectedResult = createResult(1, token)

    expect(snackbarCtx.snackbarMessagesQueue[0]).toEqual(expectedResult)

    snackbarCtx.removeSnackbar(1)

    expect(snackbarCtx.snackbarMessagesQueue).toEqual([])
  })

  it('removes all snackbars', () => {
    renderSnackbarProvider({ children: <TestFC /> })
    snackbarCtx.addInfoSnackbar(message)
    snackbarCtx.addInfoSnackbar(message)
    snackbarCtx.addInfoSnackbar(message)

    expect(snackbarCtx.snackbarMessagesQueue.length).toEqual(3)

    snackbarCtx.clearSnackbars()

    expect(snackbarCtx.snackbarMessagesQueue).toEqual([])
  })
})
