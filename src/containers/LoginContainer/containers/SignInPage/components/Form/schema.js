import * as Yup from 'yup'
import { password, username } from '../../../../commonSchema'

const schema = Yup.object().shape({
  username,
  password,
})

export default schema
