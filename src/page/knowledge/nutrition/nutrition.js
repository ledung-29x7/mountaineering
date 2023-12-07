import React from "react";
import IntroComponent from "../../../components/introComponent";
import { Link } from "react-router-dom";
import '../../css/intros.css';
import img1 from '../../../img/knowledge/techniques/Train_for_rock/1.avif'

const nutrition = ()=>{
    return(
        <div className="gears">
            <Link className='intro' to={`/`}>
                <IntroComponent pic={img1} title="How to Train for Rock Climbing and Bouldering" intro="The best way to train for rock climbing is to spend time climbing—whether you do at the gym or the crag......"></IntroComponent>
            </Link> 
        </div>
        )
}
export default nutrition;