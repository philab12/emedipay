import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "../../api/axios";
import { Formik, Form } from "formik";
import * as yup from "yup"
import { useGetData } from '../../hooks/useGetData';
import FormikControl from '../formComponent/FormikControl';
// import Select, { Option, ReactSelectProps } from 'react-select'

type CreateSupportProps = {
  
   handleChangeSupportPortal:() => void;
}




type FormValues = {
 
     "user":
     {
       first_name:string;
      last_name:string;
      contact1:string;
      contact2?:string | undefined | null;
      country_id:string;
      state_id:string;
      email:string;
      password:string;
      confirm_password:string;
     }
   

   "user_portals":{
      "portal":string;
      "user_level":string;
      "status":string;
   }[],

   "supports":{}[]
 
 }








const CreateSupport = ({handleChangeSupportPortal} :CreateSupportProps ) => {

   // const CountryOption = [
   //    { value: '', label: 'Select an option' },
   //    { value: 'foo', label: 'Foo' },
   //    { value: 'bar', label: 'Bar' },
   // ]



   const initialValues: FormValues = {
     user:{
      first_name: "",
      last_name: "",
      contact1:"",
      contact2:"",
      country_id: "",
      state_id: "",
      email:"",
      password:"",
      confirm_password:""

     },

     "user_portals":[{
      "portal":"SUPPORT",
      "user_level":"SUPPORT",
      "status": "PENDING"
     }],
     "supports":[{

     }]
  }

   


  const validationSchema = yup.object({
   user: yup.object({

      first_name: yup.string().max(200, "First Name Exceeds The Maximum Length").required("First Name Is Required"),
      last_name: yup.string().max(200, "Last Name Exceeds The Maximum Length").required("Last Name Is Required"),
      contact1: yup.string().max(15, "Contact1 Exceeds The Maximum Length").required("Contact1 Is Required"),   
      contact2: yup.string().notRequired().max(15, "Contact2 Exceeds The Maximum Length"), 
      country_id: yup.string().required("Country Is Required"),
      state_id: yup.string().required("State Is Required"),
      email: yup.string()
            .max(300, "Email Exceeds The Maximum Length")
            .required("Email Is Required")
            .email("Email Format Is Not Valid")
            .test("Unique Email", "Email Already Exist", async  (value) => 
            (await axios(`http://localhost:3005/users/email/${value}`)).data.length === 0,
                  
              ),
      password: yup.string().required("Password Is Required")
               .test("regex", "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase", val => {
                  let regExp = new RegExp(
                     "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                   );
                   console.log(regExp.test(val), regExp, val);
                   return regExp.test(val);
               }),
   
       confirm_password:yup.string().oneOf([yup.ref("password"),''], "Confirm Password Does Not Match Password"),

   })
  

})


const onSubmit = (values:FormValues)  => {
   console.log("Form Data", values)
}



const countryOptions = [
   {label: "Please Select An Option",  value: ""},
   {label: "GHANA",  value: "1"},
   {label: "NIGERIA",  value: "2"},
   {label: "TOGO",  value: "3"},
   {label: "JAPAN",  value: "4"},
]



const stateOptions = [
   {label: "Please Select An Option",  value: ""},
   {label: "ACCRA",  value: "1"},
   {label: "EASTERN REGION",  value: "2"},
   {label: "ASHANTE REGION",  value: "3"},
]
   

  return (
    <>
       <h3 className="mb-4 text-xl font-medium text-gray-900">
    Create Support Family Member
   </h3>
  
    <Formik  initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
         {
            (formik) => {
               
               return <Form>
                   <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 gap-4">
               <FormikControl control="input" type="text" label="First Name" name="user.first_name" />
               <FormikControl control="input" type="text" label="Last Name" name="user.last_name" />
               <FormikControl control="input" type="text" label="Contact1" name="user.contact1" />
               <FormikControl control="input" type="text" label="Contact2" name="user.contact2" />
            <FormikControl control="select"  label="Select A Country" name="user.country_id"  options={countryOptions}  />
            <FormikControl control="select"  label="Select A State" name="user.state_id"  options={stateOptions}  />
            <FormikControl control="input" type="email"  label="Email" name="user.email"  />
            <FormikControl control="input" type="password" label="Password" name="user.password" />
            <FormikControl control="input" type="password" label="Confirm Password" name="user.confirm_password" />
            <div></div>
               {/* <FormikControl control="input" type="password" label="Confirm Password" name="confirmPassword" />
               <FormikControl control="radio" label="Mode of contact" name="modeOfContact" options={options} />
               <FormikControl control="input" type="text" label="Phone Number" name="phone" /> */}
               <div>
               <button type='submit' className='formButtonSubmit' disabled={!formik.isValid}>Register</button>
               </div>
               <div>
               <button type='button' className='formButtonCancel' disabled={!formik.isValid}>Cancel</button>
               </div>
               </div>
           </Form>
            }
         }
    </Formik>


  </>
  )
}

export default CreateSupport