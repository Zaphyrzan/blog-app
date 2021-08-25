import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faUser, faList, faSignOutAlt, faPlus, faTachometerAlt, faBook, faCode, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer } from 'react-toastify';

import Dashboard from './components/dashboard';
import BlogPage from './components/BlogPage';
import BlogDetail from './components/BlogDetail';
import About from './components/about';
import Contact from './components/contact';
import NotFound from './components/not-found';

library.add(faEye);
library.add(faEdit);
library.add(faTrash);
library.add(faUser);
library.add(faTachometerAlt);
library.add(faList);
library.add(faSignOutAlt);
library.add(faPlus);
library.add(faBook);
library.add(faCode);
library.add(faQuestionCircle);

const App = () => {

  return (
    <Router>
      <ToastContainer />
      <div className="cont">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link"><FontAwesomeIcon icon='' /> Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/blog" className="nav-link"><FontAwesomeIcon icon='' /> Article</Link>
              </li>
              <li className="navbar-item">
                <Link to="/contact" className="nav-link"><FontAwesomeIcon icon='' /> Contact</Link>
              </li>
              <li className="navbar-item">
                <Link to="/about" className="nav-link"><FontAwesomeIcon icon='' /> About</Link>
              </li>

            </ul>
            {<ul className="navbar-nav mr-auto pull-right">
              
              
            </ul>}
          </div>
        </nav>

        <div className="content">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          </Switch>
        </div>

        <div className="container">
          <Switch>
              <Route exact path="/blog" component={BlogPage} />
              <Route path="/blog/:id" component={BlogDetail} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
