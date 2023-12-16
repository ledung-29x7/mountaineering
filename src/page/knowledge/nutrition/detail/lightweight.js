import React from "react";
import '../../../css/dt.css';

import img1 from '../../../../img/knowledge/nutrition/lightweight/1.webp';
import img2 from '../../../../img/knowledge/nutrition/lightweight/2.jpg';
import img3 from '../../../../img/knowledge/nutrition/lightweight/3.jpg';
import img4 from '../../../../img/knowledge/nutrition/lightweight/4.jpg';
import img5 from '../../../../img/knowledge/nutrition/lightweight/5.webp';

const Lightweight =()=>{
    return(
        <div className="test">
            <h1>Field Tested: Good To-Go Meals, a lightweight climbing food</h1>
            <p style={{fontStyle:'italic', textAlign:'center'}}>These meals are a worthy option for overnight climbers and campers who want to eat real, delicious food with a finite lifespan.</p>
            <img className="img_bv" src={img1}></img>
            <h2>Basics</h2>
            <p>Good To-Go’s dehydrated meals are flavorful, lightweight, and nourishing, with easy-to-pronounce ingredients. All of their meals are gluten-free and are primarily vegan and vegetarian. The meals have a maximum five-year lifespan, are packaged in a durable plastic bag, and require boiling water to prepare.</p>
            <div style={{display:'flex'}}> 
                <div style={{marginRight:'5px'}}>
                    <h2>Pros</h2>
                    <p>No preservatives // Real, recognizable ingredients // Durable packaging // Dehydrating food is less energy intensive than freeze-drying // Delicious</p>
                </div>
                <div style={{marginLeft:'5px'}}>
                    <h2>Cons</h2>
                    <p>Packaging is not recyclable // Relatively short shelf life—5 years compared to ~25 for freeze-dried foods // Slower to rehydrate and slightly heavier than freeze-dried foods</p>
                </div>
            </div>
            <h2>Our Thoughts</h2>
            <p>Good To-Go is a worthy option for overnight climbers and campers who want to eat real food with a finite lifespan. The company’s celebrated chefs are on display at each meal, with offerings ranging from spicy Korean bibimbap to hearty Mexican quinoa bowls, providing 13 different entrées that accommodate a range of ethnicities, taste preferences, and dietary restrictions.</p>
            <img className="img_bv" src={img2}></img>
            <p>When I first began reading up on “backpacking meals,” as a minimum-wage-earning high-school graduate, my overnight alpine food was little different from what I ate at home: pre-seasoned rice, macaroni and cheese, and baked beans. The cheap food fit my cheap lifestyle, my impatience for cooking, and, most importantly, my utter indifference to nutrition. This “diet”—if such a term can be used here—served me well for the first several years of my alpine-climbing life: I’d slam as much processed food as my budget would allow, climb a long 5.7-or-so ridge, and drink Alberta Premium back at the car. </p>
            <p>As time went on, however, I began to want more output from my body. And my body, in turn, wanted more from me. It wanted vegetables. And protein. And a lighter backpack that didn’t hold a glass jar of tomato sauce and tin cans of baked beans. (There was a summer when I subsisted almost entirely on expired military rations, lightening my pack and saving money, but my digestive system is still recovering from that one.)</p>
            <p>These days, having learned the importance of nutrition and recovery, I’ve been reaching for Good To-Go’s meals for overnight trips where I need lightweight, nutritious food that I look forward to eating. Sorry, Spam, we were bound to grow apart.</p>
            <img className="img_bv" src={img5}></img>
            <p>Good To-Go is headed up by Jennifer Scism, a professional chef of 20-plus years, graduate of Manhattan’s French Culinary Institute, and, in 2005, winner of the TV Food Network’s Iron Chef program. Scism and I exist at opposite ends of the culinary spectrum (or did at one time) but I can wholly appreciate the effort her team puts into these dehydrated meals. Each of the five meals I ate—bibimbap, mushroom risotto, quinoa bowl, oatmeal, and granola—were thoughtfully flavored, nutrient dense, and preservative free. (The most difficult-to-pronounce ingredient was quinoa!) </p>
            <p>Good To-Go’s meals are handmade in small batches in Kittery, Maine, where they’ve opted to dehydrate their meals instead of freeze drying them like most big-name brands (Backpacker’s Pantry, Alpine Aire, Mountain House, etc.). The main benefit of this: dehydrating food requires less energy than freeze drying it, making for a lower carbon impact. The main counterpoint to this debate is that dehydrating food sucks out its nutrients—and it’s a worthy concern, too. However, Good To-Go brings all of their meals to 165 ° F for several carefully measured seconds, to ensure shelf stability, without reducing nutritional value.</p>
            <h2>Taste</h2>
            <img className="img_bv" src={img3}></img>
            <p>Before Good To-Go, I’ve never once bought freeze-dried or dehydrated food for the flavor. I’ve lived the good life, remember? Expired ravioli in an “impact-proof” military baggie, electrolyte drinks lovingly named “orange beverage,” the rare on-brand Pop-Tart.… But now? I am actually excited to tuck in for dinner. The mushroom risotto, well-balanced with basil, walnuts, and white wine, was a satisfying finish to a full day of steep quartzite sport climbing. The next day began with a hearty oatmeal (standout flavors included Zante currants, pumpkin seeds, banana flakes, and cinnamon) and ended with the bibimbap: a spicy yet sweet mixed rice dish with sesame, Gochugaru (a Korean red chile pepper), shiitake mushrooms, and brown sugar. Indeed, I went to sleep that night a happy camper.</p>
            <h2>Final thoughts</h2>
            <img className="img_bv" src={img4}></img>
            <p>When shopping for your next lightweight backcountry meal, there are a few drawbacks to dehydrated foods to keep in mind—namely, they are slightly slower to rehydrate than freeze-dried meals. (The average entrée took about 20 minutes to fully cook, compared to the 10–15 minutes of several freeze-dried brands.) While cooking Good To-Go, I found that the water had to be boiling before dumping it into the pouch—not a moment sooner—for that cooking time to ring true.</p>
            Dehydrated foods also have a shorter shelf life than freeze-dried options—some freeze-dried brands boast a 25-year lifespan!—while Good To-Go maxes out at five. This may not be important for most climbers (just go shopping every five years?) and Good To-Go believes this to be a plus. As their website says, “We do not use preservatives in our meals. We believe firmly that real food cannot and should not endure ‘til the end of time!” I tend to agree.
        </div>
    )
}
export default Lightweight;