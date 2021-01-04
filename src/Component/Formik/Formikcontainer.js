import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import Formikcontrol from './Formikcontrol';

export default function Formikcontainer() {
    const dropdownOption = [
        { key: 'Select an option', value: '' },
        { key: 'option 1', value: 'option1' },
        { key: 'option 2', value: 'option2' },
        { key: 'option 3', value: 'option3' }
    ]
    const radioOption = [
        { key: 'option 1', value: 'rOption1' },
        { key: 'option 2', value: 'rOption2' },
        { key: 'option 3', value: 'rOption3' }
    ]
    const checkboxOption = [
        { key: 'option 1', value: 'cOption1' },
        { key: 'option 2', value: 'cOption2' },
        { key: 'option 3', value: 'cOption3' }
    ]
    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: null
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required'),
        birthDate: Yup.date().required('Required').nullable()
    })

    const onSubmit = values => {
        console.log('Form data', values);
        console.log('saved data' , JSON.parse(JSON.stringify(values)));
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => (
                    <Form>
                        <Formikcontrol control="input" type="email" label="Email" name="email" />
                        <Formikcontrol control="textarea" label="Description" name="description" />
                        <Formikcontrol control="select" label="Select a Topic" name="selectOption" options={dropdownOption} />
                        <Formikcontrol control="radio" label="Radio Topic" name="radioOption" options={radioOption} />
                        <Formikcontrol control="checkbox" label="Checkbox Topics" name="checkboxOption" options={checkboxOption} />
                        <Formikcontrol control="date" label="Pick a Date" name="birthDate"/>
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}
