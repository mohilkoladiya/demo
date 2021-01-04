import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Formikcontrol from '../Formik/Formikcontrol'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import "../CSS/Resetpassword.css"
import { changePassword } from '../Redux/Action'

export default function ResetPassword(props) {
    const initialValues = {
        oldPassword: '',
        newPassword: ''
    }
    const resetPasswordStatus = useSelector(state => state.changePassword.ReturnCode.ReturnCode)

    let history = useHistory()
    let dispatch = useDispatch()

    const validationSchema = Yup.object({
        oldPassword: Yup.string().required('Old password is required'),
        newPassword: Yup.string().required("Please enter new password")
    })

    const onSubmit = (values, onSubmitProps) => {
        dispatch(changePassword(values, onSubmitProps))
        if (resetPasswordStatus !== "" && resetPasswordStatus === 0) {
            setTimeout(() => {
                history.push("/dash")
            }, 5000);
        }
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
                                        <h4 className="modal-title">Change Password</h4>
                                    </div>
                                    <div className="modal-body">
                                        <Form>
                                            <div className="form-group">
                                                <Formikcontrol control="input"
                                                    placeholder="Enter old password"
                                                    className="form-control"
                                                    type="password"
                                                    name="oldPassword" />
                                            </div>
                                            <div className="form-group">
                                                <Formikcontrol control="input"
                                                    placeholder="Enter new password"
                                                    className="form-control"
                                                    type="password"
                                                    name="newPassword" /><br />
                                            </div>
                                            <Button className="Resetbtn" type="submit" >Reset password</Button>
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
