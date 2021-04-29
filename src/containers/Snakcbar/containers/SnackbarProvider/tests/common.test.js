import {
  createAddSnackbarWithVariants,
  createSnackMsg,
  removeByIdFilter,
  sortByHighestId,
  sortByHighestPriority,
  sortByHighestPriorityAndIndex,
} from 'containers/Snackbar/containers/SnackbarProvider/common'
import {
  SnackbarPriority,
  SnackbarToken,
  SnackbarVariant,
} from 'containers/Snackbar/constants'
import { sort } from 'ramda'
import { generateSequentialId } from 'utils/generateSequentialId'

describe('createSnackMsg', () => {
  const message = 'Yummy snacks'

  const createResult = (id, token) => ({
    id,
    message,
    variant: SnackbarVariant[token],
    priority: SnackbarPriority[token],
  })

  it('fails to create snack msg', () => {
    expect(createSnackMsg).toThrow()
  })

  it('creates info snackbar msg', () => {
    const token = SnackbarToken.info

    expect(createSnackMsg(1, token, message)).toEqual(createResult(1, token))
  })

  it('creates warning snackbar msg', () => {
    const token = SnackbarToken.warning

    expect(createSnackMsg(2, token, message)).toEqual(createResult(2, token))
  })

  it('creates error snackbar msg', () => {
    const token = SnackbarToken.error

    expect(createSnackMsg(3, token, message)).toEqual(createResult(3, token))
  })

  it('creates success snackbar msg', () => {
    const token = SnackbarToken.success

    expect(createSnackMsg(4, token, message)).toEqual(createResult(4, token))
  })
})

describe('removeByIdFilter', () => {
  const idToDelete = 1
  const seq = generateSequentialId()

  const snackMsg = () =>
    createSnackMsg(seq.id(), SnackbarToken.success, 'Hey, something successed')

  const snackMessages = new Array(3).fill().map(() => snackMsg())

  const expectedResult = snackMessages.filter(({ id }) => id !== idToDelete)

  expect(removeByIdFilter(idToDelete, snackMessages)).toEqual(expectedResult)
})

describe('sortByHighestPriority', () => {
  const arrayWithPriorities = [
    { priority: 1 },
    { priority: 2 },
    { priority: 3 },
  ]

  const expectedResult = [{ priority: 3 }, { priority: 2 }, { priority: 1 }]

  expect(sort(sortByHighestPriority, arrayWithPriorities)).toEqual(
    expectedResult,
  )
})

describe('sortByHighestId', () => {
  const arrayWithPriorities = [{ id: 1 }, { id: 2 }, { id: 3 }]

  const expectedResult = [{ id: 3 }, { id: 2 }, { id: 1 }]

  expect(sort(sortByHighestId, arrayWithPriorities)).toEqual(expectedResult)
})

describe('sortByHighestPriorityAndIndex', () => {
  const arrayWithPriorities = [
    { id: 1, priority: 4 },
    { id: 2, priority: 3 },
    { id: 3, priority: 2 },
    { id: 4, priority: 1 },
    { id: 5, priority: 4 },
  ]

  const expectedResult = [
    { id: 5, priority: 4 },
    { id: 1, priority: 4 },
    { id: 2, priority: 3 },
    { id: 3, priority: 2 },
    { id: 4, priority: 1 },
  ]

  expect(sort(sortByHighestPriorityAndIndex, arrayWithPriorities)).toEqual(
    expectedResult,
  )
})

describe('createAddSnackbarWithVariants', () => {
  let addSnackbar
  const curriedSnackbar = jest.fn()
  let addSnackbarWithVariants
  const msg = 'my awesome msg'

  beforeEach(() => {
    addSnackbar = jest.fn(() => curriedSnackbar)
    addSnackbarWithVariants = createAddSnackbarWithVariants(addSnackbar)
  })

  it('creates varianted addSnackbar functions', () => {
    expect(addSnackbarWithVariants).toMatchAsJSON({
      addSnackbar,
      addSuccessSnackbar: addSnackbar(SnackbarToken.success),
      addErrorSnackbar: addSnackbar(SnackbarToken.error),
      addWarningSnackbar: addSnackbar(SnackbarToken.warning),
      addInfoSnackbar: addSnackbar(SnackbarToken.info),
    })
  })

  it('creates proper functions', () => {
    expect(addSnackbarWithVariants.addSnackbar).toEqual(addSnackbar)
  })

  it('creates proper success fn ', () => {
    const { addSuccessSnackbar } = addSnackbarWithVariants

    addSuccessSnackbar(msg)

    expect(addSnackbar).toHaveBeenCalledWith(SnackbarToken.success)
    expect(curriedSnackbar).toHaveBeenCalledWith(msg)
  })

  it('creates proper error fn ', () => {
    const { addErrorSnackbar } = addSnackbarWithVariants
    addErrorSnackbar(msg)

    expect(addSnackbar).toHaveBeenCalledWith(SnackbarToken.error)
    expect(curriedSnackbar).toHaveBeenCalledWith(msg)
  })

  it('creates proper success fn ', () => {
    const { addWarningSnackbar } = addSnackbarWithVariants
    addWarningSnackbar(msg)

    expect(addSnackbar).toHaveBeenCalledWith(SnackbarToken.warning)
    expect(curriedSnackbar).toHaveBeenCalledWith(msg)
  })

  it('creates proper info fn ', () => {
    const { addInfoSnackbar } = addSnackbarWithVariants
    addInfoSnackbar(msg)

    expect(addSnackbar).toHaveBeenCalledWith(SnackbarToken.info)
    expect(curriedSnackbar).toHaveBeenCalledWith(msg)
  })
})
