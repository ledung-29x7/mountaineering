import React from "react";
import '../../../css/dt.css';
import video1 from '../../../../videos/weekend_001.mp4';


const Weekend_Whipper_01 =()=>{
    return(
        <div className="test">
            <h1>Weekend Whipper: Too Pumped to Clip!</h1>
            <video width='100%' controls>
                <source src={video1} type="video/mp4"></source>
            </video>
            <p>This whipper comes from Zee Wicked Witch at Enchanted Tower, NM, a route perhaps best described as a steep, 14-bolt endurance fest. Climber Alex Fischer had successfully climbed through the crux and pulled up slack to clip the final bolt when he pumped off.</p>
            <p>“This was my first time ever falling while clipping,” he told <i>Climbing</i>. A huge but very safe fall. … I couldn’t even swing back into the wall to get back on the rock.”</p>
            <p>“I fell because I shortroped myself,” he explained. “I didn’t pull up enough slack to make the rope reach the bolt, so I tried to stand up a little higher to reach it—then I pumped out and fell.”</p>
            <p>On his next two attempts, Fischer opted to skip the last bolt and run it out. Both times he fell just one move higher, taking similarly large falls. “After those failed attempts, I rapped in from the top to work the climbing at that last bolt, which is supposed to be after the crux, despite the fact that I kept falling there.” Fischer reported that he got the last sequence “totally dialed” and then fired it next go.</p>
        </div>
    );
}
export default Weekend_Whipper_01;