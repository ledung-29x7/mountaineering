import React from "react";
import '../../../css/dt.css';
import Related_articles from "../../../../components/Related_articles";

import img1 from '../../../../img/knowledge/techniques/sheltering/Shelter_For_The_Storm/shelter-for-the-storm.webp';

const Shelter_For_The_Storm =()=>{
    const posts =[
        {
            pic:"/techniques/intro/3.avif",
            title:"Snow Travel Techniques for Mountaineering",
            intro:"Knowing how to safely and efficiently travel on snow slopes is a fundamental skill......",
            pages:"/Snow-Travel-Techniques-for-Mountaineering"
        },
        {
            pic:"/techniques/intro/4.avif",
            title:"How to Use Crampons",
            intro:"Whether you’re summitting a big mountain or crossing a snowfield while hiking at higher elevations......",
            pages:"/How-to-Use-Crampons"
        },
        {
            pic:"/techniques/intro/8.avif",
            title:"Glacier and Roped Travel for Mountaineering",
            intro:"If you have dreams of scaling a glaciated peak like Mount Rainier or Denali, you’ll need to know how to travel across.......",
            pages:"/Glacier-and-Roped-Travel-for-Mountaineering"
        },
    ]
    return(
        <div className="test">
            <h1>Shelter For The Storm</h1>
            <img className="img_bv" src={img1}/>
            <h3>Pitching the perfect tent in the high mountains</h3>
            <p>When a storm hits, most expedition climbers play cards, pick lint off of their boot liners, or fantasize about sipping Mai Thais. A little “tent pitching” and a flask of grandpa’s cough syrup easily bide the downtime for most, but when Mother Nature blows nuclear-strength wind and weather directly onto you, you don’t want to be that sorry sap chasing after a torn-up tent. Here are a few pointers to prepare your “perfect” shelter for the storm.</p>
            <p><strong>Set up or Shut up</strong> A sloppy set-up means more work in the long run — get it right the first  time. Your tent’s main entrance should face downwind, with the long axis aligned parallel to the wind. Do as much prep work on the ground as possible, attaching the tent to at least one anchor point on the windward side and sliding all poles through their sleeves (or clips), so they can easily insert into their respective gussets the moment you raise the tent.</p>
            <p><strong>The Roots</strong> Once you’ve placed the fly, secure the back vestibule with a solid anchor. (This windward-side anchor will take the brunt of the blow, so make sure it’s bomber, with a secure picket, deeply buried deadman, or a pile of rocks heavy enough to hold strong when you’re tugging on the guy lines.) Next, anchor the tent’s front vestibule (the main entrance), ensuring that the tent’s long axis is fully stretched and taut; then work your way around the tent, guying out the fly. A properly secured tent body and fly will diminish excessive flapping, which stresses the material and creates obnoxious, sleep-interrupting noise.</p>
            <p><strong>Skirts</strong> If you spend lots of time in nasty conditions, add a valance: a wide flap of nylon running around the fly’s bottom edge (buried under snow). Widely used outside the United States, the valance acts like a powder skirt of sorts — it minimizes snow blowing up underneath, helps anchor the tent, and reduces fabric flappage. In the States, your best bet is to hit the fabric store, and then sweet-talk your grandma (or local tailor) into sewing the valance into place. In Antarctica and similar locales, valances are the norm.</p>
            <p><strong>Bulletproof</strong> Snow walls provide additional wind blocking. Build your snow walls as tall as the tent and distant enough (3 or 4 feet) to provide ample room for such tasks as moving guy lines and shoveling snow. When the wind is especially strong, build two concentric rings, or make a single wall two blocks thick. This will further mitigate direct wind and drifting, and also mute the beastly howl.</p>
            <p><strong>Calling All Reinforcements</strong> In punishing winds, reinforce your position by lashing a climbing rope back and forth over the tent. If you have a second set of tent poles, insert them alongside the original poles (i.e., parallel), to augment the tent structure. And for internal fortification, place backpacks, boots, and bodies against the most wind-beaten wall.</p>
            <p><strong>Housekeeping</strong> A snow-cloaked fly can collapse the tent. One indication of snow build-up is a dampening of noise (i.e., less howl) and a loss of ambient light. If you’ve gotten to that point, you’re behind the ball — it’s maintenance time! Use either a gloved hand for snow removal or, if you must, a shovel, taking special care not to shear a guy line or cut the tent itself.</p>
            <p><strong>Back up</strong> “Be, be, be prepared” — it’s the motto of the Boy Scouts, and it’s a good one. Unless you prefer freezing to death, you’ll need to act quickly if the tent has collapsed, thereby snapping your poles and tearing apart your shelter. Can you dig in? Where’s the best place to dig a snow cave? (To prepare for this eventuality, you should scope alternative bivy sites and suitable escape routes during fair weather.) Instead of sleeping with a teddy bear, rest with your shovel, and keep your headlamp and warm layers close at hand. If it’s terminally nuking, sleep with a knife, a measure of last resort you can use to cut through the tent.</p>
            {/* related articles */}
            <Related_articles posts={posts}></Related_articles>
        </div>
    )
}
export default Shelter_For_The_Storm;