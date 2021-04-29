import keys  from 'lodash/keys'
import isEmpty from 'lodash/isEmpty'
import flattenDeep  from 'lodash/flattenDeep'
import { asyncForEach } from '../../utils/collection'

// todo @anyone refactor to async
export const validateAndSubmit = (
  { values, handleSubmit },
  args,
  schema,
  addErrorSnackbar,
  clearSnackbars,
) => {
  getSchemaErrors(schema, values).then(errorMessages => {
    clearSnackbars()
    if (!isEmpty(errorMessages)) {
      addErrorSnackbar(errorMessages)
    }
  })
  handleSubmit(...args)
}

export const validateKey = async (schema, key, formValues) => {
  try {
    await schema.validateAt(key, formValues)
    return null
  } catch ({ errors }) {
    return errors
  }
}

const getSchemaErrors = async (schema, formValues) => {
  const schemaKeys = keys(schema.describe().fields)
  const errors = await asyncForEach(schemaKeys, key =>
    validateKey(schema, key, formValues),
  )

  return flattenDeep(errors)
}
