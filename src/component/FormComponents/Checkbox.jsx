import React from 'react'
import { ErrorMessage, Field } from 'formik'
import TextError from '../../pages/form/textError'


function Checkbox(props) {
  const{label,name,options,...rest} = props
  return (
    <div className='form-control'>
    <label>{label}</label>
    <Field name={name} >
      {({ field }) => {
          console.log('checkbox field', field)
          // name, onBlur, onChange
        return options.map(option => {
          return (
            <React.Fragment key={option.key}>
              <input
                type='checkbox'
                id={option.value}
                {...field} //to handle the name , onBlur, onChange
                {...rest}
                value={option.value}
                checked={field.value.includes(option.value)}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>
          )
        })
      }}
    </Field>
    <ErrorMessage component={TextError} name={name} />
  </div>
  )
}

export default Checkbox