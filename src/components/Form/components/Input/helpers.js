
import { path } from 'rambda'
import classNames from 'classnames'

const getErrorsTouched = (form, name) => {
  const hasErrors = path(['errors', name], form)
  const wasTouched = path(['touched', name], form)

  return {
    hasErrors,
    wasTouched,
  }
}

export const isValidField = (form, name) => {
  const { hasErrors, wasTouched } = getErrorsTouched(form, name)

  return {
    isInvalid: hasErrors && wasTouched,
    isValid: !hasErrors && wasTouched,
  }
}

export const inputClassNames = (form, name, others = '') => {
  const { isValid, isInvalid } = isValidField(form, name)

  return classNames(
    {
      'is-invalid': isInvalid,
      'is-valid': isValid,
    },
    others,
  )
}
