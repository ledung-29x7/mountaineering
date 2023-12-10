import React from 'react';
import '../../css/dt.css'
import img1 from '../../../img/gear/outdoorshoes/1.jpg';
import img2 from '../../../img/gear/outdoorshoes/2.jpg';
import img3 from '../../../img/gear/outdoorshoes/3.jpg';
import img4 from '../../../img/gear/outdoorshoes/4.jpg';
import img5 from '../../../img/gear/outdoorshoes/5.jpg';
import img6 from '../../../img/gear/outdoorshoes/6.jpg';
import img7 from '../../../img/gear/outdoorshoes/7.jpg';
import img8 from '../../../img/gear/outdoorshoes/8.jpg';
import img9 from '../../../img/gear/outdoorshoes/9.jpg';
const outdoorshoes = () =>{
    return(
        <div className='test'>
            <h1>What are outdoor shoes?</h1>
            <p>What are outdoor shoes ? There are many types of outdoor shoes depending on usage needs. Choose shoes by adapting to the terrain and natural situations that will be explored. Of course, shoes used for climbing will be different from shoes used every day.</p>
            <p>Choosing a pair of shoes is not only based on preference and style, but the two most important reasons are safety and comfort. Carefully research the design of the shoe before using it, choosing the wrong shoe will be very dangerous for safety.</p>
            <h2>1. Hiking sandals</h2>
            <p>Hiking sandals are a good choice for exploring easy trails. The sandals are light in weight so they don't tire quickly. For some adventurers, sandals are used for short distances or as spare shoes in tent areas.</p>
            <img className='img_bv' src={img1}></img>
            <p>Sandals do not have ankle support to protect feet if they slip or fall. Choose sandals with tightly sewn straps to avoid damage. The strap also affects the foot's endurance.</p>
            <p>Good points: Flexible for casual jobs.</p>
            <p>Disadvantages: Water easily wets feet and is not used for heavy tasks.</p>
            <h2>2. Approach shoes</h2>
            <p>Approach shoes are hybrid shoes with characteristics of kicking duties. These shoes often have special sticky rubber soles to maintain traction on steeper rock grades.</p>
            <img className='img_bv' src={img2}></img>
            <p>Good points: Light, flexible and soft sole.</p>
            <p>Disadvantages: Does not support hiking tasks, cannot tolerate heat and cold.</p>
            <h2>3. Trail running shoes</h2>
            <p>Trail running shoes are not the same as running shoes in general. This shoe is made for traversing mountain roads. It is suitable for climbing mountains that are not too high and has short routes ranging from 1 to 5 miles.</p>
            <img className='img_bv' src={img3}></img>
            <p>The stronger and stiffer sole will protect the foot from weather and poor soil contours. This type of climbing shoe easily causes the foot to reach an incline. In addition to being comfortable for climbing, the simple shape is also very suitable for daily activities.</p>
            <p>Good points: Light, flexible and can be used for running.</p>
            <p>Bad points: Not waterproof and not suitable for heavy loads.</p>
            <h2>4. Hiking shoes</h2>
            <p>Mountaineering shoes are great for climbing with steep and unburdened contours. The frame of this shoe model creates comfort to overcome climbing distances that are not too steep.</p>
            <img className='img_bv' src={img4}></img>
            <p>Generally hiking shoes are made of suede, nylon and leather. The padding at the bottom is not too high, but the shoe frame protects the sole of the foot. Different types of shoes on the market are similar to hiking shoes, but have different functions.</p>
            <p>Good point: Combination of speed and durability.</p>
            <p>The bad: No ankle protection.</p>
            <h2>5. Mid-weight boots</h2>
            <p>The mid-weight boot is an outdoor shoe with a classic look, well-suited for heavy-duty mountain climbing and hiking trails. The design and sole of hard hiking shoes really make the feet feel uncomfortable.</p>
            <p>The shoe insole is quite high, making foot movements less flexible. It's not uncommon for shoes like this to feel uncomfortable on steep inclines, but this style is great for multi-day hikes.</p>
            <img className='img_bv' src={img5}></img>
            <p>The good: Ankle protection, sturdy material, waterproof and heat resistant.</p>
            <p>Bad points: Weight and reduced walking speed.</p>
            <h2>6. Heavy boots</h2>
            <p>Heavy Boots with high footbeds have a better shoe frame. In general, the material of this shoe is made of Gore-tex which is waterproof and has good water vapor circulation to maintain moisture. It is very suitable for climbing on harsh terrain.</p>
            <img className='img_bv' src={img6}></img>
            <p>The good: Ankle protection, waterproof and heat resistant.</p>
            <p>Bad points: Weight and limited walking speed.</p>
            <h2>7. Mountaineering boots</h2>
            <p>Mountaineering boots use materials to protect the feet from the lowest temperatures and are the only option for climbing Everest. Often climbers combine these shoes with strapless shoes for walking on ice. This type of shoe is created for climbing icebergs, but it is not convenient when walking on very long rails.</p>
            <img className='img_bv' src={img7}></img>
            <p>Good points: Warm, sturdy, waterproof, protects your ankles and doesn't slip easily.</p>
            <p>Disadvantages: Heavy and hard.</p>
            <h2>8. Water shoes</h2>
            <p>Specifically designed to provide comfort and protection for your feet when you play in or near water, they provide good traction when moving in and out of rivers and lakes where surfaces are slippery and rocky instability can be a cause of disaster.</p>
            <p>Designed to allow water to escape easily, these footwear are always made from quick-drying materials that won't cause your feet to crack or blister when they get wet.</p>
            <img className='img_bv' src={img8}></img>
            <p>More recently, water shoes have also become popular with fishermen and they are also essential equipment for fishing. They can even come in handy when taking a simple trip to the beach - or anywhere else with water.</p>
            <p>Quiksilver makes a line of comfortable water shoes for use in more casual settings, while Teva makes higher-performance models for more demanding outdoor enthusiasts.</p>
            <h2>9. Ski/snowboard/snow boots</h2>
            <p>That's exactly why you should own some footwear that helps facilitate outdoor fun in winter. With the right gear, you can stay comfortably warm when outdoors in all types of weather conditions and continue to lead an active lifestyle even in the colder months.</p>
            <p>Whether you enjoy skiing or snowboarding, want to snowshoe, or simply want to hit your favorite trail in the snow, there are plenty of options to keep your feet warm and comfortable, right from the start. even when the mercury plunges.</p>
            <img className='img_bv' src={img9}></img>
            <p>A true outdoor enthusiast doesn't let a little thing like a change in weather keep them from going out and they always keep the right shoes in their wardrobe for just such occasions.</p>
            <p>Lange makes some of the best ski boots available on the market, while Burton does the same for snowboarders.</p>
            <p>For basic snowshoes, there are plenty of options available, but The North Face offers some great boots for winter fun, as do Columbia and Scarpa.</p>
        </div>
    )
}
export default outdoorshoes ;