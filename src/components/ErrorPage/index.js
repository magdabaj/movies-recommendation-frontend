import React from 'react'
import styled from 'styled-components'
import { Breakpoint, themeBreakpoint, Type } from '../../themes/fromTheme/breakpoint'
import Row from '../Row'
import ErrorPageDetails from './components/ErrorPageDetails'

const Container = styled(Row)`
  margin-left: 10%;
  margin-right: 10%;
  overflow: hidden;
  height: 100%;
  justify-content: space-around;
  ${themeBreakpoint(Type.down, Breakpoint.md)} {
    align-items: center;
    flex-direction: column;
  }
`

// eslint-disable-next-line react/prop-types
const ErrorPage = ({ 'data-testid': testId, children, description }) => {
  console.log('descr', description)
  return (
    <Container data-testid={testId}>
      <ErrorPageDetails description={description}>{children}</ErrorPageDetails>
    </Container>
  )
}

export default ErrorPage
