import React from "react";
import '../../../css/dt.css';
import video1 from '../../../../videos/Chris_Sharmas_First_Ascent _of _Es_Pontas_Mallorca.mp4';


const Mallorca =()=>{
    return(
        <div className="test">
            <h1>Chris Sharmas First Ascent of Es Pontás Mallorca</h1>
            <video width='100%' controls>
                <source src={video1} type="video/mp4"></source>
            </video>
            <p>Chris Sharma envisioned a line up the underside of this free-standing limestone arch off the coast of Mallorca. Climbing ropeless above the Mediterranean Sea, Sharma spent months attempting the seven foot dyno, splashing down at least 50 times before finally sticking it, then falling many more times at the even harder lip of the arch. He finally made the first ascent of this masterpiece in September, 2006. This is a remastered cut of the send, adapted from the original sequence in the feature documentary King Lines. Es Pontas (“The Bridge” in the Mallorquin dialect) is unrated, but considered to be among the hardest climbs in the world. It went unrepeated for a decade, and even today has only been done by two other climbers. (Watch the second ascent by Jernej Kruder.) This video is dedicated to the late Miquel Riera, the godfather of Mallorcan Psicobloc (deep water soloing) who pointed Chris to Es Pontas, the ultimate “King Line.”</p>
        </div>
    )}
export default Mallorca;