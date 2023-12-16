
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/intros.css';
import IntroComponent from '../../../components/introComponent';
import Introjson from './overview.json'


const overview =()=>{
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
export default overview;