import React from 'react'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSnackbarContext } from '../../containers/Snakcbar/hooks/useSnackbarContext'
import { validateAndSubmit } from './validate'

// todo @anyone change Fields to fields

const StyledForm = styled.form`
  flex: 1;
`

const FormPage = ({
                    initialValues,
                    onValidSubmit,
                    schema,
                    Fields,
                    testId = 'form',
                  } = {}) => {
  const handleSubmit = (values, { setSubmitting }) => {
    const setSubmittingFalse = () => setSubmitting(false)
    onValidSubmit(values, setSubmittingFalse)
  }
  const { addErrorSnackbar, clearSnackbars } = useSnackbarContext()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {props => (
        <StyledForm
          /* eslint-disable-next-line react/prop-types */
          onReset={props.handleReset}
          onSubmit={(...args) =>
            validateAndSubmit(
              props,
              args,
              schema,
              addErrorSnackbar,
              clearSnackbars,
            )
          }
          data-testid={testId}
          noValidate
        >
          <Fields {...props} />
        </StyledForm>
      )}
    </Formik>
  )
}

FormPage.propTypes = {
  initialValues: PropTypes.object.isRequired,
  schema: PropTypes.object.isRequired,
  onValidSubmit: PropTypes.func.isRequired,
  Fields: PropTypes.func.isRequired,
  testId: PropTypes.string,
}

export default FormPage
