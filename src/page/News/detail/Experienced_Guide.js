import React from "react";
import '../../css/dt.css';
import ReactPlayer from "react-player";
import img1 from '../../../img/News/Experienced_Guide/1.webp';
import img2 from '../../../img/News/Experienced_Guide/2.webp';
import img3 from '../../../img/News/Experienced_Guide/3.jpg';

const Experienced_Guide =()=>{
    return(
        <div className="test">
            <h1>Experienced Guide Dies on Cerro Marmolejo, Leaving Behind a Final Goodbye to His Wife and Son</h1>
            <p style={{fontStyle:'italic', textAlign:'center'}}>Ignacio Lucero’s final message, sent on the day he passed, was "I'm on my way." It was his goodbye, says his wife to Climbing.</p>
            <img className="img_bv" src={img1}></img>
            <p>Ignacio “Nacho” Javier Lucero was an experienced and well-known mountain guide. He died on November 30 just a few meters from the summit of Cerro Marmolejo with two clients, Raul Espir and Sergio Berardo.</p>
            <p>Born in Mendoza, Argentina, Lucero began spending time in the mountains at age 13. By the time he was 22, he had completed 45 ascents of Aconcagua. He became certified by the Argentine Mountain Guide Association and has since completed more than 60 expeditions, guiding international clients on Denali, Ojos del Salado, and Manaslu. An avid reader, he also graduated as a professor of Literature at the National University of Cuyo. </p>
            <p>In 2011, Lucero suffered a heart attack and then a stroke after reaching the summit of Manaslu. It would be years before he was able to regain his fine motor control. He recovered alongside his guide dog, Oro, and in 2019 he managed his highest peak, Gasherbrum II, without supplemental oxygen. Lucero gave a Tedx Talk about the event and his recovery.</p>
            <p>Cerro Marmolejo is a rarely-climbed glaciated volcano in the Andes Mountains on the southern border of Chile. At 6,108 meters, it is the world’s southernmost 6,000-meter peak. The surrounding landscape is known to be rugged and physically demanding, with crevasses and penitentes. Winds at the summit can reach over 50 miles per hour. </p>
            <img className="img_bv" src={img2}></img>
            <p>Lucero has never attempted Cerro Marmolejo, but he had been planning the trip for months. Chilean guide Pablo Buchbinder, and a few of his clients, also joined Lucero, Espir, and Berardo. They proceeded via the normal route from the western, Chilean side of the mountain.</p>
            <p>On November 29, Lucero sent a message to his wife, Maria Fernanda Martinez Thierry, saying that it had been a difficult ascent, but they had reached Camp 3, which sits at 4,800 meters. Buchbinder and his clients had decided to turn back due to weather after reaching 3,000 meters. </p>
            <img className="img_bv" src={img3}></img>
            <p>The last registered signal from Lucero’s GPS tracker was at 5,800m. Alarm was raised after no further GPS signals were sent, and helicopters from Chile’s Group of Special Forces began searching the region. Lucero, Espir, and Berardo were found on their backs and without a rope, suggesting that they died from the cold winds. Fernanda tells Climbing via Instagram, Lucero’s <a href="https://newsrnd.com/life/2023-12-05-the-mountain-guide-s-heartbreaking-last-message-to-his-wife-and-a-new-version-of-his-death.SyrDzr-6HT.html#google_vignette">final message</a>, sent  to her on his final day via satellite phone, was “I’m on my way.” It was his goodbye, letting her and their two-year-old son, Salvi, know that he was on his way to heaven. </p>
            
        </div>

    )
}
export default Experienced_Guide;