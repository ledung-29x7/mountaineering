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
            <Link className='intro' to={`/Good-To-Go Meals,a-lightweight-climbing-food`}>
                <IntroComponent pic='https://i.pinimg.com/564x/b1/43/5b/b1435bcffad70ee66a8b78ab8f73ed99.jpg' title="Field Tested: Good To-Go Meals, a lightweight climbing food" intro="These meals are a worthy option for overnight climbers and campers who want to eat real, delicious food with a finite lifespan."></IntroComponent>
            </Link>
            <Link className='intro' to={`/Why-The-Keto-Diet-Will-Hurt-Your-Climbing`}>
                <IntroComponent pic='https://i.pinimg.com/564x/ce/8a/2c/ce8a2c108a195949863a2f4c7f481cb4.jpg' title="Why The Keto Diet Will Hurt Your Climbing" intro="This high-fat low-carbohydrate diet will deplete your energy and can lead to health issues."></IntroComponent>
            </Link>
            <Link className='intro' to={`/Can-Going-Vegan`}>
                <IntroComponent pic='https://i.pinimg.com/236x/8a/2a/0a/8a2a0a2cad46ae539fcff5bab1f8a418.jpg' title="Can Going Vegan Help You Climb Harder?" intro="The benefits to giving up meat and dairy are wide ranging, but is the life-change suitable for you?"></IntroComponent>
            </Link>
            <Link className='intro' to={`/Are-Vitamins-Harmful?`}>
                <IntroComponent pic='https://i.pinimg.com/564x/37/d9/38/37d938bc54c476b99f4d93de86d876ec.jpg' title="Are Vitamins Harmful? A Nutritionist Weighs In." intro="We may think that because we participate in a physically difficult sport that vitamins will help make up for high output. Think again."></IntroComponent>
            </Link>
        </div>
        )
}
export default nutrition;