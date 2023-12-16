import React from "react";
import '../../css/intros.css'
import { Link } from "react-router-dom";
import IntroComponent from "../../../components/introComponent";
import Introjson from './videos.json'


const Videos =()=>{
    const Introjsons = Introjson.map((intro)=>{
        return(
            <Link className="intro" to={intro.pages}>
                <IntroComponent pic={intro.pic} title={intro.title} intro={intro.intro}></IntroComponent>
            </Link>
        )
    })
    const scrooltotop =()=>{
        return(
        window.scrollTo({
            top: 0,
            behavior: `smooth`
          })
          )}
    return(
        <div onClick={scrooltotop} className="gears">
            {Introjsons}
        </div>
        )
}
export default Videos;