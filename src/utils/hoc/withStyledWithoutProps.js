import styled from 'styled-components'
import React from 'react'
import { splitObjectFromProps } from '../fp'

const withStyledWithoutProps = (Component, propNamesForStyles) =>
  styled(props => {
    const [, rest] = splitObjectFromProps(propNamesForStyles, props)
    return <Component {...rest} />
  })

export default withStyledWithoutProps
