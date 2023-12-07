import React from "react";
import IntroComponent from "../../../components/introComponent";
import { Link } from "react-router-dom";
import '../../css/intros.css';
import img1 from '../../../img/knowledge/techniques/Train_for_rock/1.avif'

const training = ()=>{
    return(
        <div className="gears"> 
            <Link className='intro' to={`/How-to-Train-Everywhere-and-Anywhere`}>
                <IntroComponent pic='https://i.pinimg.com/564x/91/9d/aa/919daa51a0046bcd0d34dbc6b54a46e2.jpg' title="How to Train Everywhere and Anywhere" intro="Even the most dedicated gym rats can’t pull plastic everyday."></IntroComponent>
            </Link>
            <Link className='intro' to={`/How-to-Train-for-Climbing-in-a-Non-Climbing-Gym`}>
                <IntroComponent pic='https://i.pinimg.com/564x/5c/e6/5a/5ce65a532c9e691067127da6ad41e7a5.jpg' title="How to Train for Climbing in a Non-Climbing Gym" intro="If you live far from the crags or a climbing gym—or find yourself marooned in a “climbing desert”—you need not lose sight of your climbing goals."></IntroComponent>
            </Link>
            <Link className='intro' to={`/How-Climber-Should-Train-for-Dynamic-Movement`}>
                <IntroComponent pic='https://i.pinimg.com/564x/59/bf/fb/59bffb9d56751bd17dce3de9861136a9.jpg' title="How Climber Should Train for Dynamic Movement" intro="Plyometrics involve rapid muscle stretching and contraction to increase power production."></IntroComponent>
            </Link>
            <Link className='intro' to={`/How-To-Know-When-To-Keep-Training-And-When-To-Quit`}>
                <IntroComponent pic='https://i.pinimg.com/564x/a3/6e/c3/a36ec39be7f4a9a95525a899dba99074.jpg' title="How To Know When To Keep Training And When To Quit" intro="It's easy to push your training too far, and get injured or see negative progress because you are doing too much."></IntroComponent>
            </Link>
            <Link className='intro' to={`/Build-Your-Training-Around-Your-Life`}>
                <IntroComponent pic='https://cdn.climbing.com/wp-content/uploads/2022/10/El-Salto_Mexico_jannovakphotography-2.jpg.jpg?crop=16:9&width=1500' title="Build Your Training Around Your Life" intro="The reality is that you likely need to eliminate some training protocols and narrow your focus to become a better climber."></IntroComponent>
            </Link>
            <Link className='intro' to={`/Is-Training-Worth-Your-Time?`}>
                <IntroComponent pic='https://i.pinimg.com/564x/68/d6/4d/68d64d4aa62679ed048dcba123065ef9.jpg' title="Is Training Worth Your Time?" intro="Not many will argue that hitting the fingerboard will improve your climbing grade, but if simply going climbing is just as effective..."></IntroComponent>
            </Link>
            <Link className='intro' to={`/Is-Collagen-Protein-Worth-the-Hype?`}>
                <IntroComponent pic='https://i.pinimg.com/564x/5f/57/6c/5f576cff8b3db9f940c1e2dcb694e346.jpg' title="Is Collagen Protein Worth the Hype?" intro="More climbers than ever are stirring collagen into their morning coffee, or snacking on gelatin, trying to keep their tendons healthy. But are these supplements actually helping?"></IntroComponent>
            </Link>
            <Link className='intro' to={`/Jonathan-Siegrist:Easy-Sends-Don’t-Improve-Your-Climbing`}>
                <IntroComponent pic='https://i.pinimg.com/564x/b2/74/0d/b2740df7a070fa95db1c73c393c97fcd.jpg' title="Jonathan Siegrist: Easy Sends Don’t Improve Your Climbing" intro="How Jonathan Siegrist, possibly the most prolific sport climber in the United States, trained his anti-style and went from a vertical crimp specialist to a steep cave crusher."></IntroComponent>
            </Link>
            <Link className='intro' to={`/Try-This-45-minute-Circuit-Workout`}>
                <IntroComponent pic='https://i.pinimg.com/564x/06/8a/5c/068a5ca8a296f2d658b7163056311c73.jpg' title="Short on Time? Try This 45-minute Circuit Workout" intro="Busy life and can't get to the climbing gym or rocks mid-week? Try this quick strength-building workout.."></IntroComponent>
            </Link>
            <Link className='intro' to={`/Optimize-Your-Climbing-Performance`}>
                <IntroComponent pic='https://i.pinimg.com/564x/70/e0/6a/70e06a67b62bb87c8a65095ad8ff3a59.jpg' title="Optimize Your Climbing Performance" intro="Pelvic problems are overwhelmingly prevalent—but they do not need to be accepted as part of life."></IntroComponent>
            </Link>
            <Link className='intro' to={`/Stop-Overgripping!-Here’s-How`}>
                <IntroComponent pic='https://i.pinimg.com/564x/eb/08/7a/eb087a1b5eaa5272886e86edf87804bf.jpg' title="Stop Overgripping! Here’s How" intro="Professional climber and coach Neil Gresham's advice for training yourself to grip holds just enough, and not so much you waste power."></IntroComponent>
            </Link>
        </div>
        )
}
export default training;