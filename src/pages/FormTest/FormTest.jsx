import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormControl from '../../component/FormComponents/FormControl'

function FormTest() {
  const dropdownOptions = [
    {key: 'select an option' , value:''},
    {key: 'option 1' , value:'option1'},
    {key: 'option 2' , value:'option2'},
    {key: 'option 3' , value:'option3'},
  ]
  const radioOptions = [
    {key: 'option 1' , value:'option1'},
    {key: 'option 2' , value:'option2'},
    {key: 'option 3' , value:'option3'},
  ]
  const checkboxOptions = [
    {key: 'option 1' , value:'checkOption1'},
    {key: 'option 2' , value:'checkOption2'},
    {key: 'option 3' , value:'checkOption3'},
  ]
  const initialValues={
    email: '',
    description:'',
    selectOption:'',
    radioOptions:'',
    checkboxOptions:[],//it take a myltiple values so we set it an empty array
    birthDate: null
  }
  const validationSchema= Yup.object({
    email: Yup.string().required('Required').email('Invalid Email'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOptions: Yup.string().required('Required'),
    checkboxOptions: Yup.array().required('Required'), // cause it is an array in intialvalues
    birthDate: Yup.date().required('Required').nullable(), // nullable allow us to set null value
  })
  const onSubmit= values => console.log('form data', values)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      {(formik) => {
        return (
          <>
            <Form>
              <FormControl
                control="input"
                type="email"
                label="email"
                name="email"
                placeholder='Enter your email'
              />
              <FormControl
                control='textarea'
                as='textarea'
                label='Description'
                name='description'
                placeholder='Write your description...'
              />
              <FormControl
                control='select'
                label='Select a topic'
                name='selectOption'
                options={dropdownOptions}
              />
              <FormControl
                control='radio'
                label='Radio Topic'
                name='radioOptions'
                options={radioOptions}
              />
              <FormControl
                control='checkbox'
                label='Checkbox Topics'
                name='checkboxOptions'
                options={checkboxOptions}
              />
              <FormControl
                control='date'
                label='Pick a date'
                name='birthDate'
                placeholder='ladsfklasjdflk'
              />
              <button type="submit">Submit</button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default FormTest
