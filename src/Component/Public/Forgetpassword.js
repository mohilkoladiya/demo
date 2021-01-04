import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Formikcontrol from '../Formik/Formikcontrol'
import { useHistory } from 'react-router-dom'
import { useDispatch,} from 'react-redux'
import Button from 'react-bootstrap/Button'
import { forgetPassword } from '../Redux/Action'

export default function Forgetpassword() {
    const initialValues = {
        email: '',
    }
    let dispatch = useDispatch()

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required('Email is required'),
    })

    const onSubmit = (values) => {
        dispatch(forgetPassword(values))
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <div className="profilebox">
                            <div className="modal-dialog modal-login">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Forget Password</h4>
                                    </div>
                                    <div className="modal-body">
                                        <Form>
                                            <div className="form-group">
                                                <Formikcontrol control="input"
                                                    placeholder="Enter your email"
                                                    className="form-control"
                                                    type="text"
                                                    name="email" />
                                            </div>
                                            <Button className="Resetbtn" type="submit" >Send mail</Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </Formik>
    )
}
