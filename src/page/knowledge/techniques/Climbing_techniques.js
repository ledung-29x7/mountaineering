import React from "react";
import IntroComponent from "../../../components/introComponent";
import { Link } from "react-router-dom";
import '../../css/intros.css';
import img1 from '../../../img/knowledge/techniques/finger_cracks/1.jpeg'
import img2 from '../../../img/knowledge/techniques/Snow_Anchors/1.avif'
const techniques =()=>{
    return(
        <div className="gears">
            <Link className='intro' to={`/finger-cracks`}>
                <IntroComponent pic={img1} title="How to Climb Finger Cracks ?" intro="If you have basic crack climbing technique but are ready to step it up to the next level, it’s time to learn how to climb a finger crack......"></IntroComponent>
            </Link>
            <Link className='intro' to={`/Snow-Anchors-for-Mountaineering`}>
                <IntroComponent pic={img2} title="Snow Anchors for Mountaineering" intro="When you’re mountaineering, you’ll build snow anchors for added protection when traveling on a glacier, crossing steep slopes......"></IntroComponent>
            </Link>                   
            <Link className='intro' to={`/Snow-Travel-Techniques-for-Mountaineering`}>
                <IntroComponent pic='https://www.rei.com/dam/van_dragt_061819_0461_snow_travel_hero_lg.jpg?t=ea16by9xs' title="Snow Travel Techniques for Mountaineering" intro="Knowing how to safely and efficiently travel on snow slopes is a fundamental skill......"></IntroComponent>
            </Link>            
            <Link className='intro' to={`/How-to-Use-Crampons`}>
                <IntroComponent pic='https://www.rei.com/dam/van_dragt_061819_0759_crampons_hero_lg.jpg' title="How to Use Crampons" intro="Whether you’re summitting a big mountain or crossing a snowfield while hiking at higher elevations......"></IntroComponent>
            </Link>            
            <Link className='intro' to={`/How-to-Use-an-Ice-Axe-for-Mountaineering`}>
                <IntroComponent pic='https://www.mountaineering.scot/assets/contentimages/WP12-10173-20160321150656.jpeg' title="How to Use an Ice Axe for Mountaineering" intro="The ice axe, for many, is a mountaineering symbol that evokes images of rugged glaciated peaks and above-the-cloud summits......."></IntroComponent>
            </Link>
            <Link className='intro' to={`/Trad-Climbing-Basics`}>
                <IntroComponent pic='https://www.rei.com/dam/content_080516_0033_trad_climbing_basics_lg.jpg?t=ea16by9xs' title="Trad Climbing Basics" intro="Traditional or trad climbing.The term didn't exist until the birth of pre-bolted climbing routes, or sport climbing........"></IntroComponent>
            </Link>       
            <Link className='intro' to={`/Route-Finding-and-Navigation-for-Mountaineering`}>
                <IntroComponent pic='https://www.rei.com/dam/van_dragt_061819_0286_route_finding_mountain.jpg' title="Route Finding and Navigation for Mountaineering" intro="Good route finding and navigation starts before you set foot on the mountain........"></IntroComponent>
            </Link>  
            <Link className='intro' to={`/Glacier-and-Roped-Travel-for-Mountaineering`}>
                <IntroComponent pic='https://www.rei.com/dam/van_dragt_071119_0386_party_size.jpg' title="Glacier and Roped Travel for Mountaineering" intro="If you have dreams of scaling a glaciated peak like Mount Rainier or Denali, you’ll need to know how to travel across......."></IntroComponent>
            </Link>  
            <Link className='intro' to={`/Trad-Climbing-Basics`}>
                <IntroComponent pic='https://www.mountaineering.scot/assets/contentimages/WP12-10173-20160321150656.jpeg' title="Trad Climbing Basics" intro="......."></IntroComponent>
            </Link>  
            <Link className='intro' to={`/Trad-Climbing-Basics`}>
                <IntroComponent pic='https://www.mountaineering.scot/assets/contentimages/WP12-10173-20160321150656.jpeg' title="Trad Climbing Basics" intro="......."></IntroComponent>
            </Link>  
            <Link className='intro' to={`/Trad-Climbing-Basics`}>
                <IntroComponent pic='https://www.mountaineering.scot/assets/contentimages/WP12-10173-20160321150656.jpeg' title="Trad Climbing Basics" intro="......."></IntroComponent>
            </Link>       
        </div>
    )
}
export default techniques;