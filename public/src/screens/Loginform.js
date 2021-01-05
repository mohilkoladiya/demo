import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Formikcontrol from '../Components/Formik/Formikcontrol'
import { useHistory } from 'react-router-dom'
import "../assets/CSS/Loginform.css"
import { SendingLoginRequest } from '../Action/Action'
import { useDispatch } from 'react-redux'

export default function Loginform(props) {
    const initialValues = {
        email: '',
        password: ''
    }
    let history = useHistory()
    let dispatch = useDispatch()
    const signupHandler = () => {
        history.push("/Registrationform")
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").trim().required('Email is required'),
        password: Yup.string().trim().required("Please enter password")
    })

    const onSubmit = (values ,onSubmitProps) => {
        console.log('Form data', values);
        dispatch(SendingLoginRequest(values , props))
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <div className="loginbox">
                            <div className="modal-dialog modal-login">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Member Login</h4>
                                    </div>
                                    <div className="modal-body">
                                        <Form>
                                            <div className="form-group">
                                                <i className="fa fa-user"></i>
                                                <Formikcontrol control="input"
                                                    placeholder="Enter email"
                                                    className="form-control"
                                                    type="email"
                                                    name="email" />
                                            </div>
                                            <div className="form-group">
                                                <i className="fa fa-lock"></i>
                                                <Formikcontrol control="input"
                                                    placeholder="Enter password"
                                                    className="form-control"
                                                    type="password"
                                                    name="password" /><br />
                                            </div>
                                            <div className="form-group1">
                                                <button
                                                    class="btn btn-primary btn-block btn-lg greenBtn"
                                                    type="submit"
                                                    disabled={!formik.isValid}>Login</button>

                                                <button
                                                    class="btn btn1 btn-primary btn-block btn-lg greenBtn"
                                                    type="button"
                                                    onClick={() => { signupHandler() }}>Sign up</button>
                                            </div>
                                        </Form>
                                    </div>
                                    <div className="modal-footer">
                                        <a href="/forget">Forgot password ? </a>
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
