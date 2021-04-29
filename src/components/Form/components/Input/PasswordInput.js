import React from 'react'
import PropTypes from 'prop-types'
import Input from './index'

const PasswordInput = ({ id, label, placeholder }) => (
  <Input id={id} type="password" label={label} placeholder={placeholder} />
)

PasswordInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

PasswordInput.defaultProps = {
  id: 'password',
  label: 'Password',
  placeholder: 'Password',
}

export default PasswordInput
