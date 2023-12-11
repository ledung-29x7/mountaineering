import React from "react";
import '../../css/dt.css';
import img1 from '../../../img/location/Mont_Blanc/1.jpeg'
import img2 from '../../../img/location/Mont_Blanc/2.jpeg'
import img3 from '../../../img/location/Mont_Blanc/3.jpeg'
import img4 from '../../../img/location/Mont_Blanc/4.jpeg'
import Maps from "../../../components/maps";

const Mont_Blanc =()=>{
    return(
        <div className="test">
            <h1>Mont Blanc is the highest peak in the Western Alps</h1>
            <img className="img_bv" src={img1}/>
            <p>Mont Blanc is the highest peak in the Western Alps (arguably in the whole of Europe). With 4808 meters of elevation, it is also one of the most popular peaks in the world. More than 20,000 people try to summit Mont Blanc each year.</p>
            <p>If you’re one of those and in need of guidance, scroll no further — here is everything you need to know about climbing Mont Blanc.</p>
            <h2>How dangerous is it?</h2>
            <p>
            It depends on how you define danger. In itself, Mont Blanc is less dangerous in comparison to some other more difficult Alpine peaks. And thousands of people summit it each year.
            </p>
            <p>
            But it is also the mountain with the highest fatality rate in Europe, with over 100 people perishing over the course of a season. The reason is not the mountain’s technical difficulty but the overall unpreparedness of the people who try to climb it.
            </p>
            <img className="img_bv" src={img2}/>
            <p>There are lots of novices and other inexperienced mountaineers who try to do it without a guide. Even though Mont Blanc is not difficult for those with more experience under their belt, it is still a high-altitude mountain covered in snow. And any mountain like that can be fatally dangerous, so you better be aware of all of its risks.</p>
            <h4>Some of the dangers include:</h4>
            <ul className="ul_li">
                <li>
                    Steep, icy and exposed routes
                </li>
                <li>
                    Rockfall in the Grand Couloir
                </li>
                <li>
                    Falling into crevasses
                </li>
                <li>
                    High-altitude sickness
                </li>
                <li>
                    Unpredictable weather
                </li>
                <li>
                    Avalanches
                </li>
            </ul>
            <p>If you don’t know how to deal with these, climb Mont Blanc with a mountain guide. You and the local rescue services will both appreciate it.</p>
            <h2>When to go climbing Mont Blanc?</h2>
            <p>The European summer season — from June to September — is the best time to do it. That’s when the huts are open and the conditions are the most optimal.</p>
            <p>There are some early-season ski attempts possible in April, but anything earlier than that is not advisable. In winter, temperatures are cold, huts are closed, the days shorter, and the increased amount of snow also means increased danger. If you’re reading this, please don’t attempt climbing Mont Blanc in winter.</p>
            <img className="img_bv" src={img3}/>
            <h2>Weather</h2>
            <p>In the peak season, temperatures on the route range anywhere from +20°C at the starting point to -20°C at the summit. Summer temperatures in the valley are usually from 15 to 25°C. The higher parts of Mont Blanc can also experience extremely strong winds.</p>
            <p>What is desirable for the most optimal conditions are clear skies, cold temperatures, and as little wind as possible. Clear skies and no wind are straightforward, while the cold might seem contra intuitive. The reason cold temperatures are better than being too warm is for the snow to freeze over at night, making it more compact for climbing and reducing the chance of rockfall.</p>
            <h2>How crowded is it?</h2>
            <p>Estimates for how many people climb Mont Blanc each year range from 20,000 to 30,000. Most of those ascents come in the summer season when there will be up to 200 people per day on the slopes of Mont Blanc in the months from June to September.</p>
            <p>You can’t avoid this — Mont Blanc is a busy mountain. But don’t let that stop you. It’s also a big mountain, so it should very rarely feel too crowded.</p>
            <img className="img_bv" src={img4}/>
            <p>Of course, if you want to increase the chance of meeting fewer people, climb in June or in September. But be aware that finding the day with the right conditions in those months is harder because the weather is more changeable. Accordingly, plan to climb Mont Blanc in these months with increased caution.</p>
            <Maps name='Everest Mount' ggmap='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18681.878300143162!2d6.844448128957307!3d45.83112394550137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789459fb534be51%3A0xbde0c58bfb767cdc!2sMont%20Blanc%20massif!5e0!3m2!1svi!2s!4v1702291363386!5m2!1svi!2s'></Maps>
        </div>
    )
}
export default Mont_Blanc;