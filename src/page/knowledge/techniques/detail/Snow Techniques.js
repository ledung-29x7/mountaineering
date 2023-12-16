import React from 'react';
import '../../../css/dt.css';
import Related_articles from '../../../../components/Related_articles';
import img1 from '../../../../img/knowledge/techniques/Snow_Techniques/1.avif';
import img2 from '../../../../img/knowledge/techniques/Snow_Techniques/2.avif';
import video3 from '../../../../img/knowledge/techniques/Snow_Techniques/3.mp4';
import video4 from '../../../../img/knowledge/techniques/Snow_Techniques/4.mp4';
import video5 from '../../../../img/knowledge/techniques/Snow_Techniques/5.mp4';
import video6 from '../../../../img/knowledge/techniques/Snow_Techniques/6.mp4';
import img7 from '../../../../img/knowledge/techniques/Snow_Techniques/7.avif';
import video8 from '../../../../img/knowledge/techniques/Snow_Techniques/8.mp4';
import img9 from '../../../../img/knowledge/techniques/Snow_Techniques/9.avif';
import img10 from '../../../../img/knowledge/techniques/Snow_Techniques/10.avif';
const SnowTechniques = () =>{
    const posts =[
        {
            pic:"/techniques/intro/2.jpeg",
            title:"Snow Anchors for Mountaineering",
            intro:"When you’re mountaineering, you’ll build snow anchors for added protection when traveling on a glacier, crossing steep slopes......",
            pages:"/Snow-Anchors-for-Mountaineering"
        },
        {
            pic:"/techniques/intro/4.avif",
            title:"How to Use Crampons",
            intro:"Whether you’re summitting a big mountain or crossing a snowfield while hiking at higher elevations......",
            pages:"/How-to-Use-Crampons"
        },
        {
            pic:"/techniques/intro/5.jpeg",
            title:"How to Use an Ice Axe for Mountaineering",
            intro:"The ice axe, for many, is a mountaineering symbol that evokes images of rugged glaciated peaks and above-the-cloud summits.......",
            pages:"/How-to-Use-an-Ice-Axe-for-Mountaineering"
        },
    ]
    return(
        <div className='test'>
            <h1>Snow Travel Techniques for Mountaineering</h1>
            <p>This article is part of our series: Mountaineering Skills</p>
            <img className='img_bv' src={img1}></img>
            <p>Knowing how to safely and efficiently travel on snow slopes is a fundamental skill you’ll learn in your introduction to mountaineering. Whether you’re planning to cross occasional snowfields or have dreams of standing on top of a glaciated peak like Mount Rainier, proper footwork technique is your first layer of security when you’re climbing mountains.</p>
            <p>In this article, we'll describe several different techniques to climb and descend snow slopes—without the use of crampons. In later articles, we'll outline how to use an ice axe and crampons for additional protection. These basic skills—snow travel, ice axe and crampon—serve as the foundation for more technical skills, including how to travel on glaciers and navigate exposed terrain and hazards such as crevasses as part of a rope team.</p>
            <h5>Climbing safety is your responsibility. No article or video can replace qualified instruction and experience.</h5>
            <h2>Ascending in Snow</h2>
            <img className='img_bv' src={img2}></img>
            <p>Ascending snow without crampons requires step-kicking—where you use your boot to slice into the snow, creating a level platform to remain in balance. Step-kicking can be done three ways. Which method you use depends on the angle of the slope and the conditions of the snow. You’ll adapt your footwork as the terrain, your comfort level and balance change. When you start to get out of balance, consider switching to a different footwork technique.</p>
            <p>Take turns: In firmer, deeper or unconsolidated snow (where your foot can sink in), kicking steps can become more exhausting. In such cases, it’s a good idea to take turns kicking steps, or breaking trail, with others in your group. The person in the lead kicks steps up a slope and the followers walk in those same steps, helping to improve the platform for others who follow. Switch out leaders so everyone shares the load. Also consider the location where you plan to alternate whomever is in front, making sure you’re not in a spot where you’re exposed to overhead dangers or fall hazards.</p>
            <h3>Step-kicking (straight in)</h3>
            <video width='100%' controls>
                <source src={video3} type="video/mp4"></source>
            </video>
            <p>This technique is the foundation of ascending on low-angle, softer snow. You’ll adjust how you kick steps when the slope angle and snow consistency changes.  </p>
            <ul className='ul_li'>
                <li>Use your boot to slice straight into the snow to create a level platform</li>
                <li>Make sure your entire foot is in contact with snow</li>
                <li>Stand tall and center your weight over that foot</li>
                <li>Avoid pointing your toes uphill or going on tippy-toes which could throw you off balance</li>
            </ul>
            <h3>Duck Foot</h3>
            <video width='100%' controls>
                <source src={video4} type="video/mp4"></source>
            </video>
            <p>As the slope angle increases or the snow becomes firmer, you may find it harder to kick straight into the slope, or you’ll notice that you have to kick more often to get your entire boot in contact with the snow. The duck walk can help you stay in balance as you ascend steeper terrain. </p>
            <ul className='ul_li'>
                <li>Stand like a ballerina and splay your feet out into a V-shape as you climb</li>
                <li>Make sure most of your boot soles are in contact with the snow</li>
            </ul>
            <h3>Crossover Step</h3>
            <video width='100%' controls>
                <source src={video5} type="video/mp4"></source>
            </video>
            <p>As the terrain gets steeper or your level of comfort decreases using the duck walk position, transition to the crossover technique to move more securely and stay in balance.</p>
            <ul className='ul_li'>
                <li>Face across the fall line of the slope while still ascending  </li>
                <li>Cross your downhill foot over the other foot and step up at a diagonal</li>
                <li>Bring the other foot around and repeat</li>
            </ul>
            <h3>Rest Step</h3>
            <video width='100%' controls>
                <source src={video6} type="video/mp4"></source>
            </video>
            <p>The rest step is essential for conserving energy when you’re climbing or hiking uphill. This technique gets you into a steady rhythm which will help you climb more efficiently and help prevent your muscles from becoming fatigued. With each step, you momentarily rest between strides as you shift your weight onto the skeleton of your back leg.</p>
            <p>Here’s how to rest step:</p>
            <ul className='ul_li'>
                <li>Step uphill with one foot</li>
                <li>Stand tall while straightening your downhill leg and locking that knee</li>
                <li>Momentarily rest on that rear leg</li>
                <li>Take the next step up</li>
            </ul>
            <p>Tip: Take small steps.</p>
            <h2>Descending in Snow</h2>
            <img className='img_bv' src={img7}></img>
            <p>Many mountaineering accidents occur on the descent when you’re likely to be more exhausted. Learn different ways to get down a snow slope more safely and efficiently.</p>
            <h3>Plunge Stepping</h3>
            <video width='100%' controls>
                <source src={video8} type="video/mp4"></source>
            </video>
            <p>The plunge step is a useful technique to keep you in balance and help you descend quickly. In this technique:</p>
            <ul className='ul_li'>
                <li>Step down and drive your heel straight down into the snow; avoid digging your heel back into the slope</li>
                <li>Bend your knees slightly and maintain a wider stance</li>
                <li>Keep your toes up and out of the snow</li>
                <li>Keep your arms in front of you and avoid leaning backward</li>
            </ul>
            <h3>Glissading</h3>
            <p>Glissading is a fast and exciting way to get down a mountain. There are several rules of glissading, whether you’re standing or sitting:</p>
            <ul className='ul_li'>
                <li>Don’t do it wearing crampons</li>
                <li>Don’t do it on a glacier</li>
                <li>Don’t do it while roped together</li>
            </ul>
            <p>If you’re glissading, you need to know what’s below you and be able to see the runout. If you can’t see what’s below you, then it’s a bad idea to glissade. Always be prepared to self-arrest if you lose control.</p>
            <img className='img_bv' src={img9}></img>
            <h3>Seated glissade</h3>
            <p>Glissading while seated is easy to do. You’re essentially sliding downhill on your butt while using your ice axe to stay in control.</p>
            <p>Tips for a seated glissade:</p>
            <ul className='ul_li'>
                <li>Keep your feet in front of you and knees slightly bent</li>
                <li>Hold your ice axe with both hands (one hand on the adze, the other on the shaft) and dig the spike into the snow at your side as a rudder to slow down or stop</li>
            </ul>
            <img className='img_bv' src={img10}></img>
            <h3>Standing glissade (boot skiing)</h3>
            <p>Boot skiing, also known as a standing glissade, can be a fast, efficient (and drier) way to get down the mountain. You’re basically downhill skiing using the soles of your boots (rather than skis) to glide. This takes more practice than the seated glissade but keeps you drier.</p>
            <p>Tips for a standing glissade:</p>
            <ul className='ul_li'>
                <li>Stand in a skiing position with knees slightly bent and feet close together</li>
                <li>Start sliding downhill keeping your body forward (with your nose over your toes)  </li>
            </ul>

             {/* related articles */}
             <Related_articles posts={posts}></Related_articles>
        </div>
    )
}
export default SnowTechniques ;