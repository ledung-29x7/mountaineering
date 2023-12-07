import React from 'react';
import '../../../css/dt.css';
import img1 from '../../../../img/knowledge/techniques/tradclimbing/1.avif';
import img2 from '../../../../img/knowledge/techniques/tradclimbing/2.webp';
import img3 from '../../../../img/knowledge/techniques/tradclimbing/3.avif';

const tradclimbing = () =>{
    return(
        <div className='test'>
            <h1>Trad Climbing Basics</h1>
            <img className='img_bv' src={img1}></img>
            <p>Traditional or "trad" climbing. The term didn't exist until the birth of pre-bolted climbing routes, or sport climbing. As sport climbs became more popular, the term for the older style of climbing became commonplace.</p>
            <p>This article compares the basics of trad versus sport climbing.</p>
            <h1>What Is Traditional Climbing?</h1>
            <p>Trad climbing, as it's popularly known, is how climbing was always done until fairly recently. Up through the "old days" of the 1980s, trad was simply known as climbing. It was only after sport climbing took off that a name had to be created to distinguish this style of climbing.</p>
            <p>How is trad different from sport climbing?</p>
            <ul className='ul_li'>
                <li>In the simplest terms, sport climbing focuses almost entirely on physical challenges, while trad climbing involves a mental game as well.</li>
                <li>Traditional climbing involves carrying and placing protection (chocks, camming devices and so on) rather than clipping into preplaced bolts.</li>
                <li>The traditional climber must practice route-finding, whereas a sport climber follows the bolts up a particular route.</li>
                <li>Traditional climbing requires technical knowledge of climbing anchors and skill in making them. Sport climbing requires little technical knowledge of equipment.</li>
                <li>Sport climbers think nothing of falling repeatedly while trying to figure out a tough move; trad climbers are careful not to fall on the anchors they place.</li>
                <li>Trad climbing is nearly always done outside on real rock where no preset bolts exist. Sport climbing is regularly done in a climbing gym, though it is often done outdoors as well.</li>
            </ul>
            <h1>Protection</h1>
            <p>Protection or "pro" is the mainstay of trad climbing. Pro is divided into 2 types: active (pieces that have moving parts) and passive (those without moving parts).</p>
            <p>Chocks, nuts or tapers are common names for passive pro. Camming devices, or "Friends," are typical names for active pro. Friend is a brand name owned by Wild Country, but because Friends emerged as the original spring-loaded camming devices on the market, the name became synonymous with any camming device.</p>
            <h4>Passive Pro</h4>
            <img className='img_bv' src={img2}></img>
            <p>Chocks come in 2 basic forms: wedges and cams.</p>
            <p>Wedges are tapered chunks of metal, usually on a wire, that are wedged or jammed into or behind a crack in the rock. Cams are more rounded and are twisted or rocked in order to jam into place.</p>
            <h4>Active Pro</h4>
            <img className='img_bv' src={img3}></img>
            <p>Spring-loaded camming devices have 3 or 4 curved cams that pull inward when the device's trigger is pulled, then expand into the crack when the trigger is released. The curves of each cam wedge the device firmly into the pocket or crack and, if placed correctly, will not come out with even a significant shock load.</p>
            <p>Another type of spring-loaded, or active, protection is the Trango Big Bro Tube Chock. One tube fits inside another, contracting to fit into a crack and expanding to fit when a spring is released. Tube chocks fit into large cracks called "off-widths" or in large pockets or holes where other cams are too small. They are commonly used on Utah sandstone climbs.</p>
            <h2>Other Gear</h2>
            <p>The traditional climber must also attach a sling and carabiners to each protection piece to secure the rope. This means that he or she is carrying a whole collection of pro, slings and carabiners, plus more gear for creating a belay anchor at the top of the pitch.</p>
            <p>Trad climbers and their partners need to decide on a method of carrying this collection of climbing gear that works for both of them.</p>
            <h1>Know Your Pro Before You Climb</h1>
            <p>Before you take to the hills with your rack of shiny new hexes, nuts and camming devices, make sure you know how they work. It is absolutely essential that you find an experienced instructor and learn how to make solid anchors and how to place protection. Consider taking a climbing class with REI.</p>
            <p>First, spend some time on the ground. Go to the base of a climbing cliff and figure out how to fit wedges, cams and hexes into different features in the rock.</p>
            <p>Then try some short, easy pitches placing a variety of pieces—not just spring-loaded camming devices, which are easiest to place. Hanging on a rock face with 3 fingers and a couple of toes when you're 60 feet above the deck is not the best time to be wrestling with your rack, trying to figure out how to place pro.</p>
            <h4>Learn more about Trad Climbing Basics</h4>
        </div>
    )
}
export default tradclimbing ;