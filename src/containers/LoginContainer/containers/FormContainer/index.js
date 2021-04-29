import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Column from '../../../../components/Column'
import { styledComponentsCssPropType } from '../../../../utils/propTypes/styledComponentsCssPropType'
import { prop } from 'rambda'

const ChildrenContainer = styled(Column)`
  flex: 1;
  ${prop('containerCss')}
`
const FormContainer = ({ children, footer, containerCss }) => (
  <>
    <ChildrenContainer containerCss={containerCss}>
      {children}
    </ChildrenContainer>
    {footer}
  </>
)

FormContainer.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.node,
  containerCss: styledComponentsCssPropType,
}

export default FormContainer
