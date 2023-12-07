import React from "react";
import '../../../css/dt.css';

import img1 from '../../../../img/knowledge/nutrition/Vitamins_Harmful/1.webp';
import img2 from '../../../../img/knowledge/nutrition/Vitamins_Harmful/2.jpg';
import img3 from '../../../../img/knowledge/nutrition/Vitamins_Harmful/3.jpg';
import img4 from '../../../../img/knowledge/nutrition/Vitamins_Harmful/4.jpg';
const Vitamins_Harmful =()=>{
    return(
        <div className="test">
            <h1>Are Vitamins Harmful? A Nutritionist Weighs In.</h1>
            <p style={{fontStyle:'italic', textAlign:'center'}}>We may think that because we participate in a physically difficult sport that vitamins will help make up for high output. Think again.</p>
            <img className="img_bv" src={img1}></img>
            <p>Marisa Michael, MSc, RDN, CSSD is a board-certified specialist in sports dietetics and author of Nutrition for Climbers: Fuel for the Send. She serves on the USA Climbing medical committee and has a private practice in Portland, Oregon. Find her online at nutritionforclimbers.com or on Instagram @realnutritiondietitian for nutrition coaching, workshops, and writing services.</p>
            <p>I can’t even begin to tell you how many clients I’ve had in the 19 years I’ve been a dietitian who said they take a vitamin supplement for “diet insurance,” or “just in case.” The National Health and Nutrition Examination Survey from 2011 to 2014 found that 52 percent of American adults use dietary supplements regularly, and 32 percent use a multivitamin supplement. That’s a lot of people buying these “just in case.” I always wonder, in case of what?</p>
            <img className="img_bv" src={img2}></img>
            <p>Do climbers need a vitamin supplement? First, ask yourself what you expect it to do for you. Having a clear goal or expected outcome can help guide you toward whether to take it, which vitamin to take, and at what dose. Climbers such as us may think that because we train hard at a difficult sport that vitamins will help make up for high output, but taking a multivitamin just for the heck of it is like goofing around on random hangboards at the gym. It could help, it might hurt, and if it’s not planned or purposeful, what’s the point?</p>
            <p>Taking a multivitamin just for the heck of it is like goofing around on random hangboards at the gym.</p>
            <p>Regular multivitamin use has been shown to be ineffective at preventing chronic disease, including cancer and cardiovascular disease. A healthful diet offering a variety of food groups (and thus an array of nutrients) is much more beneficial for lowering disease risk. Fruits, vegetables, whole grains, legumes, and lean protein/fish will get you further than any multivitamin.</p>
            <img className="img_bv" src={img3}></img>
            <p>Moreover, taking a multivitamin could be potentially harmful:</p>
            <ul className="ul-li">
                <li>Supplements are notorious for being contaminated. Look for the USP, NSF for Sport, or Informed Choices symbol to ensure whatever it is you are taking is third-party tested. Otherwise, you may end up ingesting banned substances, steroid-like compounds, and even heavy metals. One review showed between 12 to 58 percent of supplements tested were contaminated (Marínez-Sanz et al, Intended or Unintended Doping? A Review of the Presence of Doping Substances in Dietary Supplements Used in Sports, Nutrients, 2017, 9, 1093)</li>
                <li>It could lull you into a false sense of health. “I didn’t eat any vegetables, but at least I took my vitamin.”</li>
                <li>Increased risk of vitamin toxicity. Some multivitamin supplements have much more than the recommended amount per day, even 1,000 percent or more. If you are also eating fortified food, such as cold cereal or sports products, you may be getting a lot more vitamins than you realize. At best, you will have expensive urine because you’re excreting excess amounts. At worst, you will have a toxicity. If you must take a multivitamin, look for one that has around 100 percent of the recommended intake of vitamins and minerals.</li>
                <li>Vitamins rob from your food budget. Unless you’re flush with cash, most mortals like to save money when possible. No joke, one client I had was spending $320 per month on vitamins, many of which were useless, redundant, and harmful.</li>
                <li>Some vitamins cause gastrointestinal upset. For example, iron can cause stomachaches and constipation. Excess vitamin C can cause diarrhea.</li>
            </ul>
            <p>There are instances where taking a supplement may be useful:</p>
            <ul className="ul-li">
                <li>If a known deficiency is present, such as vitamin D (generally caused by lack of sun in the winter) or iron. Still, before you start popping vitamins, visit your doctor and get tested.</li>
                <li>You are undergoing intense training and have a higher demand. There is some evidence that athletes may need more vitamin D.</li>
                <li>People who menstruate, high-volume runners (there are climbers who also run) and vegans and vegetarians may need more iron.</li>
                <li>Pregnant women need additional folic acid.</li>
                <li>Vegans need vitamin B12.</li>
            </ul>
            <img className="img_bv" src={img4}></img>
            <p>Before taking any supplement, ask yourself:</p>
            <ol className="ul-li">
                <li>Is it necessary?</li>
                <li>Is it safe?</li>
                <li>What do I expect it to do for me?</li>
                <li>Is my diet already optimized?</li>
                <li>Do I understand how to take it correctly to have a therapeutic effect (dose, form, and duration)?</li>
                <li>What are the risks?</li>
                <li>Does it interact with any of my medication?</li>
                <li>Can my wallet handle it?</li>
            </ol>
            <p style={{fontStyle:'italic'}}>In general, climbers don’t need vitamin supplements “just in case.” Be sure to check with your physician before adding any supplement to your routine.

            </p>

        </div>
    )
}
export default Vitamins_Harmful;