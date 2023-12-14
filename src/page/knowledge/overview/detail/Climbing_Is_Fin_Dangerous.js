import React from 'react'
import '../../../css/dt.css';
import img1 from '../../../../img/knowledge/overview/1.webp'
import img2 from '../../../../img/knowledge/overview/2.webp'
import img3 from '../../../../img/knowledge/overview/3.webp'
import Related_articles from '../../../../components/Related_articles';

const Climbing_Is_Fin_Dangerous = () =>{
    const posts = [
        {
            "pic" : "/overview/intro/1.webp",
            "title" : "History techniques",
            "intro" : "One of today’s predominant forms of mountaineering. The defining feature for classification in thi.......",
            "pages": "/types"
        },
        {
            "pic" : "/overview/intro/2.jpeg",
            "title" : "History techniques",
            "intro" : "The history of various climbing and mountaineering techniques stretches as ......",
            "pages": "/history"
        },
        {
            "pic":"/overview/intro/3.webp",
            "title":"Communication when climbing",
            "intro":"The most common form of communication during mountaineering is simply calling with the voice....",
            "pages": "/communication"
        },
    ]
    return(
            <div className='test'>
            <h1>Climbing Is F’in Dangerous. Here’s How to Stay Safe In the Red Zone.</h1>
            <p style={{fontStyle: 'initial', textAlign: 'center'}}>Understand danger to stay out of out of harm’s way</p>
            <img className='img_bv' src={img1}></img>
            <p>The first dangerous route I ever climbed was a free solo of Edge Lane (5.11X), a beautiful arete at Millstone Edge, a popular U.K. gritstone crag. I’d never climbed without a rope before, so didn’t know how it would feel. </p>
            <p>I remember getting to the final move, which happens to be the crux. My friend Ben and my bouldering pad both looked disappointingly far away, like a Lego man and a postage stamp. Ben had stepped back. Spotting was pointless. It all felt quite unnerving. From my stance I looked up, then down … then up again. I pondered the drop and anticipated the move.</p>
            <p>I stepped up, executed the move, and though I was scared, it felt easy. I topped out. This was the first real risk in climbing that I’d taken. </p>
            <p>If we were to assume no risk at all, we’d never get out of bed. We choose to take risk to get things done. In climbing, especially so. The important thing is weighing the level of risk against the danger involved: a proper analysis takes time and experience. Climbers need to be their own judges to know what is and what isn’t acceptable risk and potential for harm. Some people are willing to take greater risk and will happily forge into the red zone, whereas others are cautious and stay in green. Most people have dabbled inside the orange zones.</p>
            <p>Whether pros or novices, all climbers need to continuously monitor both factors to the best of their ability to stay safe.</p>
            <h3>The terms of the deal</h3>
            <p>Let’s begin by defining some terms.</p>
            <p>A danger is cause of harm. That could either be a situation you are in, the rock, the weather, etc. In climbing, dangers come in all shapes and sizes. It’s possible to have both very dangerous and safe situations, and you can flick between these within a matter of seconds. </p>
            <p>A risk is exposure to the danger. If someone is being exposed, to what level?</p>
            <p>Harm is a physical injury. It is the outcome when both risk and danger are combined, and a mistake is made. </p>
            <h3>Combination of the factors</h3>
            <p>Different combinations of danger and risk affect the severity of harm.</p>
            <p style={{fontStyle: 'initial'}}>1. Low levels of danger + low levels of risk = unlikely chance of low-level harm.</p>
            <p>Example: A competent climber toproping at an indoor wall, with a competent belayer using an auto-locking device.</p>
            <p style={{fontStyle: 'initial'}}>2. Low levels of danger + high levels of risk = likely chance of low-level harm.</p>
            <p>Example: A climber setting off on an offwidth route without the appropriate clothing, skin protection and hand taping.</p>
            <p style={{fontStyle: 'initial'}}>3. High levels of danger + low levels of risk = unlikely chance of high-level harm.</p>
            <p>Example: An experienced climber free soloing a route they have climbed many times before and which is well within their comfort zone.</p>
            <p style={{fontStyle: 'initial'}}>4. High levels of danger + high levels of risk = likely chance of high-level harm.</p>
            <p>Example: An inexperienced climber, setting off on a poorly protected route above their current standard, having never placed any gear.</p>
            <img className='img_bv' src={img2}></img>
            <p>As you can see from the graph, regardless of the route grade, the green area is where you want to be to stay as safe as possible. </p>
            <p>The orange areas are caution zones, and you can generally step into these with comfort as long as you’ve done your homework. The red area is the one to avoid. If you spend too much time in the red, you are going to get hurt. The most successful climbers have mastered performing in the orange boxes.</p>
            <img className='img_bv' src={img3}></img>
            <h3>Scenarios</h3>
            <p>There are many different levels of danger and risk, and therefore many possible harmful outcomes, both serious and non-serious. Thinking through scenarios helps.</p>
            <p>On a busy weekend at my local crag, I often find my attention drawn not to the local rock jock leading their latest headpoint project, but the climber struggling to place gear, out of their depth, looking like they might plummet onto a mid-height ledge, all while their belayer is chatting to their mate and paying no attention to what’s going on.</p>
            <p>The problem? People often assume lower-graded routes are safe, which of course they can be. However, the danger is often overlooked due to the low grade, but the risk in climbing them can be quite high. Inexperienced climbers may not yet understand all the risks involved. The routes may get low grades because the standard of climbing is moderate, but the terrain is often broken, containing ledges to hit.</p>
            <p>A 5.12 climber on a 5.12 route, with a safe but long fall zone and with a chance of falling, could be considered to be in a reasonably harmless position. I.e. high risk (of falling) but low danger (nothing to hit) makes them relatively safe. Compare that to a 5.7 climber, climbing a route of that standard, above ledgy terrain and with the same chance of falling. They would actually be in a more harmful position. I.e. high risk (of falling) with high danger (a ledge to hit). Both climbers are taking the same level of risk, yet ironically the 5.7 route actually holds the greatest danger due to the nature of the terrain, so it is in fact the easier route in this situation that could cause the greatest harm. Not all low-end routes are dangerous, by any means. However, dangers are sometimes “hidden” by the standard of the route.</p>
            <p>A second scenario, for bouldering, might be a poor landing or a difficult move that could cause a fall and injury. The riskier climber would be the untrained one who has no pad or spotter. Their likelihood of harm through taking such risk is much higher; their untrained body might pop on the difficult move, then they fall and have no pad or spotter to catch them (high risk and moderate danger). The less risky climber would have trained their body to execute the move above a heap of pads and a spotter, and also be more aware of their body positions (low risk and moderate danger).</p>
            <p>A final scenario, for alpine climbing, could be the risk of avalanche on the approach to a climb. The riskier climber might not take notice of previous snow conditions or the best time of day to approach the route, and may decide to do so after heavy snowfall (higher danger) and walk to the base of the climb in the midday sun when there is more chance of melt and instability in the snow pack (higher risk). The less risky climber might wait until the recent snowfall is compact (lower danger) and approach in the early morning shade when everything is glued together (low risk).</p>
            <p>In general, the aspects that lower the risk of danger inflicting harm are knowledge, experience, awareness and ability. If you have good knowledge and past experience, are aware of your surroundings and have a high ability, you can take appropriate action toward risk or even lower the risk level, to keep yourself safe.</p>
            <p>For a successful day in the mountains, on the crags or even down at the local bouldering gym, keeping yourself safe is the key. Manage your risk taking wisely.</p>
            <p style={{fontStyle: 'initial'}}>Pete Whittaker is a professional climber, speaker and the director of Wide Boyz.</p>
            {/* related articles */}
            <Related_articles posts={posts}></Related_articles>
            </div>
    )
}
export default Climbing_Is_Fin_Dangerous ;