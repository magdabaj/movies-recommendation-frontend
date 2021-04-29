/**
 *
 * ButtonContainer
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeSpacing } from '../../themes/fromTheme'
import { multipleChildrenPropType } from '../../utils/propTypes/childrenPropTypes'
import { path } from 'rambda'

const isColumn = (ifColumn, ifNotColumn) => props =>
  props.column ? ifColumn : ifNotColumn

const columnRelatedCss = css`
  flex-direction: ${isColumn('column', 'row')};
  button + button {
    margin-${isColumn('top', 'left')}: ${themeSpacing('spacing')};
  }
`

const getSpacing = spacingName => props => {
  const sideSpacing = path([spacingName], props)
  return sideSpacing ? themeSpacing(spacingName) : null
}

const Container = styled.div`
  padding-left: ${getSpacing('sideSpacing')};
  padding-right: ${getSpacing('sideSpacing')};
  margin-top: ${themeSpacing('topSpacing')};
  margin-bottom: ${getSpacing('bottomSpacing')};
  display: flex;
  ${columnRelatedCss};
  width: 100%;
  ${props =>
  props.padding &&
  css`
      padding: ${themeSpacing(props.padding)};
    `};
`

const ButtonContainer = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
)

ButtonContainer.propTypes = {
  spacing: PropTypes.number,
  children: multipleChildrenPropType.isRequired,
  topSpacing: PropTypes.number,
  sideSpacing: PropTypes.number,
  bottomSpacing: PropTypes.number,
  className: PropTypes.string,
}

ButtonContainer.defaultProps = {
  spacing: 2,
  topSpacing: 4,
}

export default ButtonContainer
