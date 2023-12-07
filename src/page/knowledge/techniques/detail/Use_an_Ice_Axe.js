import React from 'react';
import '../../../css/dt.css'
import img1 from '../../../../img/knowledge/techniques/Use_an_Ice_Axe/1.avif';
import img2 from '../../../../img/knowledge/techniques/Use_an_Ice_Axe/2.avif';
import img3 from '../../../../img/knowledge/techniques/Use_an_Ice_Axe/3.avif';
import img4 from '../../../../img/knowledge/techniques/Use_an_Ice_Axe/4.avif';
import img5 from '../../../../img/knowledge/techniques/Use_an_Ice_Axe/5.avif';
import img6 from '../../../../img/knowledge/techniques/Use_an_Ice_Axe/6.avif';
import video7 from '../../../../img/knowledge/techniques/Use_an_Ice_Axe/7.mp4';
import video8 from '../../../../img/knowledge/techniques/Use_an_Ice_Axe/8.mp4';
import video9 from '../../../../img/knowledge/techniques/Use_an_Ice_Axe/9.mp4';
import video10 from '../../../../img/knowledge/techniques/Use_an_Ice_Axe/10.mp4';

const UseIceAxe = () =>{
    return(
        <div className='test'>
            <h1>How to Use an Ice Axe for Mountaineering</h1>
            <p>This article is part of our series: Mountaineering Skills</p>
            <img className='img_bv' src={img1}></img>
            <p>The ice axe, for many, is a mountaineering symbol that evokes images of rugged glaciated peaks and above-the-cloud summits. It’s an essential safety tool for mountaineering adventures whether you use it to maintain balance or to self-arrest and stop yourself from a fall.  </p>
            <p>Why use an ice axe? In the previous snow travel article, you learned how proper foot technique provides your first level of security when making alpine ascents. After that important foundation, an ice axe gives you a second layer of protection. The tool has several uses:</p>
            <ul className='ul_li'>
                <li>as a point of balance</li>
                <li>as additional security when you climb (whether you drive the shaft or the pick into the snow)</li>
                <li>most importantly, to stop yourself from sliding down a slope by getting into a self-arrest position</li>
            </ul>
            <h5>In this article, you’ll learn:</h5>
            <ul className='ul_li'>
                <li>When to use an ice axe</li>
                <li>How to hold an ice axe</li>
                <li>How to self-arrest</li>
            </ul>
            <p>For information about choosing the best ice axe for your size and activity, read our article on How to Choose Ice Axes.</p>
            <h5>Climbing safety is your responsibility. No article or video can replace qualified instruction and experience.</h5>
            <h1>When to Use an Ice Axe</h1>
            <img className='img_bv' src={img2}></img>
            <p>When to pull out your ice axe and carry it in your hand is a personal decision based on your assessment of many factors such as snow conditions, slope angle, your ability, what will happen if you fall or your personal risk tolerance.</p>
            <p>Here are some factors that might influence your decision to use an ice axe:</p>
            <ul className='ul_li'>
                <li>The likelihood of falling increases because the slope is steeper, snow conditions have changed or you’re more fatigued.</li>
                <li>The consequences of falling become more severe because there are rocks or a cliff below you or you would fall a long way</li>
            </ul>
            <p>If you decide to use an ice axe, it’s important that you have it out of your backpack and at the ready before you encounter challenging conditions. Don’t wait until you’re standing on an exposed slope to have your axe in hand. If you do slip and fall, you’ll use your ice axe to stop your fall—this is called self-arrest.</p>
            <h2>How to Hold an Ice Axe</h2>
            <img className='img_bv' src={img3}></img>
            <h3>Parts of an Ice Axe</h3>
            <p>Before using your ice axe, you’ll need to know its basic components:</p>
            <p>Pick: This is the sharp, pointed bottom end of the ice axe. It’s used for hooking and swinging into snow or ice, the key maneuver for a self-arrest.</p>
            <p>Adze: This broad, hoe-like feature is predominately used to cut steps or seats in snow or ice.</p>
            <p>Shaft:</p>
            <ul className='ul_li'>
                <li>Straight shafts are ideal for general mountaineering because they let you use the axe as a supportive cane on low-angle terrain and they plunge cleanly into the snow when you need to self-belay or use the axe as an anchor.</li>
                <li>Curved shafts have a slight bend that provides clearance that keeps your hand off the snow when placing the pick into the snow. They’re best for steep terrain. (Ice-climbing axe shafts have a pronounced curvature for a more ergonomic swinging motion).</li>
            </ul>
            <p>Spike: This is the sharp bottom point of the axe that penetrates snow and ice. It is used to provide a secure support when you’re walking or to make it easy to plunge the axe into snow for a belay or rescue.</p>
            <h5>If you decide to use an ice axe, it’s important that you have it out of your backpack and at the ready before you encounter challenging conditions.</h5>
            <h3>Ice Axe Grip</h3>
            <p>When you’re ascending on snow, carry your ice axe in your uphill hand. Use it for support or balance and be prepared to use it to stop yourself if you trip or slide. There are two basic grips:</p>
            <img className='img_bv' src={img4}></img>
            <p>Self-arrest grip: In this position, the pick is pointed backward, the adze forward. Wrap your thumb under the adze and place your other fingers over the pick. </p>
            <ul className='ul_li'>
                <li>Pros: Your hand is already in the self-arrest position if you slip.</li>
                <li>Cons: You can’t use the pick to drive into the snow as you walk in steep terrain, but you can still drive the axe shaft. </li>
            </ul>
            <img className='img_bv' src={img5}></img>
            <p>Self-belay grip: In this position, the pick is pointed forward. Place most of your palm over the adze; your thumb and forefinger should wrap under the pick.</p>
            <ul className='ul_li'>
                <li>Pros: provides added security in steeper terrain because you can thrust the pick into the slope while standing up.</li>
                <li>Cons: Takes practice to maneuver into the self-arrest position because you have to spin the head of the axe around.</li>
            </ul>
            <h3>Using the Axe for Support</h3>
            <p>As you walk up the hill, keep your axe in your uphill hand and use it like a hiking staff for additional support. Plant the spike in for balance as you step uphill.</p>
            <h3>Using a Leash</h3>
            <p>Whether or not to use a leash to keep your axe attached to your wrist is a personal decision. The strap prevents you from losing your axe if you fall, but it can become an additional hazard as you slip. Ask yourself if you’re likely to drop your ice axe. And if you do drop it, what will it mean for you?</p>
            <p>In steeper, higher-consequence terrain, where losing your axe could be dangerous or make it hard for you to travel through the terrain safely, it may make sense to add a leash. If you do use a leash, it should be attached to your wrist; don’t attach it to your harness because it’s too close to your torso and if you fall and lose control, you could be seriously injured.</p>
            <p>If you use a leash, you'll need to stop and move your leash to the other wrist every time you make a turn (because your axe needs to be in your uphill hand). This will take time, slowing you down and potentially exposing you to more risk. If the likelihood and consequences of dropping your axe are low, then it may make sense to travel without a leash.</p>
            <h2>How to Self-Arrest </h2>
            <img className='img_bv' src={img6}></img>
            <p>After proper footwork, knowing how to self-arrest adds another layer of security when you’re mountaineering. You should consider this skill an insurance policy and not something you want to have to use in real time. It’s far better to rely on good, balanced footwork to prevent a fall or slip in the first place.</p>
            <p>Before you climb snow slopes or travel on glaciers, self-arrest is a skill you should practice, practice, practice until it becomes second nature.</p>
            <p>There are different ways to get into the self-arrest position depending on your body orientation when you fall (see below). But the end goal is the same: Stop your fall by planting the pick of your ice axe into the snow and using your body to stop your momentum.</p>
            <p>If you fall, here are the main steps to get into the final self-arrest position:</p>
            <ul className='ul_li'>
                <li>Arrest as quickly as possible. It only gets harder to arrest as you gain speed down the hill.</li>
                <li>Hold the axe so the pick is pointed forward just above the shoulder of your uphill hand. The shaft is diagonal across your body with your hand holding the bottom of the shaft near your hip.</li>
                <li>Drive the pick of the axe into the snow and pull up on the shaft (keep it out of the snow).</li>
                <li>Get your body off the snow. Kick your toes into the slope to stop your fall.</li>
                <li>Look down at your shaft with your face in the snow.</li>
            </ul>
            <h5>Arrest as quickly as possible. It only gets harder to arrest as you gain speed down the hill.</h5>
            <h3>Self-Arrest from Four Different Positions</h3>
            <p>There are different ways to arrest, depending on your body orientation when you fall. The goal is to turn yourself into a human anchor to stop your descent. In all these positions you should end with your feet downhill, facing the slope and with your ice axe underneath you when you stop.</p>
            <video width='100%' controls>
                <source src={video7} type="video/mp4"></source>
            </video>
            <p>If you fall on your stomach (head uphill): This is the easiest position to get into since your body is already in the proper self-arrest orientation. Drive the pick of the ice axe into the snow, bring the shaft close to your torso and get your body off the snow.</p>
            <video width='100%' controls>
                <source src={video8} type="video/mp4"></source>
            </video>
            <p>If you fall on your back (head uphill): Roll your body over in the direction of your uphill hand (the head of the axe). You should be facing the snow. Set the pick and get into the self-arrest position.</p>
            <video width='100%' controls>
                <source src={video9} type="video/mp4"></source>
            </video>
            <p>If you fall on your back (head downhill): As you’re falling, try to plant the pick of the axe at your side. You’ll want to keep your eye on the adze as you twist and move your body around so that your feet end up downhill of you. Get into the self-arrest position.</p>
            <video width='100%' controls>
                <source src={video10} type="video/mp4"></source>
            </video>
            <p>If you fall on your stomach (head downhill): As you are sliding, reach out and plant the pick of your axe into the snow. Then swing your body so your feet end up downhill.</p>
            <h1>How to Practice</h1>
            <p>As with all technical mountaineering skills, it’s best to sign up for a course to learn the proper technique and practice in real conditions on snow or glaciers. REI offers mountaineering courses for beginners. Many guiding companies or local alpine clubs also provide instruction in these skills.</p>
            
        </div>
    )
}
export default UseIceAxe ;