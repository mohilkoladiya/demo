import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './Texterror'

function City(props) {
    const { lable, name, options, ...rest } = props
    return (

        <div className="form-group">
            <label htmlFor={name}>{lable}</label>
            <Field as='select' id={name} name={name} {...rest}>
                <option>----Select state----</option>
                {
                    options.map((option) => {
                        return (
                            <>
                                <option key={option.Id} value={option.Id}>{option.State}</option>
                            </>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>

    )
}

export default City