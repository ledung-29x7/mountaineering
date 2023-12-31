import React from 'react';
import '../../../css/dt.css';
import Related_articles from '../../../../components/Related_articles';
import img1 from '../../../../img/knowledge/techniques/belay/1.avif';
import img2 from '../../../../img/knowledge/techniques/belay/2.avif';
import img3 from '../../../../img/knowledge/techniques/belay/3.avif';
import img4 from '../../../../img/knowledge/techniques/belay/4.avif';
import img5 from '../../../../img/knowledge/techniques/belay/5.avif';
import img6 from '../../../../img/knowledge/techniques/belay/6.avif';
import img7 from '../../../../img/knowledge/techniques/belay/7.avif';
const Belay = () =>{

    const posts =[
        {
            pic:"/techniques/intro/6.avif" ,
            title:"Trad Climbing Basics" ,
            intro:"Traditional or trad climbing.The term didn't exist until the birth of pre-bolted climbing routes, or sport climbing........",
            pages:"/Trad-Climbing-Basics"
        },
        {
            pic:"/techniques/intro/7.avif",
            title:"Route Finding and Navigation for Mountaineering",
            intro:"Good route finding and navigation starts before you set foot on the mountain........",
            pages:"/Route-Finding-and-Navigation-for-Mountaineering"
        },
        {
            pic:"/techniques/intro/8.avif",
            title:"Glacier and Roped Travel for Mountaineering",
            intro:"If you have dreams of scaling a glaciated peak like Mount Rainier or Denali, you’ll need to know how to travel across.......",
            pages:"/Glacier-and-Roped-Travel-for-Mountaineering"
        }
    ]
    return(
        <div className='test'>
            <h1>How to Belay</h1>
            <p>This article is part of our series: Intro to Rock Climbing</p>
            <img className='img_bv' src={img1}></img>
            <p>Typically, every roped climber clinging to a rock face or gym wall has a partner performing a critical role on the ground. The belayer skillfully handles the rope and can be relied upon to catch a fall every time the need arises.</p>
            <p>Belaying is a foundational skill that climbing classes teach early on and instruction from a qualified teacher is essential. This article covers the basics of top-rope belaying, but is not meant to replace hands-on learning. (For an overview of lead belaying, read, How to Belay a Lead Climber.)</p>
            <p>REI Outdoor School offers classes that teach all types of belay, along with a wide range of additional climbing fundamentals.</p>
            <h4>The key steps in learning how to top-rope belay include:</h4>
            <ul className='ul_li'>
                <li>Gearing up</li>
                <li>Set-up</li>
                <li>Communication</li>
                <li>Technique</li>
            </ul>
            <h3> Video: How to Belay</h3>
            <a href='https://youtu.be/CFIz4cBFVro'></a>
            <h2>Gearing Up to Belay</h2>
            <p>When you take a belay class, typically a rope, harness, helmet (if climbing outdoors), locking carabiner, belay device and rock shoes are either provided or available for rent. Check with your climbing instructor to see if you need to bring any additional gear.</p>
            <p>For an overview of basic climbing gear, see Getting Started Rock Climbing.</p>
            <p>Types of belay devices: Your belay device is used to manage rope slack/tension, catch a fall and lower your climbing partner. The two main belay device types are tubular and brake assist.</p>
            <p>This article covers belay with a tubular device. Belay techniques vary for many reasons. If you choose a different type of device than the one you were originally taught to use, then you must learn and practice techniques with that new device. Though basic top-rope belay is similar on many devices, a few details differ. And belaying a lead climber can be quite different, especially on a brake-assist device.</p>
            <p>When the time comes to buy your own belay device, check out our article, How to Choose Belay Devices. </p>
            <h2>Setting Up the Belay</h2>
            <img className='img_bv' src={img2}></img>
            <p>While the climber ties in to the harness using a figure 8 knot, you need to do several steps:</p>
            <p>Close the system by tying a stopper knot in the end of the rope. This ensures your end of the rope will never pass completely through the belay device, dropping the climber. </p>
            <p>When the climber is much heavier than you, also consider tying in to a ground anchor. Ground anchors are worth considering, too, whenever you’re forced to belay in a place that less than ideal: where you have an obstruction between you and the wall, for example.</p>
            <p>Set up the belay device by sliding a bight of rope through the tube closest to your dominant hand. Though many belay devices are symmetrical, some have a grooved inner surface on one side of each tube: This provides additional friction if needed to belay a heavier climber or to belay with a rope that's thinner or slicker than normal.</p>
            <p>The climber-rope side of the bight, which goes up to the anchor and back down to the climber, should always be on the top side of your belay device.</p>
            <p>Attach a locking carabiner, which must pass through the bight and belay-device cable, as well as your harness belay loop. To avoid stressing the cable on your belay device, make sure the rope bight doesn’t cross over the cable. Lock the carabiner.</p>
            <h2>Performing the Safety Check</h2>
            <img className='img_bv' src={img3}></img>
            <p>Before climbing, the climber and belayer always double-check each other’s setup:</p>
            <ul className='ul_li'>
                <li>Knots: Is the climber’s figure 8 tied correctly and did the belayer close the system correctly with a stopper knot?</li>
                <li>Buckles: Are both harnesses snug with buckles securely fastened? Whether it’s inherent in the buckle design or (on older harnesses) the climber must perform the task, straps must double back through buckles to secure them.</li>
                <li>Belay Device: Is it properly threaded? Does the carabiner pass through the rope, belay-device cable and harness belay loop? Is the carabiner locked?</li>
                <li>Command Check: Because terms can vary, run through your communication to review terminology and to be sure you agree on every term you will use.</li>
            </ul>
            <h2>Belay Communication</h2>
            <img className='img_bv' src={img4}></img>
            <p>Be loud with these, because miscommunication can be as consequential as any other type of climbing-system failure. Review commands initially to be sure you and your partner are on the same page. Here are the common commands: </p>
            <p>Climber: “On belay?” (Are you ready to belay me?)</p>
            <p>Belayer: “Belay on.” (Slack is gone and I’m ready.)</p>
            <p>Climber: “Climbing.” (I’m going to climb now.)</p>
            <p>Belayer: “Climb on.” (I’m ready for you to climb.)</p>
            <p>Climber: “Slack!” (Pay out a little rope.)</p>
            <p>Belayer: (Pay out rope and pause to see if climber asks again.)</p>
            <p>Climber: “Up rope.” (Pull in rope slack.)</p>
            <p>Belayer: (Pull in slack and pause to see if climber asks again.)</p>
            <p>Climber: “Tension.” (I want to rest by hanging on the rope now.)</p>
            <p>Belayer: (Remove all slack and hold tight.) “Gotcha.”</p>
            <p>Climber: “Ready to lower.” (I’m done climbing.)</p>
            <p>Belayer: (Reposition both hands to brake.) “Lowering.”</p>
            <p>Climber: “Off belay.” (I’m standing securely on the ground.)</p>
            <p>Belayer: “Belay off.” (I’ve stopped belaying you.)</p>
            <p>The “take” command: Many climbers use this rather than “tension” when they want the belayer to remove slack and take the weight of the climber on the rope. The argument for using “tension” instead is that “take” can be confused with “slack,” and confusing those commands would be a very bad thing.</p>
            <p>Naming names: Start every command with your partner’s name. On a crowded crag or in a busy gym, voices are hard to distinguish. One sure way that your partner will know that the command came from you is to add your partner’s name to it.</p>
            <p>Other Important Commands: If you hear these shouted by a climber, with or without a name, ready yourself.</p>
            <ul className='ul_li'>
                <li>"Rock!" This is for anything, natural or manufactured, that gets loose. When you hear this, look down (not up) so your helmet can protect you.</li>
                <li>"Watch Me!" This means a climber thinks a fall is likely.</li>
                <li>"Falling!" Means exactly what you think it means.</li>
            </ul>
            <h2>Belay Technique</h2>
            <img className='img_bv' src={img5}></img>
            <ul className='ul_li'>
                <li>The following are universal belay principles:</li>
                <li>Always keep your brake hand(s) on the rope. ALWAYS.</li>
                <li>Only slide a hand when the rope is firmly held in the braking position.</li>
                <li>Always orient brake hands in their strongest natural position.</li>
                <li>Always maintain attention on your climber, and be watchful for any hazards in your surroundings.</li>
            </ul>
            <h4>Proper Belay Stance</h4>
            <ul className='ul_li'>
                <li>Athletically, that means your non-dominant foot is forward, your knees are bent and your whole body is relaxed yet ready.</li>
                <li>Geographically, that means you’re not too far from the wall. To avoid impact from the climber or a rock, you’re also one step away from being directly under the climber’s route.</li>
                <li>Organizationally, that means that any rope on the ground is neatly stacked so that it won’t get tangled up as you’re belaying.</li>
            </ul>
            <h4>Proper Hand Position</h4>
            <ul className='ul_li'>
                <li>Brake hand: Place your dominant hand about six inches below the belay device and firmly grip the rope. Thumb and forefinger are up, not down. (Note: If you put your brake hand too close to the device, you risk getting severely pinched during a forceful fall, which in turn, puts you at risk of dropping the rope.)</li>
                <li>Guide hand: Place your opposite hand on the climber’s side of the rope. Grab it slightly above your head at a height that’s comfortable to reach.</li>
            </ul>
            <h3>PBUS (Pull, Brake, Under, Slide) Technique</h3>
            <p>When you’re belaying a top-rope climber, most of your time is spent taking in slack as the person climbs. The PBUS method is a simple, effective way to do this:</p>
            <ul className='ul_li'>
                <li>Pull: Pull your guide hand downward while also lifting the firmly gripped brake rope out and up. This takes in slack as your partner climbs.</li>
                <li>Brake: When the guide hand nears the belay device, flip the brake rope back down to lock the rope in the device.</li>
                <li>Under: Move the guide hand to the brake rope, placing it underneath the brake hand. Grip the rope firmly to create a new temporary brake hand.</li>
                <li>Slide: Loosen the grip, but don’t unwrap the fingers of your original brake hand. Slide it up to its original position, six inches below the belay device, and grip the rope firmly.</li>
                <li>Repeat: Move your guide hand back to its original position and you’re ready to go again. Generally, short quick PBUS sequences work best.</li>
            </ul>
            <p>Watch and listen to your climber closely and continuously. When the climber pauses, you pause. Always pause in the brake position. You must also be prepared to catch a fall, hold tension in the rope and lower your climber.</p>
            <h2>Catching a Fall</h2>
            <img className='img_bv' src={img6}></img>
            <p>Whether it’s because you hear the climber yell “Falling!” and/or you spot the fall because you never take your eyes off your climber, you must react quickly. That’s why your athletic belay stance is so important.</p>
            <ul className='ul_li'>
                <li>Pull your brake hand down as you tighten your grip.</li>
                <li>Use your body, harness, rope and belay device to absorb the force of the fall.</li>
            </ul>
            <p>Your body is acting as a counterweight to the climber’s body. If you’ve been removing slack consistently during the climb, both the distance the climber falls and the resulting force you are catching will be relatively modest.</p>
            <p>Note that climbing ropes are designed to stretch a little, which helps absorb the force of the fall and, in turn, lessens the force on the climber's body during the fall.</p>
            <h3>Holding a Climber Who Pauses</h3>
            <p>Whenever a climber wants to pause for any reason—to rest, consider a move or is at the top of the climb, for example—the command is "Tension!"</p>
            <ul className='ul_li'>
                <li>Remove any slack in the rope</li>
                <li>Pull your brake hand down</li>
                <li>Lean back to maintain rope tension</li>
                <li>Yell “Gotcha!”</li>
            </ul>
            <h3>Lowering a Climber</h3>
            <p>When the climber has completed the route, asked for tension and you’ve got them, the climber will lean back into a sitting position and yell, “Lower me!”</p>
            <ul className='ul_li'>
                <li>Bring your guide hand under your brake hand</li>
                <li>Keep both hands on the rope</li>
                <li>Yell “Lowering!”</li>
                <li>Let the rope slowly feed through the belay device, lowering the climber</li>
                <li>Maintain a steady pace, adjusting speed if the climber requests it</li>
                <li>Pause to let the climber see and negotiate obstacles like a rock outcrop, a roof or an overhang</li>
                <li>Slow down near the ground to allow the climber to touch down with good footing </li>
            </ul>
            <p>When the climber is standing on the ground, safely balanced on two feet, the climber yells “Off belay!” You respond by paying out plenty of slack and yelling “Belay off!”</p>
            <img className='img_bv' src={img7}></img>
            <h5>Remember: Climbing safety is your responsibility. No internet article or video can replace proper instruction and experience—this article is intended solely as supplemental information. Be sure you’re practiced in proper techniques and safety requirements before you climb.</h5>
             {/* related articles */}
             <Related_articles posts={posts}></Related_articles>
        </div>
    )
}
export default Belay ;