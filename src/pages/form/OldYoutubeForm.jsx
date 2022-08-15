import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup' 



const initialValues = {
    //corresponding to name attribute in input tag we get name ,emai, channel
    name: 'mohamed',
    email: '',
    channel:''
}
const onSubmit = values =>{
    console.log('form data',values)
}
const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    channel: Yup.string().required('Required')
  })

const OldYoutubeForm = ()=>{
   
    // const validata = values =>{
    //     let errors = {}
    //     if(!values.name){
    //         errors.name = 'Reaquired'
    //     }
    //     if(!values.email){
    //         errors.email = 'Reaquired'
    //     }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //         errors.email = 'Invalid email format'
    //     }
    //     if(!values.channel){
    //         errors.channel = 'Reaquired'
    //     }
    //     return errors
    // }
    
    //managing the form state , handling form submission , validation and error messages
    // useFormik return some propreties help to handle our form
    // useFormik prop (values, handleChange, handleSubmit, errors)
    const formik = useFormik({ 
        initialValues,
        onSubmit,
        // validata
        validationSchema
    })
    console.log('form errors',formik.errors)
    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <input
              type="text"
              id="channel"
              name="channel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.channel}
            />
            {formik.touched.channel && formik.errors.channel ? (
              <div className="error">{formik.errors.channel}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
}
export default OldYoutubeForm