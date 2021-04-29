import React from 'react'
import PropTypes from 'prop-types'
import ThemeText from '../../ThemeText'
import styled from 'styled-components'
import { themeSpacing } from '../../../themes/fromTheme'

const Label = styled(ThemeText)`
  margin-left: ${themeSpacing(0.5)};
  margin-bottom: ${themeSpacing(0.25)};
`

const InfoInputLabel = ({ label }) => {
  const props = {
    fontSize: 'button',
    fontWeight: 'bold',
    text: label,
  }

  return <Label {...props} />
}

InfoInputLabel.propTypes = {
  label: PropTypes.string,
}

export default InfoInputLabel
