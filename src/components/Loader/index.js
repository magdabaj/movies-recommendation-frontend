/**
 *
 * Loader
 *
 */

import React, { memo } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'
import Container from './Container'

const Loader = ({ position, height, size, thickness, className }) => (
  <Container
    data-testid="loader"
    position={position}
    height={height}
    className={className}
  >
    <CircularProgress size={size} thickness={thickness} />
  </Container>
)

Loader.propTypes = {
  position: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  thickness: PropTypes.number,
}

Loader.defaultProps = {
  position: 'inherit',
  height: '90%',
}

export default memo(Loader)
