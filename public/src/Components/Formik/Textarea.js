import React from 'react'
import { Field, ErrorMessage } from 'formik'
import Texterror from './Texterror'

export default function Textarea(props) {
    const {label , name , ...rest} = props
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={Texterror}/>
        </div>
    )
}
