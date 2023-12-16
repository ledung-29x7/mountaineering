import React from "react";
import '../../../css/dt.css';
import video1 from '../../../../videos/weekend_005.mp4';


const Weekend_Whipper_05 =()=>{
    return(
        <div className="test">
            <h1>Weekend Whipper: Ice Climber Falls With Rope Between Legs—Mid Figure Four</h1>
            <video width='100%' controls>
                <source src={video1} type="video/mp4"></source>
            </video>
            <p>Festiglace (French for “ice fest”) in Pont Rouge, Quebec, is one of the best ice climbing competitions around. While some “ice” comps dangle plastic and plywood cubes from scaffolding for competitors to hang from, Festiglace forces a line up plated rock and imposing ice daggers.</p>
            <p>But the falls can be serious: One of the routes in the “enduro” competition tackles a steep pitch of ice. Falling off there would be just as serious as any water-ice pitch in the wild. The mixed routes are no joke, either. Competitor Caroline Ouellet pitched off mid-figure four and took one helluva ride. Thankfully the pitch was steep and airy—she caught mainly just air, until the end—and Ouellet walked away unscathed.</p>
            <p>Her lesson learned? “Clip the rope as soon as possible before a hard move (even if it’s a long reach), and don’t do a figure four with the rope between the legs.”</p>
            <p>That’s some sage advice. Thanks to Christopher McKenney for the video.</p>
        </div>
    );
}
export default Weekend_Whipper_05;