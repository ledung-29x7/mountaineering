import React from "react";
import '../../../css/dt.css';
import video1 from '../../../../videos/weekend_006.mp4';


const Weekend_Whipper_06 =()=>{
    return(
        <div className="test">
            <h1>Weekend Whipper: Have You Ever “Forgotten” You Were on Lead?</h1>
            <video width='100%' controls>
                <source src={video1} type="video/mp4"></source>
            </video>
            <p>Projecting is repetitive—there’s no doubt about it. Those crux moves, once impossibly hard and cryptic, become easier and easier as you beat the route into routine.</p>
            <p>Boulderers are perhaps most familiar with the feeling of being on autopilot once you finally link your project together. Sport climbers know the feeling well, too. But achieving that degree of mindless flowstate while headpointing a tricky trad pitch is certainly not something most of us encounter in our day-to-day redpointing endeavors. But Costin Anghel recently did.</p>
            <p>Anghel was working <i>Projectile</i> in the Gunks, an arching corner with a “desperate toss” to a jug that’s level with the chains. Angel said the last 20 feet of Projectile are especially powerful, and so, on lead, he opted to skip a 0.2-cam placement to save some gas.</p>
            <p>Anghel’s headpointing session had grown repetitive as the day wore on, and when he tied into the sharp end he said he was effectively just going through the motions. He wrote to Climbing: “We were alternating between taking redpoint burns and working it on top rope, and I guess I was so tired late in the day that I forgot I was on lead! Normally I would have been more attentive to the fact that my leg was behind the rope, but in this case I didn’t notice and upside down I went.”</p>
            <p>We’ll reiterate: we haven’t heard that one before.</p>
        </div>
    );
}
export default Weekend_Whipper_06;