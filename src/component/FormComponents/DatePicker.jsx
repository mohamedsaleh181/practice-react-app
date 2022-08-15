import React from 'react'
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import { ErrorMessage, Field } from 'formik'
import TextError from '../../pages/form/textError'

function DatePicker(props) {
  const {label, name, ...rest} = props
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field name={name}>
            {
                ({field, form})=>{
                    const {setFieldValue} = form // setFieldValue allow us to programatical set the value of the field
                    const {value} = field
                    return (
                      <DateView
                        id={name}
                        {...field}
                        {...rest}
                        selected={value}
                        onChange={(val) => setFieldValue(name, val)}
                      />


                    );
                }
            }
        </Field>
        <ErrorMessage name={name} component={TextError }/>
    </div>
  )
}

export default DatePicker
