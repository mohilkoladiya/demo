import { Card } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux';
import { LikeOutlined, DislikeOutlined, CommentOutlined, DeleteOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import Avatar from 'antd/lib/avatar/avatar';
import { Link } from 'react-router-dom';


export default function Blogdetails() {
    const post = useSelector(state => { return state.activePost.currentPost });
    return (
        <div align="center">
            {
                post && post ? (

                    <Card
                        style={{ width: 500, height:400, marginTop:"8%" }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <LikeOutlined />,
                            <DislikeOutlined />,
                            <CommentOutlined />,
                            <DeleteOutlined />
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={post.blogTitle}
                            description={post.blogContent}
                        />
                    </Card>
                ) : (<h2>Post Not Available. Please go to <Link to="/dash">All Blog</Link></h2>)
            }
        </div>
    )
}
