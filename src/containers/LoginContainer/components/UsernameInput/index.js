import React from 'react'
import messages from '../../messages'
import Input from '../../../../components/Form/components/Input'

const UsernameInput = () => (
  <Input
    id="username"
    placeholder={messages.usernamePlaceHolder}
    label={messages.username}
  />
)

export default UsernameInput
