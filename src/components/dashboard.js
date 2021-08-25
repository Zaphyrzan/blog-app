import React, { Component } from 'react';
import ala from '../assets/img/ala.png';
import nitya from '../assets/img/nitya.jpg';
import wan from '../assets/img/wan.jpeg';
import poli from '../assets/img/poli.png';
import bootstrap from '../assets/img/bootstrap.jpg';
import router from '../assets/img/reactrouter.jpg';
import react from '../assets/img/reactjs.jpg';
import redux from '../assets/img/redux.png';
import { Button } from './Button';
import { Link } from 'react-router-dom';


export class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <section className="row">
            <div className="headerTitles">
        <span className="headerTitleLg">~BLOG~ </span>
      </div>
      
            <div className="container dashboard-container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card dashboard-card"></div>
                    <a href="https://alainaja.com/" target="_blank">
                        <img src={ala} className="card-img-top img-fluid" alt="Create React App"/>
                    </a>
                    <div className="card-block">
                        <h3 className="card-title">ALA Market</h3>
                        <p>Online Grocery Market. Located at Indonesia.</p>
                    </div>
                </div>
            


            
                    <div className="col-md-6 col-lg-3">
                        <div className="card dashboard-card"></div>
                    <a href="https://zafirzaninternship.blogspot.com/2021/07/opening-ceremony-of-internship.html" target="_blank">
                        <img src={wan} className="card-img-top img-fluid" alt="Create React App"/>
                    </a>
                    <div className="card-block">
                        <h3 className="card-title">Wan Zafirzan</h3>
                        <p>Passionate IT Student that strive to sharpen his skill.</p>
                    </div>
                </div>
            

            
                    <div className="col-md-6 col-lg-3">
                        <div className="card dashboard-card"></div>
                    <a href="https://nityainternship.blogspot.com/2021/07/virtual-internship-with-ala-startup.html" target="_blank">
                        <img src={nitya} className="card-img-top img-fluid" alt="Create React App"/>
                    </a>
                    <div className="card-block">
                        <h3 className="card-title">Nitya Sathu Om</h3>
                        <p>Astute IT Student continuing to sharpen her skill.</p>
                    </div>
                </div>
            
            
                    <div className="col-md-6 col-lg-3">
                        <div className="card dashboard-card"></div>
                    <a href="http://www.ptss.edu.my/v9/index.php" target="_blank">
                        <img src={poli} className="card-img-top img-fluid" alt="Create React App"/>
                    </a>
                    <div className="card-block">
                        <h3 className="card-title">PTSS</h3>
                        <p>The Intern Student's Educational Institution.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                        <div className="card dashboard-card"></div>
                    <a href="http://www.ptss.edu.my/v9/index.php" target="_blank">
                        <img src={bootstrap} className="card-img-top img-fluid" alt="Create React App"/>
                    </a>
                    <div className="card-block">
                        <h3 className="card-title">Bootstrap</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.The Intern Student's Educational Institution.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                        <div className="card dashboard-card"></div>
                    <a href="http://www.ptss.edu.my/v9/index.php" target="_blank">
                        <img src={router} className="card-img-top img-fluid" alt="Create React App"/>
                    </a>
                    <div className="card-block">
                        <h3 className="card-title">React Router</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                        <div className="card dashboard-card"></div>
                    <a href="http://www.ptss.edu.my/v9/index.php" target="_blank">
                        <img src={react} className="card-img-top img-fluid" alt="Create React App"/>
                    </a>
                    <div className="card-block">
                        <h3 className="card-title">React JS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                        <div className="card dashboard-card"></div>
                    <a href="http://www.ptss.edu.my/v9/index.php" target="_blank">
                        <img src={redux} className="card-img-top img-fluid" alt="Create React App"/>
                    </a>
                    <div className="card-block">
                        <h3 className="card-title">Redux</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.The Intern Student's Educational Institution.</p>
                    </div>
                </div>
                </div>
            </div>

            
            <div className='footer-container'>
      <section className='footer-subscription'>
        
      </section>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              
              <i class='fab fa-typo3' />
            </Link>
          </div>
         <center> <small class='website-rights'>ALA STARTUP © 2021</small></center>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>

           

            
            

        </section>
        
        
            
        );
        
    }
    
}


export default Dashboard;