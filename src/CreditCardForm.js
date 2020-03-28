import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { useFormik, FormikProvider } from 'formik'
import { Box, Button } from 'rebass'
import TextInput from './components/Form/TextInput'
import * as Yup from 'yup'

export const CreditCardForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
      cvc: '',
      expiry: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('field name is required'),
      number: Yup.number().required('field number is required'),
      cvc: Yup.string().required('field cvc is required'),
      expiry: Yup.string().required('field expiry is required')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  const { handleSubmit, values } = formik

  return (
    <FormikProvider value={formik}>
      <form onSubmit={handleSubmit}>
        <h1>Formulario</h1>
        <Cards
          cvc={values.cvc}
          expiry={values.expiry}
          focused={true}
          name={values.name}
          number={values.number}
        />
        <Box pt="50px">
          <div>
            <TextInput name="name" label="name" />
          </div>
          <div>
            <TextInput name="number" label="number" />
          </div>
          <div>
            <TextInput name="expiry" label="date validate" />
          </div>
          <div>
            <TextInput name="cvc" label="cvc" />
          </div>
        </Box>
        <Button variant='secondary'>Submit</Button>
      </form>
    </FormikProvider>
  )
}

export default CreditCardForm
