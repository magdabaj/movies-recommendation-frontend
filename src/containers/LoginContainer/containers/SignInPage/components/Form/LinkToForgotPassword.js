import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import messages from '../../messages'
import Text from '../../../../../../components/Text'
import Row from '../../../../../../components/Row'
import { Sizes } from '../../../../../../components/Text/props'
import { themeColor } from '../../../../../../themes/fromTheme'

const Container = styled(Row)`
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${themeColor('border')};
`

const LinkToForgotPassword = () => (
  <Container>
    <Link to="/forgot-password">
      <Text lineHeight={Sizes.x3p5} message={messages.forgotPassword} />
    </Link>
  </Container>
)

export default LinkToForgotPassword
