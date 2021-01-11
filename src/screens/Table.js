import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogById } from '../action/Action'
import Image from 'react-bootstrap/Image'

export default function DataTable() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBlogById());
    }, [])

    const privateBlog = useSelector((state) => state.getBlogById.blogById.blog)
    console.log(privateBlog);

    return (
        <>

            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Blog Image</th>
                        <th scope="col">Blog Title</th>
                        <th scope="col">Blog Content</th>
                        <th scope="col">Created By</th>
                        <th scope="col">Blog Date</th>
                    </tr>
                </thead>
                {privateBlog && privateBlog.map((data) => {
                    console.log(data.blogImagePath);
                    return (
                        <tbody>
                            <tr>
                                <td>
                                    <Image
                                        height="60px"
                                        width="100px"
                                        src={"http://192.168.1.117:3000" + '/' + data.blogImagePath}
                                        rounded />
                                </td>
                                <td>{data.blogTitle}</td>
                                <td>{data.blogContent}</td>
                                <td>{data.blogCreatedBy}</td>
                                <td>{data.blogDate}</td>
                            </tr>
                        </tbody>
                    )
                }
                )}
            </table>
        </>
    )
}
