import { useEffect, useState } from "react";
import React from 'react';
import { useParams } from "react-router";
import BlogAPI from "../config/BlogAPI";
import { Link } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import Moment from 'moment';


export default function BlogDetail(){
    const {id} = useParams();
    const [blog, setBlogs] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        BlogAPI.detail(id).then((res) =>{
            console.log(res);
            setBlogs(res);
            setLoading(false);
        });
    });
    if (loading) {
        return <h2 className="text-center mt-5">Loading...</h2>;
    }

    return (
        <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
                <Link to="/blog">Go Back</Link>
            </div>
            <div className="col-md-6">
                <h2>{blog.title}</h2>
                <p>
                    {Moment(blog.Created_at).format("MMMM Do, YYYY")}
                </p>
                <p></p>
                <img
                    className="img-fluid"
                    src={`http://localhost:1337${blog.thumbnail.formats.thumbnail.url}`}
                    alt=""
                />
                <p></p>
                <ReactMarkdown>{blog.description}</ReactMarkdown>
            </div>

        </div>
    )
}