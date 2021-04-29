import Switch from '../../../Switch'
import ThemeText from '../../../ThemeText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import React from 'react'
import { inputClassNames } from './helpers'
import { Field } from 'formik'
import PropTypes from 'prop-types'

// eslint-disable-next-line no-unused-vars
const SwitchInput = ({ name, labelMessage }) => (
  <Field name={name} type="checkbox">
    {({ field, form }) => (
      <>
        <FormControlLabel
          control={
            <Switch
              {...field}
              name={name}
              id={name}
              checked={form.values[name]}
              handleChange={value => form.setFieldValue(name, value)}
              color="default"
              dataTestId={name}
              className={inputClassNames(form, name)}
            />
          }
          label={
            <ThemeText
              message={labelMessage}
              lineHeight={2}
              fontSize="consent"
            />
          }
        />
      </>
    )}
  </Field>
)

SwitchInput.propTypes = {
  labelMessage: PropTypes.string,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
}

export default SwitchInput
