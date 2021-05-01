import * as Yup from 'yup'
import messages from './messages'
import CustomYupString from '../../utils/yup/string'
import equalTo from "../../utils/yup/equalTo";
Yup.addMethod(Yup.string, 'equalTo', equalTo)

// export const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]*[.]?[a-zA-Z0-9]+$/
export const emailRegex = /^$|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

export const username = CustomYupString.required(messages.usernameIsRequired)
  .min(3, messages.usernameMinCharacters)
  .max(20, messages.usernameMaxCharacters)
  .matches(emailRegex, messages.invalidUsername)

// export const email = Yup.string()
//   .max(255, messages.emailMaximum)
//   .matches(emailRegex, messages.invalidEmail)

// export const usernameOrEmail = CustomYupString.required(
//   messages.usernameEmailIsRequired,
// )
//   .min(3, messages.usernameEmailMinCharacters)
//   .max(255, messages.usernameEmailMaxCharacters)
//   .matches(messages.invalidUsernameOrEmail, emailRegex)

export const confirmedPassword = (passwordPropName = 'password') =>
  CustomYupString.equalTo(
    Yup.ref(passwordPropName),
    messages.passwordsMustMatch,
  )
    .required(messages.confirmedPasswordIsRequired)
    // .trim()

export const password = Yup.string()
  .required(messages.passwordIsRequired)
  .min(5, messages.passwordMinCharacters)
  .max(40, messages.passwordMaxCharacters)
  .trim()
