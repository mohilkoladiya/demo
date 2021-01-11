import React, { useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Privateheader from '../header/Privateheader';
import { useDispatch, useSelector } from 'react-redux';
import { Field, ErrorMessage, Form, Formik } from 'formik';
import FormikControll from '../../Formik_Parts/FormikControll';
import * as Yup from 'yup';


import Blog from '../../IMG/blog.jpg';
import CommentIcon from '../../IMG/comment.png';
import LikeIcon from '../../IMG/like.png';
import CommentSendIcon from '../../IMG/commentsendicon2.png';
import Liked from '../../IMG/Like one.png'
import Likedefault from '../../IMG/likenun.png'
import DislikeDefault from '../../IMG/likenot.png'
import Disliked from '../../IMG/likedark.png'

import DisIcon from '../../IMG/dislike.png';
import { Link, useHistory } from 'react-router-dom';
import '../CSS/comment.css';
import { IsEmpty } from '../../Services/Service';
import { LikeRequest } from '../../Redux/Private/CraeteBlog/Like/LikeAction'
import { DisLikeRequest } from "../../Redux/Private/CraeteBlog/DisLike/DislikeAction";
import { COMMENTREQUEST } from '../../Redux/Private/CraeteBlog/comment/CommentAction'
import { getAllPublicBlog } from "../../Redux/Blog/BlogAction";

function AllBlogAction(props) {
    const blogdata = props.history.location.state;
    const dispatch = useDispatch()
    const [comment, setcomment] = useState(false);
    const [counter, setcounter] = useState(0);
    const Lid = JSON.parse(localStorage.getItem("userlogindata"));
    console.log("Lid", Lid.data[0]._id);
    console.log('finalcomment', blogdata);

    let checklike = blogdata.blogLike.includes(Lid.data[0]._id)
    console.log("checklike", checklike);

    let checkdislike = blogdata.blogDislike.includes(Lid.data[0]._id)
    console.log("checkdislike", checkdislike);

    const [like, setlike] = useState(checklike);
    const [dislike, setdislike] = useState(checkdislike);

    const BlogLike = () => {
        console.log("like_click");
        dispatch(LikeRequest(blogdata._id))
        setlike(true)
        setdislike(false)
        dispatch(getAllPublicBlog())
        setcounter(counter + 1)
        dispatch(getAllPublicBlog())
    };
    
    const BlogDisLike = () => {
        console.log("Dislike_click");
        dispatch(DisLikeRequest(blogdata._id))
        setlike(false)
        setdislike(true)
        dispatch(getAllPublicBlog())
        setcounter(counter + 1)
        dispatch(getAllPublicBlog())
    };
    const GotoComment = () => {
        console.log("GotoComment");
        setcomment(!comment);
    };

    useEffect(() => {
        dispatch(getAllPublicBlog())
    }, [counter])

    var alldata = useSelector(state => state.PublicBlogData.Blog)
    console.log("alldata", alldata);
    const commentalldata = alldata.filter((data) => {
        if (data._id == blogdata._id) {
            return data
        }
    })


    const initialValues = {
        blogComment: ''
    }

    const onSubmit = (values, onSubmitProps) => {
        console.log("submit", values);
        if (values) {
            dispatch(COMMENTREQUEST(values, props, blogdata._id, onSubmitProps))
            setcounter(counter + 1)
            dispatch(getAllPublicBlog())
        }
    };
    const validationSchema = Yup.object({
        blogComment: Yup.string().required(' Comment Required!'),
    });

    return (
        <div>
            <Privateheader title="allblogaction">
                <Link
                    className="mt-3 btn btn-info"
                    to="/allblog"
                    style={{ marginLeft: '88%', marginRight: '10px' }}
                >
                    <u>Back</u>
                </Link>
                

<Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {(formik) => {
                        return (
                            <Form>

                                <div className="CreateBlog commentcard allcardprivate">
                                    <Card className="cardcomment" style={{ width: 360 }}>
                                        <Card.Body>
                                            <Card.Title className="Blogtitle">
                                                <h3></h3>
                                            </Card.Title>
                                            <Card.Text>
                                                <img height="300px" src={process.env.REACT_APP_API + '/' + blogdata.blogImagePath} />
                                            </Card.Text>

                                            <div className="row ">
                                                <div className="col-12">
                                                    <h3>
                                                        <b>Title</b>:{blogdata.blogTitle}
                                                    </h3>
                                                    <h3>
                                                        <b>Content</b>:{blogdata.blogContent}
                                                    </h3>
                                                    <footer className="footerby">__by:Raj_Sojitar</footer>
                                                </div>
                                            </div>

                                            <div className="row allicon">
                                                <div className="col-4">
                                                    <div className="col-12">
                                                        <div className="col-6">
                                                            <img src={like ? Liked : Likedefault} onClick={BlogLike} className="commenticon" />
                                                            <div className="col-6">
                                                                {!IsEmpty(commentalldata) && commentalldata[0].blogLike.length}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="col-12">
                                                        <div className="col-6">
                                                            <img src={dislike ? Disliked : DislikeDefault} onClick={BlogDisLike} className="commenticon" />
                                                            <div className="col-6">
                                                                {!IsEmpty(commentalldata) && commentalldata[0].blogDislike.length}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="col-12">
                                                        <div className="col-6">
                                                            <img src={CommentIcon} onClick={() => GotoComment()} className="commenticon" />
                                                            <div className="row" style={{ marginLeft: "15px" }}>
                                                                {!IsEmpty(commentalldata) && commentalldata[0].blogComment.length}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            {comment && (
                                                <div className="row">
                                                    <div className="col-6">
                                                        <FormikControll
                                                            control="input"
                                                            type="text"
                                                            className="mt-3 commentinput"
                                                            placeholder="Type Text"
                                                            name="blogComment"
                                                        />
                                                    </div>
                                                    <div className="col-6">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-info commentbutton"
                                                        >Send</button>
                                                    </div>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <div style={{ overflowY: 'scroll', height: 'calc(15vh - 20px)' }}>

                                                                {IsEmpty() &&
                                                                    commentalldata[0].blogComment.map((data) => {
                                                                        return (
                                                                            <div className=" d-flex justify-content-center">
                                                                                {data}
                                                                            </div>
                                                                        );
                                                                    })}
                                                            </div>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </div>


                            </Form>
                        )
                    }}</Formik>




            </Privateheader>
        </div>
    )
}

export default AllBlogAction