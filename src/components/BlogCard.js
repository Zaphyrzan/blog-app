// import {useState, useEffect} from 'react'
// import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from 'react';

export default function BlogCard({data}){
    return (
        <div className="card mb-3">
            <img src={`http://localhost:1337${data.thumbnail.formats.thumbnail.url}`}/>
            
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.summary}</p>
            
                <Link to={`/blog/${data.id}`} className="btn btn-primary">Check post</Link>
            </div>
        </div>
    )
}