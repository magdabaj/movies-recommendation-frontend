import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled, { css as scss } from 'styled-components'
import { styledComponentsCssPropType } from '../../utils/propTypes/styledComponentsCssPropType'
import { themeTypographyFontSize } from '../../themes/fromTheme'
import { path, prop } from 'rambda'

const getFontSize = props => {
  const fontSize = path(['fontSize'], props)
  if (!fontSize) return null
  const size = themeTypographyFontSize(fontSize)(props)

  const viewport = path(['viewport'], props)
  const viewportCss = viewport
    ? scss`
      width: ${size};
      height: ${size};
      `
    : null

  return scss`
      font-size: ${size};
      ${viewportCss}
  `
}

const Container = styled.i`
  ${prop('css')}
  ${getFontSize}
`

const FontAwesomeIconBase = ({
                               iconClassName,
                               className,
                               dataTestId = 'font-awesome-icon',
                               'data-testid': testId = dataTestId,
                               fontSize,
                               viewport = true,
                               css,
                             }) => (
  <Container
    css={css}
    className={classNames(className, iconClassName)}
    data-testid={testId}
    fontSize={fontSize}
    viewport={viewport}
  />
)

FontAwesomeIconBase.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
  fontSize: PropTypes.string,
  css: styledComponentsCssPropType,
  viewport: PropTypes.bool,
  'data-testid': PropTypes.string,
}

export default FontAwesomeIconBase
