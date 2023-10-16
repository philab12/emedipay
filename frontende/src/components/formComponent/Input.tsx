import React from 'react';
import {Field, ErrorMessage} from "formik"
import TextError from './TextError';



export default function Input(props:any) {
    const {label, name, ...rest} = props;
  return (
    <div>

<label htmlFor={name} className="formLabel">{label}</label>
        <Field className="formInput" id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError} />
      
    </div>
  )
}
