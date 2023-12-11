import React from "react";
import '../../../css/dt.css';

import img1 from '../../../../img/knowledge/trainning/Keep_Training/1.webp';
import img2 from '../../../../img/knowledge/trainning/Keep_Training/2.jpg';
import img3 from '../../../../img/knowledge/trainning/Keep_Training/3.jpg';
import img4 from '../../../../img/knowledge/trainning/Keep_Training/4.jpg';

const Keep_Training =()=>{
    return(
        <div className="test">
            <h1>How To Know When To Keep Training And When To Quit</h1>
            <p style={{fontStyle:'italic', textAlign:'center'}}>It's easy to push your training too far, and get injured or see negative progress because you are doing too much. Knowing when to end a training session can be subtle. Here's a climbing coach's tips for guiding you through these murky waters.</p>
            <p>“No pain no gain” is perhaps the oldest training cliché. It may serve well for some sports, but when applied to climbing the outcome is usually disastrous. We tend to associate effort with results, yet too much effort too frequently will simply lead to injury. Climbing and training for climbing places a great deal of strain on small and fragile muscles and tendons, so we need to be strategic in our approach. The message isn’t to avoid pushing to the limit, it’s to know how and when to do this, and when to quit.</p>
            <img className="img_bv" src={img1}></img>
            <p>It takes years of experience to develop a radar for controlling the effort level in your training. The approach will be different for each individual and it will change for the same person throughout the year and over time. Frustratingly, some climbers seem to give the impression that they can beast themselves in every session, tempting others to copy. Yet the truth is that these climbers will pick their moment, or if they don’t then they are likely to add themselves to the injury data.</p>
            <p>So what can we learn from the experiences of others and how can we shortcut the process of developing an off switch in our training? The answer is first to identify the respective feelings that we are aiming to achieve in strength sessions and endurance, and to understand how they differ. The next step is to attempt define some loose-fitting criteria for effort levels; essentially, easy, medium or hard. For some of us, the very act of doing this will be a revealing exercise—teaching us that the effort level shouldn’t always be the same. The final stage is to look at how you should cycle effort levels, whether on a daily, weekly or monthly basis and preferably in accordance with a structured plan.</p>
            <h2>Feel of endurance sessions</h2>
            <p>In endurance sessions the aim is to get pumped in our forearms, out-of-breath and feel generally fatigued to varying degrees.</p>
            <h3>Effort level 1: Light endurance sessions</h3>
            <img className="img_bv" src={img2}></img>
            <p>There are two viable approaches to this type of session. One is only to climb very easy stuff, so that the pump is mild. An example would be aerobic capacity-style sessions, where we move around for long durations on very easy warm-up terrain. The other approach is to climb a bit harder, but to train for short durations. An example would be to do two warm-up climbs and only one hard climb, with plenty of rest in between and without climbing to the point of failure.</p>
            <h3>Effort level 2: Moderate-to-hard endurance sessions</h3>
            <img className="img_bv" src={img3}></img>
            <p>Here the pump level will be much greater, typically around the 75 to 95 percent mark for most of the session, and we may tease to the point where we fail and our fingers uncurl, but only on one or two climbs, typically toward the end of the session. Sessions may be relatively long or if shorter, we may be working to short, tough recovery times. This represents the most commonly used effort-level because it enables us to achieve some relatively hard training without over-taxing our system and placing excessive demands on recovery.</p>
            <h3>Effort level 3: Very hard, limit endurance sessions</h3>
            <img className="img_bv" src={img4}></img>
            <p>In these sessions we may reach the point of failure multiple times and the sessions may also be the longest in duration.</p>
            <h2>Feel of strength sessions</h2>
            <p>In contrast to endurance sessions, the aim of strength sessions is not to get pumped in our forearms or feel generally fatigued. The objective is to maximize the quality of effort by taking long rests and not doing too much volume, so that we are able to pull as hard as possible. However, the effort level should still vary, as follows.</p>
            <h3>Effort level 1: Light strength sessions</h3>
            <p>There are two approaches to this level. One is to consciously avoid pulling hard. The aim here is merely to stimulate the muscles at a low level. For example, when bouldering we would simply do warm-up problems, plus a few mid-level problems that we can comfortably climb. The other is to pull harder and climb something closer to limit level, but only to do a very small amount. For example, after warming up, you would do no more than one hard boulder problem or, say, three or four max-hangs on the hangboard. This will have the effect of recruiting full strength without over-taxing muscles and energy systems, thus meaning that less recovery is required.</p>
            <h3>Effort level 2: Moderate-to-hard strength sessions</h3>
            <p>In these sessions we would seek to pull hard and to the limit, at times reaching the point where we’re failing on moves. However, we wouldn’t do this constantly throughout the session. An example when bouldering would be to try problems close to our flash-limit and then work a few problems that we could do, say in two to four tries.</p>
            <h3>Effort level 3: Very hard, limit strength sessions</h3>
            <p>The majority of these sessions would be spent failing on moves, whether on very hard projects or on flash attempts beyond our limit. These sessions may also be longest in duration.</p>
            <h2>Cycling effort levels</h2>
            <p>So when should we climb light, when should we climb moderate-to-hard and when should we push beyond the limit? Of course, there are so many layers to this question, it depends on individuality and so many factors. However, as a staple, for most climbers we might dare to suggest that level 2 is the way to go! Why? Because level 1 sessions don’t really represent hard training, so if you use level 1 as a staple you simply won’t be forcing improvement. Level 1 sessions may promote recovery, although more research is needed in this field. Conversely, level 3 sessions are so taxing on our systems that they require longer recovery periods and thus, if used too frequently we can tease the line with over-training. As such, most climbers default to training at level 2, as this represents the middle-ground and means that they can train quite hard and quite frequently. Level 2 is also the way to go for climbers who don’t really have the aptitude for planning their training. Put simply, if you can’t really be bothered to plan your training then level 2 sessions represent the safest bet.</p>
            <p>However, the best answer is to cycle the effort level, whether on a daily, weekly or monthly basis.</p>
            <h2>DAILY SEQUENCES</h2>
            <h3>Intermediate climber (majoring on level 2 sessions)</h3>
            <ul className="ul-li">
                <li>Day 1: level 2</li>
                <li>Day 2: level 2</li>
                <li>Day 3: level 1 or rest</li>
                <li>Repeat</li>
            </ul>
            <h3>Elite climber (majoring on level 2 sessions)</h3>
            <ul className="ul-li">
                <li>Day 1: level 2</li>
                <li>Day 2: level 2</li>
                <li>Day 3: level 2</li>
                <li>Day 4: level 1 or rest</li>
                <li>Repeat</li>
            </ul>
            <h3>Intermediate climber (majoring on level 3 sessions)</h3>
            <ul className="ul-li">
                <li>Day 1: level 3</li>
                <li>Day 2: level 1 or rest</li>
                <li>Day 3: level 1 or rest</li>
                <li>Repeat</li>
            </ul>
            <h3>Elite climber (majoring on level 3 sessions)</h3>
            <ul className="ul-li">
                <li>Day 1: level 3</li>
                <li>Day 2: level 1 or rest</li>
                <li>Repeat</li>
            </ul>
            <h2>WEEKLY CYCLE OF EFFORT LEVEL</h2>
            <ul className="ul-li">
                <li>Week 1: level 2 – Preparatory week</li>
                <li>Week 2: level 3 – Load week</li>
                <li>Week 3: level 2 – Peak / maintenance week</li>
                <li>Week 4: level 1 – Recovery week</li>
                <li>Repeat</li>
            </ul>
            <h2>CYCLE EFFORT ON MONTHLY BASIS</h2>
            <ul className="ul-li">
                <li>Month 1: Level 2 – preparatory / base phase</li>
                <li>Month 2: Level 3 – Load phase</li>
                <li>Month 3: Level 2 – Peak / maintenance phase</li>
                <li>Month 3: Level 1 – Recovery phase</li>
                <li>Repeat</li>
            </ul>
        </div>
    )
}
export default Keep_Training;