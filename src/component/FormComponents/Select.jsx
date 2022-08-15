import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from '../../pages/form/textError'

function Select(props) {
  const {label, name, options, ...rest} = props
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field
          as='select'
          name={name}
          id={name}
          {...rest}
        >
          {
            options.map((option)=>{
                return(
                  <option key={option.value} value={option.value}>{option.key}</option>
                )
            })
          }
        </Field>
        <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Select