import React from 'react';
import '../../../css/dt.css';
import img1 from '../../../../img/knowledge/techniques/Avalanche/1.avif';
import Related_articles from '../../../../components/Related_articles';

const Avalanche = () =>{
    const posts =[
        {
            pic:"/techniques/intro/1.avif",
            title:"How to Climb Finger Cracks ?",
            intro:"If you have basic crack climbing technique but are ready to step it up to the next level, it’s time to learn how to climb a finger crack......",
            pages: "/finger-cracks"
        },
        {
            pic:"/techniques/intro/2.jpeg",
            title:"Snow Anchors for Mountaineering",
            intro:"When you’re mountaineering, you’ll build snow anchors for added protection when traveling on a glacier, crossing steep slopes......",
            pages:"/Snow-Anchors-for-Mountaineering"
        },
        {
            pic:"/techniques/intro/3.avif",
            title:"Snow Travel Techniques for Mountaineering",
            intro:"Knowing how to safely and efficiently travel on snow slopes is a fundamental skill......",
            pages:"/Snow-Travel-Techniques-for-Mountaineering"
        }
    ]

    return(
        <div className='test'>
            <h1>Avalanche Rescue Overview</h1>
            <p>This article is part of our series: Avalanche Awareness</p>
            <img className='img_bv' src={img1}></img>
            <p>Anyone who enjoys winter recreation and ventures beyond carefully managed environments (like ski resorts) needs to be both avalanche aware and rescue ready. Because getting caught in an avalanche is rare, you don’t need to be paranoid, but you and your trip mates do need to be prepared because your best—and often only—chance of survival is the rescue skills of backcountry companions.</p>
            <p>This article will give you an overview of avalanche rescue: the basics of what to do when someone gets caught in an avalanche. In order to be prepared, you'll need proper safety gear, real-life training with lots of practice, and the knowledge that it's better to prevent a situation in the first place by avoiding avalanche terrain.</p>
            <p>Be sure you read our Introduction to Avalanche Safety article and sign up for an avalanche course near you.</p>
            <p>When you take an avalanche rescue course, you'll learn how to do the following:</p>
            <ul>
                <li>Search with an avalanche transceiver (beacon)</li>
                <li>Use an avalanche probe to pinpoint the location of the victim</li>
                <li>Shovel efficiently to reach them as quickly as possible</li>
            </ul>
            <p>Giving emergency first aid and transporting the victim are also critical steps, so take a wilderness first-aid course to learn those skills.</p>
            <p>Practice avalanche rescue skills often and take a yearly refresher course.</p>
            <h5>Remember: Safety is your responsibility. No internet article or video can replace proper instruction and experience—this article is intended solely as supplemental information. Be sure you’re practiced in proper techniques and safety requirements before you engage in any outdoors activity.</h5>
            <h1>What to Do When an Avalanche Occurs</h1>
            <p>If one happens, events proceed rapidly. Try to follow these steps if you’re ever caught in an avalanche:</p>
            <ul className='ul_li'>
                <li>Deploy your airbag if you are wearing one.</li>
                <li>If possible, fight to exit to the side of the avalanche or try to self-arrest.</li>
                <li>Fight to get to the surface.</li>
                <li>Create an air pocket by your face (as you come to rest).</li>
                <li>Try to dig out (if you can move your limbs).</li>
                <li>Try to remain calm.</li>
            </ul>
            <h1>How to Search for an Avalanche Victim</h1>
            <p>Statistics tell us that your friend’s best chance of survival is for you to rescue them within just 10 minutes. That’s for searching, probing and digging, which is why an on-the-snow rescue class and yearly followup course are critical. You should have no hesitation as you go through each step.</p>
            <h3>Organize the Search</h3>
            <ul className='ul_li'>
                <li>Stop and assess further risk. Rescuers hit by a slide can’t help anyone.</li>
                <li>Choose a leader. This person keeps the big picture in mind and directs the best use of available resources.</li>
                <li>Count heads. Note the last-seen location of each missing person.</li>
                <li>Call for help. Report what happened, where you are, the number of victims and the number in the overall party.</li>
                <li>Have everyone switch their transceiver to search (receive) mode and turn off all other electronic devices to eliminate signal interference.</li>
            </ul>
            <h3>Perform the Search</h3>
            <ul className='ul_li'>
                <li>Start the search in the area where the victim was last seen. Also look for clues like gloves and equipment.</li>
                <li>Search methodically in swaths no more than 40 meters wide.</li>
                <li>Yell to others when you get a signal or find a clue. Pull the clue fully out of the snow and leave it on the surface, or place a marker where you first got the signal.</li>
                <li>Follow the signal to the burial area. Slow down as you approach 10 meters.</li>
                <li>Keep the transceiver near the snow on the final approach. At 5 meters place another marker on the snow pointing in the direction of your trajectory.</li>
                <li>Locate the closest transceiver signal by bracketing: Slowly approach that point from ahead, behind and each side, maintaining consistent transceiver orientation.</li>
            </ul>
            <h1>How to Pinpoint the Avalanche Victim with a Probe</h1>
            <ul className='ul_li'>
                <li>Begin probing from the closest transceiver signal in a spiral pattern. Make each probe strike about 25 centimeters from the last; the arms of the spiral should be no more than 25 centimeters apart.</li>
                <li>Leave the probe in place when it makes contact with the victim.</li>
            </ul>
            <h1>How to Dig Out an Avalanche Victim</h1>
            <p>Shoveling is the most physically demanding rescue step, requiring you to move a huge amount of snow quickly and efficiently. Learn and practice the technique taught by your rescue class instructor so you’ll be up to the task should the situation arise.</p>
            <ul className='ul_li'>
                <li>Start at a position that’s one long downhill step from the probe. If the burial is deep, start two or three steps downhill.</li>
                <li>Dig toward the bottom of the probe, creating a ramp that angles downward from your position to the victim.</li>
                <li>Toss snow far behind and to the sides.</li>
                <li>Change shovelers often so they can give maximum effort.</li>
                <li>Slow down when you get close to the victim.</li>
                <li>Uncover the face first.</li>
            </ul>
            <h1>First Aid and Transport</h1>
            <p>Locating and digging out your victim before they asphyxiate is your biggest concern as a rescuer. Most avalanche victims also suffer trauma, though. If it isn’t fatal initially, then they’ll likely need medical attention immediately after you uncover them.</p>
            <p>Provide first aid. You might need to perform CPR, treat for hypothermia and deal with a wide range of serious injuries, so take a comprehensive wilderness first-aid course and refresh that training regularly.</p>
            <p>Transport to medical care. Even if a helicopter can come to your aid, you may need to move the patient to a suitable location. At a minimum, carry a rescue sled and know how to assemble it, or learn how to improvise a litter for transport. Practicing assembling your sled or litter each season.</p>
            <h1>Practice Avalanche Skills</h1>
            <p>Because timelines for successful avalanche rescue are so tight, you need to re-hone your skills yearly or every other year by taking a refresher course. Many ski areas also have an area set up for people to practice their transceiver search skills. And shoveling technique is something you can practice any time you’re in snow country.</p>
            <p>Note: The material in this article is based on curriculum created by the American Institute of Avalanche Research and Education (AIARE). Its one-day Avalanche Rescue Course is taught at locations nationwide. Steps from that course are distilled in a pocket-size AIARE Quick Reference Rescue Card that you should carry and be able to quickly access in the event that you have to perform a rescue in the field. Having the card helps focus the rescuers by ensuring you don’t miss any steps or waste time trying to remember them. You can print your own card using the provided link, or get a laminated version that’s available from course providers and at avalanche awareness events around the country.</p>
            {/* related articles */}
            <Related_articles posts={posts}></Related_articles>
        </div>
    )
}
export default Avalanche ;