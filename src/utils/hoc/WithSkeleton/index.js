import PropTypes from 'prop-types'
import Skeleton from '../../../components/Skeleton'
import React from 'react'

const withSkeleton = (Component, skeletonProps = {}) => {
  const LoadDependency = ({ isLoading, ...props }) =>
    isLoading ? <Skeleton {...skeletonProps} /> : <Component {...props} />

  LoadDependency.propTypes = {
    isLoading: PropTypes.bool,
  }

  return LoadDependency
}

export default withSkeleton
