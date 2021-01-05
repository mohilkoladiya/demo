import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Field , ErrorMessage} from 'formik'
import Texterror from './Texterror'

export default function Datepicker(props) {
    const {name ,label ,...rest} = props
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({form , field})=>{
                        const {setFieldValue} = form
                        const {value} = field
                        return(
                            <DateView id={name} {...field} {...rest} selected={value} 
                                      onChange={val => setFieldValue(name , val)}/>
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={Texterror}/>
        </div>
    )
}
