import React from "react";
import '../../../css/dt.css';
import video1 from '../../../../videos/weekend_008.mp4';


const Weekend_Whipper_08 =()=>{
    return(
        <div className="test">
            <h1>Weekend Whipper: Huge Air Time in El Salto, Mexico</h1>
            <video width='100%' controls>
                <source src={video1} type="video/mp4"></source>
            </video>
            <p>Laura Tociu wasn’t sure if this clip was Weekend Whipper-worthy when she submitted it, because she didn’t think there were any lessons to be learned. While we wholly appreciate that she didn’t want to waste our time, we also think there is no reason not to celebrate big, clean falls.</p>
            <p>Tociu was climbing at the Tecolote Cave in El Salto, Mexico. She was getting increasingly close to sending <i>Soul Power</i>, a 120-foot beast of a pitch with a steep, pumpy crux right below the chains. Realizing she didn’t possess quite enough horsepower to make it to the chains with all her draws clipped, Tociu chose to skip two of them mid-crux and punch it with the rope waving between her legs.</p>
            <p>Tociu logged nothing but air miles thanks to Tecolote’s steepness and called her whip “the craziest air I’ve ever had.” Buoyed by her positive experience during the fall, Tociu says she hopped back on the route, skipped those same two bolts, and sent without drama. Congrats!</p>
        </div>
    );
}
export default Weekend_Whipper_08;