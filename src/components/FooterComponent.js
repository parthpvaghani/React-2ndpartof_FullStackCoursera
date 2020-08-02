/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-4 ">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-4">
                        <h5>Our Address</h5>
                        <address className="address">
                            121, Clear Water Bay Road<br />
                                Clear Water Bay, Kowloon<br />
                                    HONG KONG<br />
                                        Tel.: +852 1234 5678<br />
                                            Fax: +852 8765 4321<br />
                                                Email: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 ">
                        <div>
                            <h5>Social Links</h5>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><a href="http://google.com/+"
                                    className="btn btn-social-icon btn-google"><i className="fa fa-google-plus fa-lg"></i></a>
                                </li>
                                <li className="list-inline-item"><a href="http://www.facebook.com/profile.php?id="
                                    className="btn btn-social-icon btn-facebook"><i className="fa fa-facebook fa-lg"></i></a>
                                </li>
                                <li className="list-inline-item"><a href="http://www.linkedin.com/in/"
                                    className="btn btn-social-icon btn-linkedin"><i className="fa fa-linkedin fa-lg"></i></a>
                                </li>
                                <li className="list-inline-item"><a href="http://twitter.com/"
                                    className="btn btn-social-icon btn-twitter"><i className="fa fa-twitter fa-lg"></i></a></li>
                                <li className="list-inline-item"><a href="http://youtube.com/"
                                    className="btn btn-social-icon btn-google"><i className="fa fa-youtube fa-lg"></i></a></li>
                                <li className="list-inline-item"><a href="mailto:" className="btn btn-social-icon"><i
                                    className="fa fa-envelope fa-lg"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container mt-3">
                <div className="row justify-content-center small">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;