import { Card, Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { LikeOutlined, DislikeOutlined, CommentOutlined, DeleteOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, getBlogById, setActivePost } from '../action/Action'

export default function Dashbord() {
    let history = useHistory()
    const dispatch = useDispatch()

    const blogById = useSelector(state => state.getBlogById.blogById.blog)
    useEffect(() => {
        dispatch(getBlogById())
    }, [])
    const createBlogHandler = () => {
        history.push("/blog")
    }
    const deleteBlogById = (deleteId) => {
        dispatch(deleteBlog(deleteId))
    }
    const onBlogClickHandler = (item) => {
        console.log("reret", item);
        dispatch(setActivePost(item));
        history.push("/blog-detail")
    }
    return (
        <div>
            <Button style={{ float: "right", marginRight: "14px" }}
                variant="info" onClick={() => { createBlogHandler() }}>Create blog</Button>
            <div>
                <Row gutter={12}>
                    {
                        blogById && blogById.map((item, i) => {
                            return (
                                <Col span={6}>
                                    <Card key={i}
                                        style={{ width: 300 }}
                                        cover={
                                            <img
                                                height="200px"
                                                alt="example"
                                                onClick={() => { onBlogClickHandler(item) }}
                                                src={"http://192.168.1.117:3000" + '/' + item.blogImagePath}
                                            />
                                        }
                                        actions={[
                                            <LikeOutlined />,
                                            <DislikeOutlined />,
                                            <DeleteOutlined onClick={() => { deleteBlogById(item._id) }} />
                                        ]}
                                    >
                                        <Meta
                                            className="Blog"
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={item.blogTitle}
                                            description={item.blogContent}
                                        />
                                    </Card>
                                    <br />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div >
    )
}
