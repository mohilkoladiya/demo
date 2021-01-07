import { Card, Col, Row } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import Meta from 'antd/lib/card/Meta'
import React, { useEffect } from 'react'
import { LikeOutlined, DislikeOutlined, CommentOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, getAllBlog, setActivePost } from '../action/Action';
import { useHistory } from 'react-router-dom';


export default function Allblog() {
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(getAllBlog())
    }, [])

    const Blog = useSelector(state => state.getAllBlog.Blogs.blogList);

    const history = useHistory()
    const blogDetailsHandler = (item) => {
        console.log("item", item);
        dispatch(setActivePost(item));
        history.push("/blog-detail")
    }
    return (
        <div>
            <div style={{ padding: "10px" }}>
                <Row gutter={12}>
                    {
                        Blog && Blog.map((item, i) => {
                            return (
                                <Col span={6} style={{ paddingBottom: "16px" }}>
                                    <Card key={i}
                                        style={{ width: 300 }}
                                        cover={
                                            <img
                                                height="200px"
                                                alt="example"
                                                src={"http://192.168.1.117:3000" + '/' + item.blogImagePath}
                                                onClick={() => { blogDetailsHandler(item) }}
                                            />
                                        }
                                    // actions={[
                                    //     <LikeOutlined />,
                                    //     <DislikeOutlined />,
                                    //     <CommentOutlined />,
                                    // ]}
                                    >
                                        <Meta
                                            className="Blog"
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={item.blogTitle}
                                            description={item.blogContent}
                                        />
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}
