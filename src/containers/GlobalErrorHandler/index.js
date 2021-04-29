import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { usePushTo } from '../../utils/hooks/usePushTo'
import { multipleChildrenPropType } from '../../utils/propTypes/childrenPropTypes'
import FallbackComponent from './components/FallbackComponent'
import urls from '../../utils/urls'

const GlobalErrorHandler = ({ children }) => {
  const pushToError = usePushTo( '/error')

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent} onError={pushToError}>
      {children}
    </ErrorBoundary>
  )
}

GlobalErrorHandler.propTypes = {
  children: multipleChildrenPropType,
}

export default GlobalErrorHandler
