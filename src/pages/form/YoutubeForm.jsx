import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup' 
import TextError from './textError'

const initialValues = {
    //corresponding to name attribute in input tag we get name ,emai, channel
    name: 'mohamed',
    email: '',
    channel:'',
    comments:'',
    address: '',
    // if we want to group some data in its own separated object 
    // reason could be that api accept the data in such a pattern
    //nested objects
    social: {
      facebook: '',
      twitter: '',
    },
    //if we need to store data in an array like store phone numbers
    phoneNumbers: ['',''],
    phNumbers:[''],
}
const onSubmit = values =>{
    console.log('form data',values)
    // console.log('submit props', onSubmitProps)
    // onSubmitProps.setSubmitting(false) // to set submitting to false after submiting process success
}
const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required!'),
    channel: Yup.string().required('Required!'),
    address: Yup.string().required('Required!'),
  })

  //custom validate component
const validateComments= (values)=>{
  let error
  if(!values){
    error= 'Required!'
  }
  return error
}
const YoutubeForm = ()=>{ 
    //managing the form state , handling form submission , validation and error messages
    // useFormik return some propreties help to handle our form
    // useFormik prop (values, handleChange, handleSubmit, errors)
    
    // console.log('form errors',formik.errors)
    return (
      // replace the useForm() with Formik tag
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // to prevent validation run onchange just run onblur
        validateOnChange={false}
        // to prevent validation run onchange and onblur
        // validateOnBlur={false}
        //validateOnMount // run validate at the first so error object will not be empty
        //submitProps.resetForm() // to reset the form after success submit
        //or we can add a reset button with type reset
      >
        {formik => {
          return(<>
            {/* replace form with Form tag and remove onsubmit prop Form component will handle it */}
        <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          {/* replace each input tag with Field Component and remove getFieldProps methods */}
          <Field
            type="text"
            id="name"
            name="name"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.name}
            //add these props with a single line
            // {...formik.getFieldProps("name")}
          />
          {/* replace a block of code to render error message with ErrorMessage component */}
          {/* {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null} */}
          {/* <ErrorMessage name="name" /> return a text node in html */}
          <ErrorMessage name="name" component={TextError}/> {/*we can use div in component to render a div */}
          {/* we can use ulternative method to render error we use render props pattern we will use it in email field */}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field
            type="text"
            id="email"
            name="email"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.email}
            //add these props with a single line
            // {...formik.getFieldProps("email")}
          />
          {/* {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null} */}
          {/* ErrorMessage component will handle rendering the error if it toucked or error exist */}
          <ErrorMessage name="email">
            {
              (errorMsg) => <div className="error">{errorMsg}</div>
            }
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.channel}
            //add these props with a single line
            // {...formik.getFieldProps("channel")}
            placeholder="Youtube Channel Name"
          />
          {/* {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null} */}
          <ErrorMessage name="channel" />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          {/* as prop to specify the field type 
          we can use component prop to do the same but as is prefered*/}
          {/* we use custom validate for comments with validate props */}
          <Field as="textarea" name="comments" id="comments" validate={validateComments} /> 
          <ErrorMessage name='comments' component={TextError}/>
        </div>

        {/* make a custum component  with render props pattern*/}
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name='address'>
            {
              (props)=>{
                const {field, form, meta} = props
                // if we conole field we will see that it will take care of name ,value, handleChange, handleBlur 
                // we can spread meta to handle validation errors also
                return (
                  <div>
                    <input type='text' id='address'{...field}/>
                    {/* to handle the error */}
                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                  </div>
                )
              }
            }
          </Field>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook Profile</label>
          <Field type='text' name='social.facebook' id='facebook'/>
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter Profile</label>
          <Field type='text' name='social.twitter' id='twitter'/>
        </div>

        <div className="form-control">
          <label htmlFor="primaryPh">Primary Phone Number</label>
          <Field type='text' name='phoneNumbers[0]' id='primaryPh'/>
        </div>

        <div className="form-control">
          <label htmlFor="secondaryPh">secondary Phone Number</label>
          <Field type='text' name='phoneNumbers[1]' id='secondaryPh'/>
        </div>

         <div className='form-control'>
            <label>List of phone numbers</label>
            <FieldArray name='phNumbers'>
              {fieldArrayProps => {
                const { push, remove, form } = fieldArrayProps
                const { values } = form
                const { phNumbers } = values
                // console.log('fieldArrayProps', fieldArrayProps)
                // console.log('Form errors', form.errors)
                return (
                  <div>
                    {phNumbers.map((phNumber, index) => (
                      <div key={index}>
                        <Field name={`phNumbers[${index}]`} />
                        {index > 0 && (
                          <button type='button' onClick={() => remove(index)}>
                            -
                          </button>
                        )}
                      </div>
                    ))}
                    <button type='button' onClick={() => push('')}>
                      +
                    </button>
                  </div>
                )
              }}
            </FieldArray>
          </div>

        <button type="submit" disabled={!formik.isValid}>Submit</button>
        {/* during the submiting process disabled the submit button
        but in this case we have to set issubmitting to false manual when there is no errors
        cause we dont know when the response will back from the servier
        so we add new props to onSubmit function called (onSubmitingProps) onSubmitingProps.setSubmittin(false) */}
        {/* <button type="submit" disabled={!formik.isSubmitting}>Submit</button> */}
      </Form>
      </>)
        }}
      </Formik>
    );
}
export default YoutubeForm

// #################################################################
// Modal code

// import React, { useState } from 'react'
// import {
//   Formik,
//   Form,
//   Field,
//   ErrorMessage,
//   FieldArray,
//   FastField
// } from 'formik'
// import * as Yup from 'yup'
// import TextError from './TextError'

