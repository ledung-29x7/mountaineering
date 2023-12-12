import React from "react";
import '../../css/dt.css';
import ReactPlayer from "react-player";
import img1 from '../../../img/News/Groundfall/1.webp';
import img2 from '../../../img/News/Groundfall/2.webp';
import img3 from '../../../img/News/Groundfall/3.webp';

const Groundfall =()=>{
    return(
        <div className="test">
            <h1>Sling Jams Micro Traxion, Sending Climber into 30-foot Groundfall</h1>
            <p style={{fontStyle:'italic', textAlign:'center'}}>After her fall, Whitney Clark crawled for 2.5 hours down talus and scree to reach a rescue helicopter, but ultimately suffered only minor injuries.</p>
            <img className="img_bv" src={img1}></img>
            <p>Climber <a href="https://www.instagram.com/whitneyclark6/">Whitney Clark</a> suffered a 30-foot groundfall in Sequoia National Park on October 8, after a sling jammed into her lone progress capture device—a Petzl Micro Traxion—while she was ascending a fixed line.</p>
            <p>After tackling the 16-mile approach to <a href="https://www.mountainproject.com/area/109957121/angel-wings">Angel Wings</a> on October 6, Clark and partner Luka Krajnc fixed the initial pitches of their objective, the 17-pitch ultra classic <a href="https://www.mountainproject.com/route/110785246/valkyrie">Valkyrie</a> (IV 5.11+; 2,200ft), the following day. On the morning of October 8, Krajnc climbed the route’s first pitch, a 70-degree slab, top rope soloing with a GriGri. Clark followed him, using a Micro Traxion as her only ascension device. </p>
            <p>Though she had intended to top rope solo as well, this initial section (5.8) was so meandering and zigzaggy that the fixed rope didn’t allow her to easily free climb. She decided not to worry about the climbing and simply jug straight up the initial portion of the blank slab, climbing later, once the rope had better directionals. Pasting her feet against the slab to push upward, Clark pulled herself up the rope and used the Micro Traxion to lock her progress after each pull. She had no second device or friction hitch.</p>
            <p>When she was approximately 30 feet up, Clark realized that a sling hanging around her neck—which she had planned to clip through the Micro Traxion’s carabiner to hold it upright, helping it feed smoothly when she began climbing—was jammed between the device’s teeth and the rope. “When I sat back down it wasn’t holding my body weight, because the sling had somehow gotten sucked in there,” she said. “I hadn’t tied a backup knot yet. I was going to but hadn’t yet, because I was only 30 feet up.”</p>
            <img className="img_bv" src={img3}></img>
            <p>Clark attempted to wrap the rope around her leg until she could fix her device, but her rope was new, thin (8.9mm), and so slippery that she couldn’t find purchase, and quickly began sliding down the rope. “Eventually, the rope burn was just too bad and I let go.”</p>
            <p>Though Clark fell completely to the deck, the ground was sloped away from the wall and there were a few bushes to help break her fall. “When I landed, I hit my ankle, lower back, and then my head,” she said. “But because the ground was angled, I think some of the force was dissipated.” Though she hit her head quite hard, Clark was wearing a helmet and never lost consciousness. She also landed only six inches from a large rock spike jutting out of the ground. “I really threaded the needle there,” she said.</p>
            <p>Krajnc came down immediately to help. Clark passed a spinal exam, but her ankle was extremely swollen and painful, and she was unable to walk. “I sat there for half an hour or so, then asked [Krajnc] to go up and get our stuff off the wall,” she said. “I knew that I needed to get to where a helicopter could get to me. We were 16 miles in, and as much as I’d like to be self-sufficient, there was no way I could crawl 16 miles.” Clark put crack-climbing gloves on her palms and spent the next two and a half hours crawling and butt-scooting down talus and bushes, across a stream, to a semi-flat area near the pair’s campsite where she was evacuated by helicopter.</p>
            <img className="img_bv" src={img2}></img>
            <p>After several hours of medical evaluation, Clark was able to check out of the hospital with merely a sore back, an avulsion fracture on her left ankle, some rope burn, and whiplash.</p>
            <p>While at first glance, this accident may appear cut-and-dry, with a climber committing an obvious error (using only one device and no backup to ascend a fixed line), it’s a reminder that even extremely experienced climbers like Clark can make mistakes when trying to move quickly. </p>
            <p>Backing up systems is important no matter how short, low-angle, or otherwise mellow the terrain may be. “I had no problem sharing this story because I know so many people that also use one device sometimes,” Clark said. “It’s so easy to get complacent and cut corners, and most of the time it turns out fine. But when it’s not fine, it’s really not fine. If I didn’t have two devices, at least I should’ve tied a backup knot so I wouldn’t have hit the ground. That [would have taken] two seconds. I was extremely lucky to walk away from this with a small injury.”</p>
            
        </div>

    )
}
export default Groundfall;