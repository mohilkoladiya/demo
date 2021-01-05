import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout'
import Carousel from 'react-bootstrap/Carousel'
import React, { useEffect, useState } from 'react'
import london from '../image/london1.jpg'
import newyork from '../image/newyork.jpg'
import paris from '../image/paris1.jpg'
import '../CSS/home.css'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlog, getAllBlog } from '../Redux/Action'
import { Card, Col, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import Avatar from 'antd/lib/avatar/avatar'
import { LikeOutlined, DislikeOutlined, CommentOutlined } from '@ant-design/icons';


export default function Home() {
    const [index, setIndex] = useState(0)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    useEffect(async () => {
        dispatch(getAllBlog())
    }, [])

    const deleteBlogById = (deleteId) => {
        dispatch(deleteBlog(deleteId))
    }
    const Blog = useSelector(state => state.getAllBlog.Blogs.blogList)

    const loginHandler = () => {
        history.push("/login")
    }
    return (
        <>
            <Layout>
                <Carousel activeIndex={index} onSelect={handleSelect} align="center">
                    <Carousel.Item interval={2000}>
                        <div className="imageDesign"><img
                            className="imgSlider"
                            height="90%"
                            width="70%"
                            src={london}
                            alt="First slide"
                        /></div>
                        <Carousel.Caption>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="imgSlider"
                            height="90%"
                            width="70%"
                            src={newyork}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="imgSlider"
                            height="90%"
                            width="70%"
                            src={paris}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Layout>
            <div style={{ padding: "10px" }}>
                <Row gutter={8}>
                    {
                        Blog && Blog.map((item, i) => {
                            return (
                                <Col span={4} style={{ paddingBottom: "16px" }}>
                                    <Card key={i}
                                        style={{ width: 300 }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                            />
                                        }
                                        actions={[
                                            <LikeOutlined onClick={() => { loginHandler() }} />,
                                            <DislikeOutlined onClick={() => { loginHandler() }} />,
                                            <CommentOutlined onClick={() => { loginHandler() }} />,
                                        ]}
                                    >
                                        <Meta
                                            className="Blog"
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
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
        </>
    )
}
