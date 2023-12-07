import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../img/logo2.png';
import "../../App.css";
const Navbarmenu =()=>{
    return(
        <header className="header">
            <NavLink className="home" to={`/`}><img className="logo" src={logo}/></NavLink>
                <ul className="nav">
                    <li className="a">
                        <NavLink className="a">Knowledge</NavLink>
                        <ul className="subnav">
                            <li><NavLink className="a2 " to={`/overview`}>overview</NavLink></li>
                            <li><NavLink className="a2 " to={`/techniques`}>Techniques</NavLink></li>
                            <li><NavLink className="a2 " to={`/training`}>Training</NavLink></li>
                            <li><NavLink className="a2 " to={`/nutrition`}>Nutrition</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink className="a " to={`/Location`}>Location</NavLink></li>
                    <li><NavLink className="a " to={`/gear`}>Gear</NavLink></li>
                    <li><NavLink className="a " to={`/News`}>News</NavLink></li>
                    <li><NavLink className="a " to={`/clubs`}>Clubs</NavLink></li>
                </ul>
        </header>
    );
}
export default Navbarmenu;