import React from 'react'
import fallbackMessages from './messages'
import styled, { createGlobalStyle } from 'styled-components'
import ErrorPage from '../../../../components/ErrorPage'
import { getColor } from '../../../../themes/color/getColor'
import Color from '../../../../themes/color/constants'
import Button from '../../../../components/Button'
import { refreshApp } from '../../../../utils/refreshApp'

const StyledBody = createGlobalStyle`
  body {
      background: linear-gradient(
      205.28deg,
      ${getColor(Color.token.appBackground01)} 14.05%,
      ${getColor(Color.token.appBackground02)} 102.1%
    );
  }
`
const Container = styled.div`
  height: 100vh;
`

const FallbackComponent = () => (
  <>
    <StyledBody />
    <Container data-testid="fallback-component">
      <ErrorPage description={fallbackMessages.anErrorOccurred}>
        <Button
          message={fallbackMessages.goBackToTheApp}
          onClick={refreshApp}
        />
      </ErrorPage>
    </Container>
  </>
)

export default FallbackComponent
