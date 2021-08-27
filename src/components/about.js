import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './index.css';

export default () =>{
    return (
        <Jumbotron fluid className="jumbo border rounded">
            <div className="row">
                <div className="jumbotron-text float-right text-center col-md-5 offset-md-6">
                    <div className="jumbotron-header">About Us</div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            We are a team of intern student from Politeknik Tuanku Syed Sirajuddin, Malaysia.
                        </div>
                    </div>
                </div>
            </div>
            
        </Jumbotron>
    )
}