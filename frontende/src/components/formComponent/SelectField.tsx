import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import Select from 'react-select'

function SelectField(props:any)  {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-control">
      <label className="formLabel">{label}</label>
      <Field name={name} {...rest}>
        {({ field,form }:any) => {
          console.log(form);
          return (
            <Select
            options={options}
            name={field.name}
            value={options ? options.find((option:any) => option.id === field.value) : null}
            onChange={(option: any) => {form.setFieldTouched(field.name, true); form.setFieldValue(field.name, option.value)
            }}
            onBlur={field.onBlur}   
            {...rest}
          />
          )
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default SelectField;
