import React from "react";
import '../../../css/dt.css';
import Related_articles from "../../../../components/Related_articles";
import img1 from '../../../../img/knowledge/Types_Of_Shelters/1.webp';
import img2 from '../../../../img/knowledge/Types_Of_Shelters/2.webp';
import img3 from '../../../../img/knowledge/Types_Of_Shelters/3.webp';
import img4 from '../../../../img/knowledge/Types_Of_Shelters/4.webp';
import img5 from '../../../../img/knowledge/Types_Of_Shelters/5.webp';
import img6 from '../../../../img/knowledge/Types_Of_Shelters/6.webp';



const Types_Of_Shelters =()=>{
    const posts = [
        {
            pic : "https://www.psychi.co.uk/cdn/shop/articles/Screenshot_2022-01-18_at_12.56.31.jpg?v=1690555081&width=1790",
            title : "History techniques",
            intro : 'One of today’s predominant forms of mountaineering. The defining feature for classification in thi.......',
            pages: '/types'
        },
        {
            pic : "https://magazine.washington.edu/columns_wordpress/wp-content/uploads/2017/06/MOUNTAINEERS-PSD.jpg",
            title : "History techniques",
            intro : 'The history of various climbing and mountaineering techniques stretches as ......',
            pages:'/history'
        },
        {
            pic:"https://cdn.climbing.com/wp-content/uploads/2016/05/directvoicejpg.jpg?width=730",
            title:"Communication when climbing",
            intro:'The most common form of communication during mountaineering is simply calling with the voice....',
            pages: '/communication'
        },
    ]
    return(
        <div className="test">
            <h1>The Different Types Of Shelters Used By Mountaineers</h1>
            <img className="img_bv" src={img1}/>
            <p>Mountain climbing is a strenuous and often dangerous activity. Because the weather conditions on mountains can change without notice, shelters can play a critical role in keeping climbers safe and protected. This article takes a look at the different types of shelters used by mountain climbers.</p>
            <h3>1.Base Camp</h3>
            <img className="img_bv" src={img2}/>
            <p>Base camps are most frequently used by mountain climbers who are trying to reach the summit of very high mountains. These shelters are often stocked with necessary supplies and provide climbers with a safe location for acclimatizing to extreme altitudes. When climbs to the summit take multiple days, several base camps may be located along the trails. Some of the most well-known base camps are located on Mount Everest.</p>
            <h3>2.Hut</h3>
            <img className="img_bv" src={img3}/>
            <p>Huts may be well-developed or rustic shelters, located in rural areas at differing elevations along a mountain. These shelters are designed around a shared dining area with private sleeping sleeping quarters. These sleeping rooms are stocked with a bed, pillows, and blankets. Climbers bring a sleeping bag. Like base camp, huts allow a trail to be divided into several days worth of hikes and make it possible for climbers to travel with a reduced pack. During warmer seasons, many huts have full-time staff or volunteers that manage the daily activities necessary to keep the shelter running. In some locations, climbers have the option to purchase snacks, meals, and drinks.</p>
            <h3>3.Tent</h3>
            <img className="img_bv" src={img4}/>
            <p>Tents consist of a pole framework, covered in a tarp or some other material and held by ropes and anchors. These shelters are set up at the moment it will be used and are easily portable. Simpler designs require just a thin tarp, while more durable designs incorporate heavier materials that can hold up against dangerous weather conditions. In extreme weather, tents may be set up behind mounds of snow or rock, which act as windbreaks and help protect the shelter. Tents are the most frequently used type of shelter.</p>
            <h3>4.Snow Cave</h3>
            <img className="img_bv" src={img5}/>
            <p>Snow caves are preferred over tents by some climbers, where weather conditions permit. These shelters are known to be warmer than tents and have only 2 requirements: snow and a snow shovel. Climbers can build a snow cave in a short amount of time, digging out an area under at least 4 feet of snow. The inner temperature is usually around 32° fahrenheit and for added warmth, climbers use waterproof, lightweight bivvy bags and foam sleeping pads. Another type of snow cave is an igloo, although this requires a very specific construction technique and should only be attempted by those with experience.</p>
            <h3>6.Bivouac</h3>
            <img className="img_bv" src={img6}/>
            <p>A bivouac, also known as a bivvy, is a very rudimentary type of shelter. It does not offer a completely enclosed shelter and in some cases, may involve simply sleeping in the open. When in the open, climbers use a sleeping bag and cover it with a bivouac sack (or bivvy bag). A bivouac sack is a lightweight, waterproof liner that provides an additional layer of protection against inclement weather and cold temperatures. Climbers may also set up a bivouac between a crack in nearby rocks or a ditch formed in the snow, both of these offer more shelter. This shelter is often chosen because it allows climbers to carry a reduced-weight pack. A bivouac does have the added risk of climbers being more exposed to dangerous weather.</p>
            <Related_articles posts={posts}></Related_articles>
        </div>
    )
}
export default Types_Of_Shelters;