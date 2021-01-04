import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import Formikcontrol from '../Formik/Formikcontrol'
import '../CSS/Contactus.css'
import { useDispatch } from 'react-redux'
import {sendMessage} from '../Redux/Action'
import { useHistory } from 'react-router-dom'

export default function Registrationform() {
    const initialValues = {
        name: '',
        email: '',
        message: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required*"),
        email: Yup.string().email("Invalid email formate*").required("Email is required*"),
        message: Yup.string().required("Please enter message")
    })
    const dispatch = useDispatch()
    let history = useHistory()
    const onSubmit = (values) => {
        dispatch(sendMessage(values))
        history.push("/")
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {
                    formik => {
                        return (
                            <div className="container">
                                <div className="screen">
                                    <div className="screen-header">
                                        <div className="screen-header-left">
                                            <div className="screen-header-button close"></div>
                                            <div className="screen-header-button maximize"></div>
                                            <div className="screen-header-button minimize"></div>
                                        </div>
                                        <div className="screen-header-right">
                                            <div className="screen-header-ellipsis"></div>
                                            <div className="screen-header-ellipsis"></div>
                                            <div className="screen-header-ellipsis"></div>
                                        </div>
                                    </div>
                                    <div className="screen-body">
                                        <div className="screen-body-item left">
                                            <div className="app-title">
                                                <span>CONTACT</span>
                                                <span>US</span>
                                            </div>
                                            <div>
                                                <Formikcontrol control="map" label="Google map" />
                                            </div>
                                            <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                                        </div>
                                        <div className="screen-body-item">
                                            <div className="app-form">
                                                <Form className="contactus-form">
                                                    <h2 className="h2tital">Contact us</h2>
                                                    <div className="app-form-group">
                                                        <Formikcontrol
                                                            className="form-control"
                                                            control="input"
                                                            type="text"
                                                            name="name"
                                                            placeholder="Enter your name*" />
                                                    </div>
                                                    <div className="app-form-group">
                                                        <Formikcontrol
                                                            className="form-control"
                                                            control="input"
                                                            type="email"
                                                            name="email"
                                                            placeholder="Enter your email*" />
                                                    </div>
                                                    <div className="app-form-group">
                                                        <Formikcontrol
                                                            className="form-control"
                                                            control="textarea"
                                                            name="message"
                                                            placeholder="Enter your message*" />
                                                    </div>

                                                    <div className="app-form-group buttons">
                                                        <button className="app-form-button" type="reset">CANCEL</button>
                                                        <button className="app-form-button" type="submit">SEND</button>
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </Formik>
        </>
    )
}
