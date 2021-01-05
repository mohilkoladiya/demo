import React, { useState } from 'react'
import * as Yup from 'yup'
import Formikcontrol from './Formikcontrol'
import { Formik, Form } from 'formik'
import Recaptcha from 'react-google-recaptcha';


export default function Enrollmentform() {
    const [data, setData] = useState('');

    const dropdownOption = [
        { key: 'Select your course', value: '' },
        { key: 'React', value: 'react' },
        { key: 'Anguler', value: 'anguler' },
        { key: 'Vue', value: 'vue' }
    ]
    const checkboxOption = [
        { key: ' HTML', value: 'html' },
        { key: 'CSS', value: 'css' },
        { key: 'Javascript', value: 'javascript' }
    ]
    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skills: [],
        courseDate: null
    }
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email formate").required("Required"),
        bio: Yup.string().required("Required"),
        course: Yup.string().required("Required"),
        courseDate: Yup.date().required("Required").nullable()
    })
    const onSubmit = values => {
        console.log("Form data", values);
    }
    const captchhandler = (e) => {
        setData(e);
        console.log(e);
    };
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <Formikcontrol control="input" type="email" label="Email" name="email" />
                        <Formikcontrol control="textarea" label="Bio" name="bio"/>
                        <Formikcontrol control="select" label="Course" name="course" options={dropdownOption} />
                        <Formikcontrol control="checkbox" label="Your skillset" name="skills" options={checkboxOption} />
                        <Formikcontrol control="date" label="Course date" name="courseDate" />
                        <Recaptcha sitekey="6LdJKgsaAAAAAKmdeMli1AuSbEx6O66EayhqPo-6" onChange={(e) => captchhandler(e)} />
                        <Formikcontrol control="map" label="Google map"/>
                        <button type="submit" disabled={!formik.isValid}>Submit</button>
                    </Form>
                }
            }
        </Formik>
    )
}

