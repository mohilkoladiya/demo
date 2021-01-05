import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import Formikcontrol from '../Components/Formik/Formikcontrol'
import { useHistory } from 'react-router-dom'
import { useDispatch, } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { newPassword } from '../Action/Action'

export default function Forgetpassword() {
    const [url, setUrl] = useState()
    const initialValues = {
        password: '',
        Token: ''
    }
    let dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        let url = window.location.pathname.split('/')
        let urlToken = url[url.length - 1]
        setUrl(urlToken)
    }, [])

    const validationSchema = Yup.object({
        password: Yup.string().required('Please enter new password'),
    })

    const onSubmit = (values) => {
        dispatch(newPassword(values))
        history.push("/")
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
                                                    placeholder="Enter new password"
                                                    className="form-control"
                                                    type="password"
                                                    name="password" />
                                            </div>
                                            <div className="form-group">
                                                <Formikcontrol control="hidden"
                                                    className="form-control"
                                                    name="Token" />
                                            </div>
                                            <Button className="Resetbtn" type="submit" >Change</Button>
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
