import React from "react";
import '../../../css/dt.css';
import video1 from '../../../../videos/weekend_007.mp4';


const Weekend_Whipper_07 =()=>{
    return(
        <div className="test">
            <h1>Weekend Whipper: Why Belayers Should Always Wear a Helmet</h1>
            <video width='100%' controls>
                <source src={video1} type="video/mp4"></source>
            </video>
            <p><b>Headpointing dangerous trad routes</b> is typically a precise affair. With little to no margins for error, climbers rely on extensive planning and beta rehearsal to ensure they do not take an injurious fall.</p>
            <p>Eric Marx was certainly diligent while preparing for the “slick, sandbagged corner” that is <i>Cilley Dickin’</i> in the Shawangunks, NY. The route was first done on top rope by the renowned climber Dick Cilley in 1978, and first led by Hugh Herr in 1980. It remains a seldom-done pitch.</p>
            <p>He knew the route’s dangerous reputation and history; he’d carefully dialed his beta on toprope, knew which offset cams would probably fail in a fall, and had faith that a small stopper would keep him off the deck. He planned to clip his rope into a locking carabiner on that nut, to minimize the risk of random de-clipping. Marx had thought of his belayer, Sabrina, too: because of their weight difference, she was tethered to a ground anchor to prevent her from being lifted too high and causing him to deck.</p>
            <p>“Neither of us anticipated that I would fall to the height her head was … and absolutely boot her into the edge of a flake,” Marx told <i>Climbing</i>.</p>
            <p>Despite the gnarly looking fall, Sabrina was minimally injured, incurring just a small bump and a bruise. Marx said the only headpointing tactic he would change in the future would be to have his belayer wear a helmet, a piece of gear he could have predicted she would need if he had “more precisely considered the distance I would fall in relation to her anchor point.” Marx said Sabrina could not have been anchored more tightly hard catch, more force on critical stopper placement, nor could she have been anchored to the side of the area he would fall directionality concerns. All in all, Marx concluded, it was “a high-impact fall with low-impact consequences. Whew!”</p>
        </div>
    );
}
export default Weekend_Whipper_07;