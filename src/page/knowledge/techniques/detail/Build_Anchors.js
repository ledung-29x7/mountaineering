import React from 'react';
import '../../../css/dt.css';
import Related_articles from '../../../../components/Related_articles';
import img1 from '../../../../img/knowledge/techniques/build_anchors/1.avif';
import img2 from '../../../../img/knowledge/techniques/build_anchors/2.avif';
import img3 from '../../../../img/knowledge/techniques/build_anchors/3.avif';
import img4 from '../../../../img/knowledge/techniques/build_anchors/4.avif';
import img5 from '../../../../img/knowledge/techniques/build_anchors/5.avif';
import img6 from '../../../../img/knowledge/techniques/build_anchors/6.avif';
import img7 from '../../../../img/knowledge/techniques/build_anchors/7.avif';
import img8 from '../../../../img/knowledge/techniques/build_anchors/8.avif';
import img9 from '../../../../img/knowledge/techniques/build_anchors/9.avif';

const BuildAnchors = () =>{
    const posts =[
        {
            pic:"/techniques/intro/9.avif",
            title:"Crevasse Rescue Skills",
            intro:"Rescue skills are critical in mountaineering. As you’re traveling on glaciated terrain,.......",
            pages:"/Crevasse-Rescue-Skills"
        },
        {
            pic:"/techniques/intro/10.avif",
            title:"Getting Started Crack Climbing" ,
            intro:"A crack that runs up a cliff face presents an obvious line to follow while climbing........",
            pages:"/Getting-Started-Crack-Climbing"
        },
        {
            pic:"/techniques/intro/11.jpeg",
            title:"How to Build Anchors for Climbing" ,
            intro:"A climbing anchor is a system made up of individual anchor points that are linked together to create a master point .......",
            pages:"/How-to-Build-Anchors-for-Climbing"
        },
    ]
    return(
        <div className='test'>
            <h1>How to Build Anchors for Climbing</h1>
            <p>This article is part of our series: Intro to Trad Lead Climbing</p>
            <img className='img_bv' src={img1}></img>
            <p>A climbing anchor is a system made up of individual anchor points that are linked together to create a master point that the rope and/or climbers clip into to be securely attached to the rock. Whether you’re top-rope climbing or lead climbing, knowing how to build a solid anchor is absolutely critical to staying secure.</p>
            <p>There are many important considerations when building an anchor, but the process can be distilled to two basic steps:</p>
            <ul className='ul_li'>
                <li>Step one: Identify/create the anchor points to be used as part of the greater system.</li>
                <li>Step two: Connect the anchor points together using one of several techniques.</li>
                <p>There are many variables in anchor building, making it impossible to show how to construct an anchor for every scenario. The goal of this article is to give you an understanding of the principles of anchor building while showing a few common ways to build an anchor.</p>
            </ul>
            <h2>Step One: Identify Anchor Points</h2>
            <img className='img_bv' src={img2}></img>
            <p>Before you build an anchor, you first need to identify what you’re going to use as anchor points. What you choose to use largely depends on where you are and what gear you have available. </p>
            <p>Natural anchors, such as trees and blocks of rock, can make good anchors and help you conserve other gear. However, you need to assess the integrity of these features before incorporating them in an anchor system.</p>
            <ul className='ul_li'>
                <li>Trees: Before you use a tree, check to make sure it is alive, well-rooted and solid. Be suspicious of trees growing out of cliffs and always test a tree by pushing against it with a foot. A good rule of thumb is to only use a healthy tree that is at least 12 inches in diameter. To use a tree as an anchor point, you can circle a runner around the base of the tree and clip the ends together with a carabiner, or girth-hitch a long runner around it.</li>
                <li>Rock features such as horns and chockstones (a stone that’s tightly wedged in a crack) are frequently used as part of an anchor. When assessing the integrity of these, check to make sure they are solid and well attached. Look for brittle rock and cracks that indicate a weakness. With horns, you can loop a runner over the top and clip it to the rope. To attach the rope to a chockstone, circle a runner around the feature and either clip the ends together with a carabiner or girth-hitch the runner.</li>
            </ul>
            <p>Fixed anchors are any type of artificial gear that once placed is left permanently “fixed” to the rock. To attach the rope, you clip quickdraws or runners to the gear. Two common examples of fixed anchors are bolts and pitons. </p>
            <p>Just as with natural anchors, fixed anchors need to be assessed for signs of weakness. If you see cracks or excessive corrosion or wear, the fixed gear may not be trustworthy. If the bolt or piton moves in any direction, don’t use it. Be wary of out-of-date gear, especially ¼-inch bolts and sheet-metal-style hangers. The current standard bolt size is 3/8 to ½ inch in diameter. </p>
            <p>Removable anchors, such as cams and stoppers, are used where natural and fixed protection are not available. </p>
            <h2>Step Two: Connect the Anchor Points</h2>
            <p>To build an anchor, you connect the individual anchor points to create a master point that you clip into. A standard anchor will have two or three anchor points that hold a downward pull and one that will hold an upward pull.</p>
            <p>To build an anchor, you need to connect these anchor points and equalize them so that the load is distributed equally among them.</p>
            <p>You typically equalize an anchor by using runners or a long section of accessory cord called a cordelette. There are two primary methods for equalizing the anchor: static equalization and self-equalization. </p>
            <h3>Static Equalization</h3>
            <img className='img_bv' src={img3}></img>
            <p>Static equalization refers to an anchor system that incorporates multiple anchor points that are tied off together. Once the system is tied off, it has no slack or adjustability in it. Anchors with static equalization are great for climbs that have a clear direction of pull, such as straight down. If you anticipate the direction of pull changing, it's best to build a self-equalizing anchor (see below).</p>
            <p>Cordelette Anchor: Using a cordelette is a very popular way to connect two, three or more anchor points to create static equalization.</p>
            <p>To make a cordelette, take an 18–20 ft. long section of seven- to eight-millimeter Perlon accessory cord and use a double fisherman’s knot to tie the cord into one big loop.</p>
            <h4>To equalize three anchor points with a cordelette:</h4>
            <ul className='ul_li'>
                <li>Clip the cordelette into each of the pieces with carabiners and pull down the top sections between the pieces.</li>
                <li>Join the sections with the bottom part of the cordelette by bringing them together and clipping a locking carabiner to all three loops.</li>
                <li>Pull down on the carabiner to even out the tension in all the strands of the cordelette.</li>
                <li>Position the fisherman’s knot so it is below the highest anchor point to keep it clear of the master point knot that you will tie.</li>
                <li>Figure out as best you can where the force on the anchor will come from and pull the carabiner in that direction.</li>
                <li>Tie all three sections together with a figure eight knot to create the master point. If you don’t have enough cord to tie a figure eight, tie an overhand. Both knots are effective, but the overhand is more difficult to untie after it has been weighted.</li>
                <li>Give the carabiner a tug to make sure all three anchor points are equally weighted.</li>
            </ul>
            <img className='img_bv' src={img4}></img>
            <p>The loop created by tying the figure eight is called the master point and it should be about three to four inches in diameter. This is the main attachment point to the anchor and is where you and your climbing partner will clip in.</p>
            <p>The drawback to a cordelette is that if the direction of pull changes slightly, then one piece in the anchor system can end up taking the entire load.</p>
            <h3>Self-Equalization</h3>
            <p>Self-equalization is a way of constructing an anchor so that it adjusts to changes in the direction of pull in order to distribute the load equally to the anchor points. If you know that the direction of pull will change throughout the climb, strive to create a self-equalizing anchor.</p>
            <p>The quad anchor is a great option at the top of a sport climb where you have two side-by-side bolts. To make a quad anchor:</p>
            <ul className='ul_li'>
                <li>Take your cordellete and double it up so you have four equal-length strands.</li>
                <li>Clip a locking carabiner into both strands of the loop end nearest to the double fisherman’s bend.</li>
                <li>Clip that same carabiner into one of the bolts.</li>
                <li>Hold the opposite end of your cordelette loop up to the other bolt.</li>
                <li>Grasp the low point in the your cordelette loop with your fist.</li>
                <li>Tie an overhand knot on either side of your fist (about 8” apart)</li>
                <li>Clip a locking carabiner into both strands of the free end of your cordelette loop.</li>
                <li>Clip that same carabiner into the remaining bolt.</li>
                <li>Create the power point of your anchor (where the top rope will clip in) by clipping two opposed locking carabiners into three of the strands that run between the knots you tied earlier—leave the fourth strand free. This setup limits (catches) the carabiners in the event that one side of the anchor fails.</li>
            </ul>
            <img className='img_bv' src={img5}></img>
            <p>The sliding X is a relatively simple way to connect two anchor points, while creating a system that adjusts to the direction of pull.</p>
            <p>To create a sliding X:</p>
            <ul className='ul_li'>
                <li>Clip a single sling to the carabiners at each anchor point.</li>
                <li>Grab the top section of the sling, make a half twist and clip a locking carabiner into the twist and around the lower section of the sling.</li>
            </ul>
            <p>A drawback to the sliding X is that if one anchor point fails, there will be significant extension that will shock load the other anchor point. To limit the extension, tie overhand knots just above the clip-in point. The knots allow the system to adjust, but limit the extension if an anchor point fails.</p>
            <img className='img_bv' src={img6}></img>
            <p>An equalette is another way to construct a self-equalizing anchor by combining elements from the cordelette and the sliding X. It provides effective self-equalization and easy adjustability. An equalette is most commonly used on multipitch trad climbs.</p>
            <p>To make an equalette:</p>
            <ul className='ul_li'>
                <li>Take 20 ft. of seven-millimeter or eight-millimeter nylon cord tied into a loop with a double fisherman’s knot.</li>
                <li>Form the cordelette into a U shape.</li>
                <li>Position the fisherman’s knot so that it is about 18 inches away from the bottom of the U.</li>
                <li>Starting at the bottom of the U, tie two overhand limiter knots about 10 inches apart to create the master point of the equalette.</li>
            </ul>
            <p>To build an anchor with an equalette, position the isolated center section toward the anticipated direction of pull. Place the right-hand limiter knot about two to six inches below the lowest anchor point. Attach the right arms of the equalette to the right-side anchor points using clove hitches or overhand knots on a bight. Now position the left-hand limiter knot even with the right-hand knot and attach the left arms of the equalette to the left-side anchor points. Adjust the strands going to the anchor points so that they are evenly tensioned.</p>
            <p>Using clove hitches to attach the equalette to the anchor points allows you to quickly and easily adjust the slack in the system to achieve even tension on each strand.</p>
            <p>Attach yourself to the anchor with two locking carabiners, each one clipped to the separate strands of the power point located between the limiter knots.</p>
            <img className='img_bv' src={img7}></img>
            <h1>Anchor Considerations </h1>
            <img className='img_bv' src={img8}></img>
            <h2>SERENE-A Anchor Systems</h2>
            <p>Every anchor you build will likely be a bit different. However, there are principles that apply to every single one.</p>
            <p>To make the principles simple to remember, climbers have come up with various mnemonic devices, such as ERNEST and SERENE. No matter which one you use, they all serve as a reminder for what to think about and look for when building an anchor. REI Outdoor School instructors use SERENE-A: </p>
            <ul className='ul_li'>
                <li>Solid: Each component of the anchor must be completely solid.</li>
                <li>Equalized: Rig the anchor so that the load is distributed as equally as possible between the individual anchor points.</li>
                <li>Redundant: You must always use redundant components when building an anchor so that if one component fails, the anchor will not automatically fail. At a minimum, use two solid anchor points. Three or more are recommended. Ensure that all parts of your anchor have built-in redundancy, including carabiners and slings.</li>
                <li>Efficient: Make efficient use of time and gear when you’re building an anchor, and don’t create something that is overly complicated.</li>
                <li>No Extension: Construct your anchors so that if one anchor point fails it won’t cause the anchor to suddenly extend, which would shock load the remaining anchor points and generate high impact forces.</li>
                <li>Angles: Consider the angles created by the sling or slings in your anchor system. Larger angles put more force on each anchor point, so keep the angles to 60 degrees or less.</li>
            </ul>
            <p>Every anchor you build should meet the criteria of SERENE-A. However, just because an anchor meets the SERENE-A, does not make it perfect. Use this mnemonic device as a reminder of what to check for, not as a guarantee that your anchor will never fail.</p>
            <h1>Multidirectional Anchors</h1>
            <p>Top-rope anchors are typical built only to withstand a downward pull. If you’re climbing multiple pitches, it’s essential to construct a multidirectional anchor that can handle a pull from any direction.</p>
            <p>To understand this, think about what will happen to the belayer if a lead climber takes a fall. The force of the falling climber will pull the belayer in the direction that the leader was climbing and as a result it will deliver a tug in that direction to the anchor. This cannot only slam the belayer into the rock, possibly injuring him or her, but it can also cause the anchor to fail if it was built only to handle a pull from one direction.</p>
            <img className='img_bv' src={img9}></img>
            <p>Since many climbs go generally up, it’s common to build an anchor to withstand a downward and upward pull. Doing so can be as simple as placing a cam or nut that’s aimed upward and equalized with the other placements using a cordelette. It’s best to place this piece low in the anchor construction so that it will stop the upward pull before it tugs on the other pieces in the anchor.</p>
            <p>It’s possible to have an anchor point that can hold both an upward pull and a downward pull. Bolts, solid trees and horizontally-placed cams are all examples of anchor points that when used correctly can hold pulls from both directions.</p>
            <p>The horizontal spacing between anchor points and the length of slings that you use to connect the points are critical in creating a reliable anchor. This is because the amount of force applied to each anchor point depends on the angle formed by the slings coming together. The smaller the angle, the less force each anchor point will receive, and conversely, the larger the angle, the more force each point will receive.</p>
            <p>For example, in a two-piece anchor with an angle of 60 degrees, each anchor point receives 58% of the force. Increase the angle to 90 degrees and the force on each ramps up to 71%. An anchor with a 120-degree angle, distributes 100% of the force to each anchor point.</p>
            <p>In order to keep the force on each anchor point from reaching dangerous levels, the angles formed by the sling or slings in your anchor system should never be greater than 60 degrees. This doesn’t mean that you can’t use anchor points that are spread far apart from one another. To create an angle that’s less than 60 degrees you can extend the anchor points with long slings or a cordelette.</p>
            <h3>High Master Point </h3>
            <p>When you can, construct the anchor so the master point is located between your chest and just above your head. This generally allows for efficient belaying from a comfortable stance.</p>
            <p>If you.re building an anchor using a cordelette, you can raise the master point by tying a figure nine knot rather than a figure eight. The figure nine uses more of the cordelette, thereby raising the master point. To tie a figure nine, start like you’re tying a figure eight, but wrap the cord around one additional time before completing the eight.</p>
            <h5>Always remember: </h5><p>Your safety is your responsibility. No article or video can replace proper instruction and experience. Make sure you’re practiced in proper techniques and safety requirements before you climb.</p>
             {/* related articles */}
             <Related_articles posts={posts}></Related_articles>
        </div>
    )
}
export default BuildAnchors ;