import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import Formikcontrol from '../components/Formik/Formikcontrol'
import '../assets/CSS/RegistrationForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { getcountry, getState } from '../action/Action'
import { useHistory } from 'react-router-dom'

export default function Profile() {
    let history = useHistory()
    const resetPasswordHandler = () => {
        history.push("/resetpassword")
    }
    const dispatch = useDispatch()
    const dropdownOption = [
        { key: '----Select course----', value: '' },
        { key: 'BBA', value: 'bba' },
        { key: 'BCA', value: 'bca' },
        { key: 'B.COM', value: 'bcom' }
    ]
    const checkBoxOptions = [
        { key: 'Html', value: 'Html' },
        { key: 'Css', value: 'Css' },
        { key: 'JavaScript', value: 'JavaScript' },
    ];

    useEffect(() => { dispatch(getcountry()) }, []);

    const Country = useSelector(state => { return state.country.country });
    const State = useSelector(state => state.state.stateData);

    const initialValues = {
        name: '',
        phoneNo: '',
        pinCode: '',
        email: '',
        course: '',
        country: '',
        state: '',
        city: '',
        skill: [],
        address: '',
        password: '',
        confirmPassword: '',
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required*"),
        phoneNo: Yup.string().required("Please enter your phone number*"),
        pinCode: Yup.string().required("Pincode number is required*"),
        email: Yup.string().email("Invalid email formate*").required("Email is required*"),
        course: Yup.string().required("Select your course"),
        country: Yup.string().required("Select your country"),
        state: Yup.string().required("Select your state"),
        city: Yup.string().required("Select your city"),
        address: Yup.string().required("Address is required"),
        password: Yup.string().required("Enter your password*"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match*').required("Re-enter your password*"),
    })

    const onSubmit = values => {
        console.log(values);
    }
   
    const countryHandler = (e) => {
        dispatch(getState(e.target.value))
    }
    return (
        <div >
            <div style={{ float: "right", marginRight: "15px" }}>
                <Button variant="danger" onClick={() => { resetPasswordHandler() }}>Change Password</Button>
            </div>
            <div style={{}}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    {

                        formik => {

                            return (
                                <div className="registrationbox" style={{marginTop:"-95px"}}>
                                    <div className="signup-form">
                                        <Form>
                                            <h2>Update Profile</h2>
                                            <p class="hint-text">Update your profile. only takes a minute.</p>
                                            <div class="form-group">
                                                <div class="leftSide">
                                                    <Formikcontrol className="form-control"
                                                        control="input"
                                                        type="text"
                                                        name="name"
                                                        placeholder="Enter your name*" />
                                                </div>
                                                <div class="rightSide">
                                                    <Formikcontrol className="form-control"
                                                        control="input"
                                                        type="text"
                                                        name="phoneNo"
                                                        placeholder="Enter your phone number*" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="leftSide">
                                                    <Formikcontrol className="form-control"
                                                        control="input"
                                                        type="text"
                                                        name="pinCode"
                                                        placeholder="Enter your pincode*" />
                                                </div>
                                                <div className="rightSide">
                                                    <Formikcontrol className="form-control"
                                                        control="input"
                                                        type="email"
                                                        name="email"
                                                        placeholder="Enter your email*" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="leftSide">
                                                    <Formikcontrol className="form-control"
                                                        control="select"
                                                        name="course"
                                                        options={dropdownOption} />
                                                </div>
                                                <div className="country">
                                                    <Formikcontrol className="form-control"
                                                        control="country"
                                                        name="country"
                                                        options={Country}
                                                        onChange={(e) => {
                                                            formik.handleChange(e)
                                                            dispatch(getState(e.target.value))
                                                        }}
                                                    /><br />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="state">
                                                    <Formikcontrol className="form-control"
                                                        control="state"
                                                        name="state"
                                                        options={State} />
                                                </div>
                                                <div className="rightSide">
                                                    <Formikcontrol className="form-control"
                                                        control="input"
                                                        name="city"
                                                        placeholder="Enter city" />
                                                </div>
                                            </div>

                                            <div className="checkbox">
                                                <b>Skill:</b>
                                                <Formikcontrol className="form-control"
                                                    control="checkbox"
                                                    name="skill"
                                                    options={checkBoxOptions} />
                                            </div>
                                            <div className="address">
                                                <Formikcontrol className="form-control"
                                                    control="textarea"
                                                    name="address"
                                                    placeholder={"Enter your address"} /><br />
                                            </div>
                                            <div className="form-group">
                                                <button className="btn  btn-success btn-lg btn-block" type="submit" >Update Now</button>
                                                <button className="btn  btn-success btn-lg btn-block" type="reset">Reset Form</button>
                                            </div>

                                        </Form>
                                       
                                    </div>
                                </div>
                            )
                        }
                    }
                </Formik>
            </div>
        </div>
    )
}
