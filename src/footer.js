import React from 'react';
import './footer.css';
import logo from './img/logo2.png'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Router,Routes, Route } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <div className='container_footer'>
                <div className='About'>
                    <p className='about_laybel'>About</p>
                    <p className='about_detail'>mountaineering - Blog specializing in climbing activities, providing necessary knowledge and tips for successful climbing trips, reviewing ideal climbing locations as well as good and quality climbing aids quantity.</p>
                    <div className='social'>
                        <a path='https://www.facebook.com/' ><i className="fa-brands fa-pinterest"></i></a>
                        <a src={``}><i className="fa-brands fa-facebook"></i></a>
                    </div>
                </div>
                <div className='Nav_footer'>
                    <ul style={{listStyleType:'none'}}>
                        <li>
                            Knowledge
                            <ul style={{listStyleType:'none'}}>
                                <li>overview</li>
                                <li>Techniques</li>
                                <li>Training</li>
                                <li>Nutrition</li>
                            </ul>
                        </li>
                            <li>Location</li>
                            <li>Gear</li>
                            <li>News</li>
                            <li>Clubs</li>
                            <li>Media</li>
                    </ul>
                </div>
                <div className='contact'>
                    <img className='logo_footer' src={logo}></img>
                    <p className='ct'> <i class="fa-solid fa-phone"></i>  +84337302288</p>
                    <p className='ct'> <i class="fa-solid fa-location-dot"></i>  No.8-Ton That Thuyet</p>
                    <p className='ct'> <i class="fa-solid fa-envelope"></i> lechungdung29@gmail.com</p>
                </div>
            </div>
            <label className='copyright'>Copyright <i class="fa-regular fa-copyright"></i> FPT Apptech</label>
        </footer>
    )
}
export default Footer ;