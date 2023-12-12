import React from "react";
import '../../../css/dt.css';

import img1 from '../../../../img/knowledge/nutrition/TheKetoDiet/1.webp';
import img2 from '../../../../img/knowledge/nutrition/TheKetoDiet/2.jpg';
import img3 from '../../../../img/knowledge/nutrition/TheKetoDiet/3.jpg';
import img4 from '../../../../img/knowledge/nutrition/TheKetoDiet/4.jpg';

const TheKetoDiet =()=>{
    return(
        <div className="test">
            <h1>Why The Keto Diet Will Hurt Your Climbing</h1>
            <p style={{fontStyle:'italic', textAlign:'center'}}>This high-fat low-carbohydrate diet will deplete your energy and can lead to health issues.</p>
            <img className="img_bv" src={img1}></img>
            <p>The keto diet is the perfect way to kill your climbing hopes and dreams. Hop on this diet wagon and your weak fingers will slide off those slopers as if they were coated in the bacon grease that anchors your food plan. Why?</p>
            <p>First, it’s helpful to know what the keto (or ketogenic) diet is. Ketosis refers to the metabolic state your body will enter if you eat an extremely low carbohydrate diet, around 20 to 50 grams of carbs per day. This usually is around 60 to 80 percent fat, and around 10 to 30 percent protein. One medium apple has about 25 grams of carbohydrate—half an entire day’s worth. This is an extremely low carbohydrate intake, especially for an active climber.</p>
            <p>When your diet consists of very little carbohydrate, it looks for other ways to metabolize substrates in order to fuel the demands of life. This is when ketosis occurs. Ketones are basically a substrate your body uses for fuel, instead of the preferred glucose. Ketosis is not a state your body likes to be in—it’s a difficult metabolic adaptation that occurs in absence of sufficient carbohydrate.</p>
            <p>From a climbing standpoint, ketosis is not a good idea. Your brain and skeletal muscles prefer carbohydrate as their fuel source. Limiting it to a measly 20 to 50 grams per day is a recipe for fatigue.</p>
            <p>At lower intensities, your body uses both fats and carbohydrates as fuel sources.  When working above 60 percent of your maximum effort, your body uses carbohydrate. The nature of climbing usually switches back and forth in intensity, such as doing a long trad route with a powerful crux, or a boulder problem with a dyno. These high-intensity efforts need carbohydrate. If your body is getting fat and protein with very few carbs, it is difficult or impossible to be powerful. If you’re a speed climber, forget about it.</p>
            <img className="img_bv" src={img2}></img>
            <p>Training adaptations are also blunted on a low-carb diet. Carbohydrates are the key to powering movements during training and fueling recovery.</p>
            <p>Over decades of research on the keto diet and athletic performance, not one study has shown improved performance. Research reveals:</p>
            <ul className="ul-li">
                <li>Same performance but increased rate of perceived exertion</li>
                <li>Decreased performance</li>
                <li>Reduced power</li>
                <li>Increased time to fatigue</li>
            </ul>
            <img className="img_bv" src={img3}></img>
            <p>There are some other drawbacks to the keto diet, which limits food choices. Grains, beans, lentils, fruits, and many vegetables are omitted. This can lead to:</p>
            <ul className="ul-li">
                <li>Digestive problems</li>
                <li>Poor heart health and increased risk for cardiovascular disease</li>
                <li>Low diet satisfaction and adherence</li>
                <li>Disordered eating</li>
                <li>Limited food choices while on the road, comp fueling, van living, or backcountry adventures</li>
            </ul>
            <p>For weight loss, it is true that the keto diet can be a method of weight loss. But it’s more complicated and nuanced than simply “going keto” and shedding pounds. Initial weight loss occurs, which is simply water weight as your body utilizes its glycogen stores to fuel your daily activities. Since glycogen (the storage form of sugar in your muscles and liver) is stored with water, the water is shed when these stores are used up. Magic! (Not really.) You lose two to five pounds of water weight within a couple of days.</p>
            <p>Beyond the initial water weight loss, true fat loss only occurs in a keto diet if you are in a calorie deficit, just like any other diet. There is nothing specific or advantageous to a keto diet for weight loss.</p>
            <img className="img_bv" src={img4}></img>
            <p>So, wipe off that bacon grease, grab yourself a pasta dinner, and go crush your project.</p>
            <p style={{fontSize: 'italic'}}>Marisa Michael, MSc, RDN, CSSD is a board-certified specialist in sports dietetics and author of <a href="https://www.fixedpin.com/products/nutrition-for-climbers-fuel-for-the-send">Nutrition for Climbers: Fuel for the Send</a>. She serves on the USA Climbing medical committee and has a private practice in Portland, Oregon. Find her online at <a href="https://www.nutritionforclimbers.com/">nutritionforclimbers.com</a> or on Instagram <a href="https://www.instagram.com/realnutritiondietitian/">@realnutritiondietitian</a> for nutrition coaching, workshops, and writing services.</p>
        </div>
    )
}
export default TheKetoDiet;