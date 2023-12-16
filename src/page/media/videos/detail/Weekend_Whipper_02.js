import React from "react";
import '../../../css/dt.css';
import video1 from '../../../../videos/weekend_002.mp4';


const Weekend_Whipper_02 =()=>{
    return(
        <div className="test">
            <h1>Weekend Whipper: A Reminder to Make Your Friends Hang Draws</h1>
            <video width='100%' controls>
                <source src={video1} type="video/mp4"></source>
            </video>
            <p>There’s no doubt about it: hanging draws while climbing onsight is significantly harder than having them pre-hung. And when you’re hanging draws on a route that’s at your physical limit? Well, that’s just not fair.</p>
            <p>“At this point I was feeling confident, warmed up, and ready to hang the draws for my group and give <i>Prime Directive</i> a proper onsight attempt,” Abrams told <i>Climbing</i>. But as he climbed higher up the arête, traversing from the left face onto the right, he realized he was too pumped to clip the draw he’d hung at the crux.</p>
            <p>“I attempted to clip,” he said, “the first attempt was a struggle and the rope drag had other ideas for me. The second attempt was a miscalculation of where the gate was on the carabiner which resulted in me dumping the rope and giving up. Deciding to climb away from this missed clip, I was unsure about the next moves I had ahead of me, unable to identify the next sequence.”</p>
            <p>Abrams stabbed his feet desperately before ultimately pitching off, receiving a “softy” of a catch from his belayer. “I’ll be back for you next time <i>Prime Directive</i>,” Abrams said, “hopefully with someone who will hang the draws for me.”</p>
        </div>
    );
}
export default Weekend_Whipper_02;