import { Card } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LikeOutlined, DislikeOutlined, CommentOutlined, LikeTwoTone } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import Avatar from 'antd/lib/avatar/avatar';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { Form, Formik } from 'formik';
import Formikcontrol from '../components/Formik/Formikcontrol'
import { sendComment, sendDislike, sendLike } from '../action/Action';


export default function BlogDetails() {
    const initialValues = {
        blogComment: ""
    }
    const [status, setStatus] = useState(false)

    const post = useSelector(state => { return state.activePost.currentPost });

    const commentHandler = () => {
        setStatus(!status)
    }
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = (values, onSubmitProps) => {
        const blog_id = post && post._id && post._id
        dispatch(sendComment(values, blog_id, onSubmitProps))

        setTimeout(() => {
            history.push("/dash")
        }, 1000);
    }
    const blog_id = post && post._id && post._id
    const likes = post && post.blogLike && post.blogLike.length
    const disLikes = post && post.blogDislike && post.blogDislike.length
    const comments = post && post.blogComment && post.blogComment.length

    return (
        <div align="center">
            {
                post && post ? (
                    <Card
                        style={{ width: 530, marginTop: "2%" }}
                        cover={
                            <img
                                height="500"
                                alt="example"
                                src={"http://192.168.1.117:3000" + '/' + post.blogImagePath}
                            />

                        }

                        actions={[
                            <div>
                                <LikeOutlined onClick={() => dispatch(sendLike(blog_id))} />
                                <div>{likes}</div>
                            </div>,
                            <div>
                                <DislikeOutlined onClick={() => dispatch(sendDislike(blog_id))} />
                                <div>{disLikes}</div>
                            </div>,
                            <div>
                                <CommentOutlined onClick={() => { commentHandler() }} />
                                <div>{comments}</div>
                            </div>
                        ]}
                    >
                        <Meta
                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={post.blogTitle}
                            description={post.blogContent}
                        />
                        {status &&
                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}>
                                {
                                    formik => {
                                        return (
                                            <Form >
                                                <div className="row d-flex justify-content-between">
                                                    <div className="col-10">

                                                        <Formikcontrol
                                                            className="form-control"
                                                            control="input"
                                                            name="blogComment"
                                                            placeholder="comment" />
                                                    </div>
                                                    <div className="col-2 mt-auto">
                                                        <Button type="submit" >SEND</Button>
                                                    </div>
                                                </div>
                                            </Form>
                                        )
                                    }
                                }
                            </Formik>
                        }
                        <div style={{ overflowY: 'scroll', height: 'calc(15vh - 20px)' }}>
                            {
                                post && post.blogComment.map((item) => {
                                    return (
                                        <p>{item}</p>
                                    )
                                })
                            }
                        </div>
                    </Card>
                ) : (<h2>Post Not Available. Please go to <Link to="/all-blog">All Blog</Link></h2>)
            }
        </div>
    )
}
