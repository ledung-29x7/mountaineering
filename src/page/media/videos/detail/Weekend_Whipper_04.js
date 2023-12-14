import React from "react";
import '../../../css/dt.css';
import video1 from '../../../../videos/weekend_004.mp4';


const Weekend_Whipper_04 =()=>{
    return(
        <div className="test">
            <h1>Weekend Whipper: Stacking It On the World’s Most Famous Boulder</h1>
            <video width='100%' controls>
                <source src={video1} type="video/mp4"></source>
            </video>
            <p>It’s that time of the week again: when we watch folks huck themselves on (or off of) their projects. Matt Reeser was working the uber-classic—the most classic, we’d argue—<i>Midnight Lightning</i> (V8), in Yosemite’s Camp 4 boulders.</p>
            <p>First climbed by Ron Kauk in 1978, <i>Midnight Lightning</i> begins on some small crimps before a few big moves deposit you below the infamous mantle. Best done with a press-undercling combo, the crux of <i>Midnight Lightning</i> really is trusting your right foot that’s pasted onto the slick Yosemite stone.</p>
            <p>The fall is safe, at least, if a bit exciting.</p>
        </div>
    );
}
export default Weekend_Whipper_04;