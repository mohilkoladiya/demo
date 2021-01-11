import { Card, Col, Row } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import Meta from 'antd/lib/card/Meta'
import React, { useEffect } from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, getAllBlog, setActivePost } from '../action/Action';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button'


export default function Allblog() {
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(getAllBlog())
    }, [])

    const Blog = useSelector(state => state.getAllBlog.Blogs.blogList);
    console.log("blog", Blog);
    const history = useHistory()
    const blogDetailsHandler = (item) => {
        console.log("item", item);
        dispatch(setActivePost(item));
        history.push("/blog-detail")
    }

    const imageDownload = (blogImage) => {
        axios({
            url: `http://192.168.1.117:3000/download/${blogImage}`,
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.jpg');
            document.body.appendChild(link);
            link.click();
        });
    }
    return (
        <div>
            <div style={{ padding: "10px" }}>
                <Row gutter={35}>
                    {
                        Blog && Blog.map((item, i) => {
                            return (
                                <Col span={4.5} style={{ paddingBottom: "16px" }}>
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
                                        actions={[
                                            <Button>
                                                <DownloadOutlined onClick={() => { imageDownload(item.blogImagePath) }} />
                                            </Button>
                                        ]}
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
