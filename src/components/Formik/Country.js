import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './Texterror'

function Country(props) {
    const { lable, name, options, ...rest } = props

    return (
        <div className="form-group">
            <label htmlFor={name}>{lable}</label>
            <Field as='select' id={name} name={name} {...rest} >
                <option>----Select country----</option>
                {
                    options && options.map((option) => {
                        return (
                            <>
                                <option key={option.Id} value={option.Id}>{option.CountryName}</option>
                            </>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
export default Country