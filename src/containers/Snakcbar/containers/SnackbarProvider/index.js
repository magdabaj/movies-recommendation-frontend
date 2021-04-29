import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SnackbarContainer from '../../components/SnackbarContainer'
import Snackbar from '../../index'
import { SnackbarContext } from '../../context'
import {
  createAddSnackbarWithVariants,
  createSnackMsg,
  removeByIdFilter,
} from './common'
import { useQueuedSnackbarMessages } from '../../hooks/useQueuedSnackbarMessages'
import { multipleChildrenPropType } from '../../../../utils/propTypes/childrenPropTypes'
import { generateSequentialId } from '../../../../utils/generateSequentialId'
import { curry, path } from 'rambda'
import isArray from 'lodash/isArray'
const SnackbarProviderBase = SnackbarContext.Provider

/**
 * @todo @przemek.nowak || @chris.hoffman - refactor it to structure
 * <Snackbar />
 * <Provider>...RestChildren</Provider>
 */
const SnackbarProvider = ({ maxQueueSize = 6, children }) => {
  const [snackbarSeq] = useState(generateSequentialId())
  const [snackbarMessagesQueue, setMsgQueue] = useState([])

  const addSnackbar = (variantToken, message) => {
    const snackMessage = createSnackMsg(snackbarSeq.id(), variantToken, message)

    setMsgQueue(stateMessages => [...stateMessages, snackMessage])
  }

  // eslint-disable-next-line consistent-return
  const handleAddSnackbars = curry((variantToken, message) => {
    if (!isArray(message)) return addSnackbar(variantToken, message)

    message.forEach((msg, i) => {
      const token = isArray(variantToken) && path([i], variantToken) // if many variants take variantToken[i]
      addSnackbar(token || variantToken, msg)
    })
  })

  const clearSnackbars = () => setMsgQueue([])
  const removeSnackbar = idToDelete =>
    setMsgQueue(stateMessages => removeByIdFilter(idToDelete, stateMessages))

  const queuedSnackbars = useQueuedSnackbarMessages(
    snackbarMessagesQueue,
    maxQueueSize,
  )

  return (
    <SnackbarProviderBase
      value={{
        snackbarMessagesQueue,
        maxQueueSize,
        clearSnackbars,
        removeSnackbar,
        ...createAddSnackbarWithVariants(handleAddSnackbars),
      }}
    >
      {children}
      <SnackbarContainer>
        {queuedSnackbars.map(({ id, message, variant }) => (
          <Snackbar key={id} id={id} text={message} variant={variant} />
        ))}
      </SnackbarContainer>
    </SnackbarProviderBase>
  )
}

SnackbarProvider.propTypes = {
  maxQueueSize: PropTypes.number,
  children: multipleChildrenPropType,
}

export default SnackbarProvider
