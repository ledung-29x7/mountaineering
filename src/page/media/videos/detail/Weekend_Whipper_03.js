import React from "react";
import '../../../css/dt.css';
import video1 from '../../../../videos/weekend_003.mp4';


const Weekend_Whipper_03 =()=>{
    return(
        <div className="test">
            <h1>Weekend Whipper: A Reminder to Not Let the Rope Get Behind Your Leg</h1>
            <video width='100%' controls>
                <source src={video1} type="video/mp4"></source>
            </video>
            <p>Folks, it’s never too early (or late, or repetitive) to be reminded that flipping upside down is one of the worst ways to experience a rock climb. Just ask Michael Leathers, who was trying <i>Incinerator</i> in Holcomb Valley, CA, and flipped upside down trying to latch a distant jug.</p>
            <p>Mountain Project describes <i>Incinerator</i> as “super fun and well-protected, this is popular to finish the day or oneself on.” Unfortunately, Leathers seemed to take the latter advice too literally, and flicked his foot behind the rope for a relatively violent short fall. (A softer catch may have helped too, but alas.)</p>
            <p>While Leathers was totally fine, we’d recommend he keep it tight during his future dynos.</p>
        </div>
    );
}
export default Weekend_Whipper_03;