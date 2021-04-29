/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import MuiSkeleton from '@material-ui/lab/Skeleton'
import styled from 'styled-components'
import { getColor } from '../../themes/color/getColor'
import Color from '../../themes/color/constants'
import { path, omit } from 'rambda'
import { ifProp } from '../../utils/obj'
import { themeShape, themeSpacing } from '../../themes/fromTheme'

const getBorderRadius = props => {
  const radius = path(['radius'], props)
  if (!radius) return null

  return themeShape(radius)(props)
}

const getSpacing = props => {
  const paddingBottom = path(['spaceBetween'], props)
  if (!paddingBottom) return null

  return themeSpacing(paddingBottom)(props)
}

const DefaultSkeleton = styled(props => (
  <MuiSkeleton {...omit(['fullWidth', 'spaceBetween'], props)} />
))`
  &.MuiSkeleton-root {
    background-color: ${getColor(Color.token.infoWidgetSkeleton01)};
    border-radius: ${getBorderRadius};
    width: ${ifProp('fullWidth', { onTrueValue: '100% !important' })};
    margin-bottom: ${getSpacing};
  }
  &.MuiSkeleton-text {
    transform: none;
  }
`

const Skeleton = ({
                    width = 200,
                    height = 22,
                    radius,
                    fullWidth,
                    rows = 1,
                    spaceBetweenRows = 1,
                  }) =>
  new Array(rows).fill().map((row, i) => {
    const areRows = rows > 1
    const isLast = i === rows - 1

    const spaceBetween = areRows && !isLast ? spaceBetweenRows : null

    return (
      <DefaultSkeleton
        data-testid={`skeleton-${i}`}
        key={i}
        width={width}
        height={height}
        radius={radius}
        fullWidth={fullWidth}
        animation="wave"
        spaceBetween={spaceBetween}
      />
    )
  })

Skeleton.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fullWidth: PropTypes.bool,
  radius: PropTypes.string,
  spaceBetween: PropTypes.number,
  rows: PropTypes.number,
}

export default Skeleton
