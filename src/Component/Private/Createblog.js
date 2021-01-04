import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Formikcontrol from '../Formik/Formikcontrol'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { createBlog } from '../Redux/Action'

export default function Createblog(props) {
    const initialValues = {
        blogTitle: '',
        blogContent: ''
    }

    let history = useHistory()
    let dispatch = useDispatch()

    const validationSchema = Yup.object({
        blogTitle: Yup.string().required('Title is required'),
        blogContent: Yup.string().required("Please enter blog details")
    })

    const onSubmit = (values , onSubmitProps) => {
        dispatch(createBlog(values, onSubmitProps))
        setTimeout(() => {
            history.push("/dash")
        }, 2000);
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
                                        <h4 className="modal-title">Create Blog</h4>
                                    </div>
                                    <div className="modal-body">
                                        <Form>
                                            <div className="form-group">
                                                <Formikcontrol control="input"
                                                    placeholder="Enter blog title"
                                                    className="form-control"
                                                    type="text"
                                                    name="blogTitle" />
                                            </div>
                                            <div className="form-group">
                                                <Formikcontrol
                                                    placeholder="Enter blog details"
                                                    className="form-control"
                                                    control="textarea"
                                                    name="blogContent" /><br />
                                            </div>
                                            <Button className="Resetbtn" type="submit" >Create</Button>
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
