import * as Yup from 'yup'
import {
  confirmedPassword,
  password,
  username,
} from '../../../../commonSchema'

const schema = Yup.object().shape({
  username,
  password,
  confirmedPassword: confirmedPassword(),
})

export default schema
