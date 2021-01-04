import React from 'react'
import { Field, ErrorMessage } from 'formik'
import Texterror from './Texterror'

export default function Radiobutton(props) {
    const { label, name, options, ...rest } = props
    return (
        <div>
            <label>{label}</label>
            <Field name={name} {...rest}>
            {
                ({field})=>{
                    return options.map(option =>{
                        return(
                            <React.Fragment key={option.key}>
                                <input type="radio" id={option.value} {...field} value={option.value}
                                       checked={field.value === option.value}/>
                                <label htmlFor={option.value}>{option.key}</label>       
                            </React.Fragment>
                        )
                    })
                }
            }    
            </Field>
            <ErrorMessage name={name} component={ Texterror}/>
        </div>
    )
}
