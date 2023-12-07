import React from "react";
import IntroComponent from "../../../components/introComponent";
import { Link } from "react-router-dom";
import '../../css/intros.css';

const nutrition = ()=>{
    return(
        <div className="gears">
            <Link className='intro' to={`/Why-You-Should-Probably-Supplement-Vitamin-D`}>
                <IntroComponent pic='https://i.pinimg.com/564x/f6/1a/89/f61a8947c9f597ef2809bae3a1fef355.jpg' title="Why You Should Probably Supplement Vitamin D" intro="Studies indicate Vitamin D impacts recovery, mood, immunity, and more. And chances are, if you're like over half of Americans, you're deficient."></IntroComponent>
            </Link> 
        </div>
        )
}
export default nutrition;