import { useEffect, useState } from "react";
import BlogList from './BlogList';
import BlogAPI from '../config/BlogAPI';
import React from 'react';


export default function BlogPage(){
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      BlogAPI.find().then(res => {
        console.log(res);
        setBlogs(res);
      });
    }, [])
  
    return (
      <div >
        <header >
          <h1 className="fw-bold text-center py-5">Article</h1>
        </header>
        <BlogList blogs={blogs}/>
      </div>
    );
}