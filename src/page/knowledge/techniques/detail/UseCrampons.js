import React from 'react';
import '../../../css/dt.css';
import Related_articles from '../../../../components/Related_articles';
import img1 from '../../../../img/knowledge/techniques/UseCrampons/1.avif';
import img2 from '../../../../img/knowledge/techniques/UseCrampons/2.avif';
import video3 from '../../../../img/knowledge/techniques/UseCrampons/3.mp4';
import video4 from '../../../../img/knowledge/techniques/UseCrampons/4.mp4';
import video5 from '../../../../img/knowledge/techniques/UseCrampons/5.mp4';
import img6 from '../../../../img/knowledge/techniques/UseCrampons/6.avif';
import img7 from '../../../../img/knowledge/techniques/UseCrampons/7.avif';
import img8 from '../../../../img/knowledge/techniques/UseCrampons/8.avif';

const UseCrampons = () =>{
    const posts =[
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
            <h1>How to Use Crampons</h1>
            <p>This article is part of our series: Mountaineering Skills</p>
            <img className='img_bv' src={img1}></img>
            <p>Whether you’re summitting a big mountain or crossing a snowfield while hiking at higher elevations, knowing how to use crampons allows you to more confidently travel across hardpacked snow or steep, icy terrain. In mountaineering, crampons are a key traction device that provide added security to prevent falls and other accidents. Along with knowing proper footwork techniques and ice axe skills, knowing how to use crampons is a skill you’ll need to safely travel on snow and glaciers when mountaineering.</p>
            <p>In this article, you’ll learn:</p>
            <ul className='ul_li'>
                <li>Tips for putting on crampons</li>
                <li>When to use crampons</li>
                <li>Three techniques for using crampons</li>
                <li>Tips for descending in crampons</li>
            </ul>
            <p>Before you head out to the hills, make sure your crampons properly fit your mountaineering boots. There should be solid contact between the bottom of your boots and the frame of the crampons. You can read more about the different materials and bindings and how to match the right crampon to your activity in our article on How to Choose Crampons.</p>
            <h5>Climbing safety is your responsibility. No article or video can replace qualified instruction and experience.</h5>
            <h2>Tips for Putting on Crampons</h2>
            <img className='img_bv' src={img2}></img>
            <p>Practice putting on your crampons at home and while wearing gloves. When you put them on, minimize the number of items that can get snagged by the sharp points.<br></br>
            Here are some tips:</p>
            <ul className='ul_li'>
                <li>Avoid loose fabric or things hanging around your ankles or near your feet.</li>
                <li>Make sure all crampon straps and your shoelaces are tucked in and tidy.</li>
                <li>If you’re wearing gaiters, the buckles should be on the outsides of your legs to avoid snagging.   </li>
                <li>Tighten the straps so there’s solid contact between the bottoms of your boots and the crampon frames.   </li>
                <li>Make sure they’re secure; continually check them when you take breaks.</li>
            </ul>
            <h2>When to Use Crampons</h2>
            <p>When your footwork no longer feels secure with just your boots and ice axe, or when you find yourself working too hard to kick steps in the snow, it’s time to think about putting crampons on your feet. Here are some scenarios where you would need crampons:</p>
            <ul className='ul_li'>
                <li>When the snow becomes much firmer</li>
                <li>The slope angle increases</li>
                <li>You want to travel more efficiently without having to kick as many steps</li>
                <li>If you’re traveling on a glacier</li>
            </ul>
            <p>But don’t wait too long to put them on. You should be scanning the terrain to see what’s up ahead and put crampons on before you start slipping. Find a safe, flat spot along your route to do it and make sure there are no overhead or fall hazards.</p>
            <h2>Three Techniques for Using Crampons</h2>
            <p>There are three techniques for walking in crampons, though most beginners will likely stick with just the first two:</p>
            <ul className='ul_li'>
                <li>Flat foot, also called French technique</li>
                <li>Frontpointing, also called German technique</li>
                <li>Hybrid, also called American technique</li>
            </ul>
            <p>Whichever technique you use, you’ll want to maintain a slightly wider stance than normal, keeping your feet a couple more inches apart. Maintain an athletic stance (especially when descending), keeping your knees loose and bent.</p>
            <h3>Flat Foot (French Technique)</h3>
            <video width='100%' controls>
                <source src={video3} type="video/mp4"></source>
            </video>
            <p>When the slope steepens, your goal is to get as many sharp crampon tines in contact with the snow as possible. Each foot lands flat on the snow. With each step, set your crampons deliberately into the snow and articulate your foot at the ankle so all of the tines engage in the snow or ice. If you only have your uphill tines in contact with snow, you’re essentially balancing on an edge and could slip. The angle of your sole should match the angle of the slope. Keep your feet flat whether you’re duck walking or using a crossover step to ascend.</p>
            <h3>Frontpointing (German Technique)</h3>
            <video width='100%' controls>
                <source src={video4} type="video/mp4"></source>
            </video>
            <p>Frontpointing is a more advanced technique commonly used when ice climbing or on slopes that are steeper than 45 degrees. In this method, you kick so that the two front points (and most of your toe plate) are engaged in the slope.</p>
            <h3>Hybrid (American Technique)</h3>
            <video width='100%' controls>
                <source src={video5} type="video/mp4"></source>
            </video>
            <p>As you enter steeper terrain, flatfooting may not be as secure or easy, while frontpointing can tire you out quickly. You may want to employ a hybrid technique, which is a combination of the two.</p>
            <ul className='ul_li'>
                <li>With one foot, kick straight into the slope, engaging the front four tines.</li>
                <li>Meanwhile, splay the other foot (in a duck walk), making sure to keep that foot flat and all tines engaged in the snow.</li>
                <li>Using this technique, you can only rest-step every other step. You’ll want to rest and pause when you have most of your weight on the foot that is turned out.</li>
            </ul>
            <h3>Managing Snow on Your Crampons</h3>
            <img className='img_bv' src={img6}></img>
            <p>All crampons now come with anti-balling plates to prevent lumps or balls of snow from sticking to the bottoms of the crampons. Still, snow may ball up under foot and you’ll notice that the points aren’t biting into the snow.</p>
            <p>There are two ways to clear crampons:</p>
            <ul className='ul_li'>
                <li>Scuff your feet on the surface of the snow and the friction will clear it out of there.</li>
                <li>Take the shaft of your ice axe and bang it hard against your feet.</li>
            </ul>
            <h2>Tips for Descending in Crampons</h2>
            <img className='img_bv' src={img7}></img>
            <p>Mountaineering accidents often happen on the descent. This may be because climbers are tired, gravity is pulling you down or the snow has warmed up, making it more likely that snow will collect at the bottoms of your crampons.</p>
            <p>Here are some tips for how to descend in crampons:</p>
            <ul className='ul_li'>
                <li>Maintain an athletic stance with knees wider than shoulder width, knees loose and bent</li>
                <li>Always point your toes in the direction that you’re moving. If you’re walking downhill on switchbacks, crampons should be pointed across the slope if you’re moving across the slope.</li>
            </ul>
            <h2>When to Take off Crampons</h2>
            <img className='img_bv' src={img8}></img>
            <p>Once you’ve reached an area that is flatter or the snow softens up enough that you don’t need crampons, find a flat safe spot to take them off. Don’t take them off until you’re in terrain where the consequences of falling are low or where it would be more dangerous to wear them, such as sloppy wet snow or snow that’s shin-deep.</p>
            {/* related articles */}
            <Related_articles posts={posts}></Related_articles>
        </div>
    )
}
export default UseCrampons ;