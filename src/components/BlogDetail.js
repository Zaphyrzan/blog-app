import { useEffect, useState } from "react";
import React from 'react';
import { useParams } from "react-router";
import BlogAPI from "../config/BlogAPI";
import { Link } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import moment from 'moment';


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
        <div className="post">
        <h1>{blog.title}</h1>
        <hr />
        <div className="author">
          <div>
            {moment(blog.published).format("MMMM Do, YYYY")}
          </div>
        </div>
        <hr />
        <img
                    className="img-fluid"
                    src={`http://localhost:1337${blog.thumbnail.formats.thumbnail.url}`}
                    alt=""
                />
        <ReactMarkdown children={blog.content} transformImageUri={uri => uri.startsWith("http") ? uri : `${process.env.REACT_APP_IMAGE_URL}${uri}`}/>
        
        <hr />
        <Link to="/blog">&larr; Back to the posts list</Link>
      </div>
    );
}