// const initialValues = {
//   name: 'Vishwas',
//   email: '',
//   channel: '',
//   comments: '',
//   address: '',
//   social: {
//     facebook: '',
//     twitter: ''
//   },
//   phoneNumbers: ['', ''],
//   phNumbers: ['']
// }

// const savedValues = {
//   name: 'Vishwas',
//   email: 'v@example.com',
//   channel: 'codevolution',
//   comments: 'Welcome to Formik',
//   address: '221B Baker Street',
//   social: {
//     facebook: '',
//     twitter: ''
//   },
//   phoneNumbers: ['', ''],
//   phNumbers: ['']
// }

// const onSubmit = (values, submitProps) => {
//   console.log('Form data', values)
//   console.log('submitProps', submitProps)
//   submitProps.setSubmitting(false)
//   submitProps.resetForm()
// }

// const validationSchema = Yup.object({
//   name: Yup.string().required('Required'),
//   email: Yup.string()
//     .email('Invalid email format')
//     .required('Required'),
//   channel: Yup.string().required('Required'),
//   comments: Yup.string().required('Required')
// })

// const validateComments = value => {
//   let error
//   if (!value) {
//     error = 'Required'
//   }
//   return error
// }

// function YoutubeForm () {
//   const [formValues, setFormValues] = useState(null)
//   return (
//     <Formik
//       initialValues={formValues || initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//       enableReinitialize
//       // validateOnChange={false}
//       // validateOnBlur={false}
//       // validateOnMount
//     >
//       {formik => {
//         console.log('Formik props', formik)
//         return (
//           <Form>
//             <div className='form-control'>
//               <label htmlFor='name'>Name</label>
//               <Field type='text' id='name' name='name' />
//               <ErrorMessage name='name' component={TextError} />
//             </div>

//             <div className='form-control'>
//               <label htmlFor='email'>Email</label>
//               <Field type='email' id='email' name='email' />
//               <ErrorMessage name='email'>
//                 {error => <div className='error'>{error}</div>}
//               </ErrorMessage>
//             </div>

//             <div className='form-control'>
//               <label htmlFor='channel'>Channel</label>
//               <Field
//                 type='text'
//                 id='channel'
//                 name='channel'
//                 placeholder='YouTube channel name'
//               />
//               <ErrorMessage name='channel' />
//             </div>

//             <div className='form-control'>
//               <label htmlFor='comments'>Comments</label>
//               <Field
//                 as='textarea'
//                 id='comments'
//                 name='comments'
//                 validate={validateComments}
//               />
//               <ErrorMessage name='comments' component={TextError} />
//             </div>

//             <div className='form-control'>
//               <label htmlFor='address'>Address</label>
//               <FastField name='address'>
//                 {({ field, form, meta }) => {
//                   // console.log('Field render')
//                   return (
//                     <div>
//                       <input type='text' {...field} />
//                       {meta.touched && meta.error ? (
//                         <div>{meta.error}</div>
//                       ) : null}
//                     </div>
//                   )
//                 }}
//               </FastField>
//             </div>

//             <div className='form-control'>
//               <label htmlFor='facebook'>Facebook profile</label>
//               <Field type='text' id='facebook' name='social.facebook' />
//             </div>

//             <div className='form-control'>
//               <label htmlFor='twitter'>Twitter profile</label>
//               <Field type='text' id='twitter' name='social.twitter' />
//             </div>

//             <div className='form-control'>
//               <label htmlFor='primaryPh'>Primary phone number</label>
//               <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
//             </div>

//             <div className='form-control'>
//               <label htmlFor='secondaryPh'>Secondary phone number</label>
//               <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
//             </div>

//             <div className='form-control'>
//               <label>List of phone numbers</label>
//               <FieldArray name='phNumbers'>
//                 {fieldArrayProps => {
//                   const { push, remove, form } = fieldArrayProps
//                   const { values } = form
//                   const { phNumbers } = values
//                   // console.log('fieldArrayProps', fieldArrayProps)
//                   // console.log('Form errors', form.errors)
//                   return (
//                     <div>
//                       {phNumbers.map((phNumber, index) => (
//                         <div key={index}>
//                           <Field name={`phNumbers[${index}]`} />
//                           {index > 0 && (
//                             <button type='button' onClick={() => remove(index)}>
//                               -
//                             </button>
//                           )}
//                         </div>
//                       ))}
//                       <button type='button' onClick={() => push('')}>
//                         +
//                       </button>
//                     </div>
//                   )
//                 }}
//               </FieldArray>
//             </div>
//             {/* <button
//               type='button'
//               onClick={() => formik.validateField('comments')}
//             >
//               Validate comments
//             </button>
//             <button
//               type='button'
//               onClick={() => formik.setFieldTouched('comments')}
//             >
//               Visit comments
//             </button>
//             <button type='button' onClick={() => formik.validateForm()}>
//               Validate all
//             </button>
//             <button
//               type='button'
//               onClick={() =>
//                 formik.setTouched({
//                   name: true,
//                   email: true,
//                   channel: true,
//                   comments: true
//                 })
//               }
//             >
//               Visit all
//             </button> */}
//             <button type='button' onClick={() => setFormValues(savedValues)}>
//               Load saved data
//             </button>
//             <button type='reset'>Reset</button>
//             <button
//               type='submit'
//               disabled={!formik.isValid || formik.isSubmitting}
//             >
//               Submit
//             </button>
//           </Form>
//         )
//       }}
//     </Formik>
//   )
// }

// export default YoutubeForm