import React from "react";
import IntroComponent from "../../../components/introComponent";
import { Link } from "react-router-dom";
import '../../css/intros.css';


const posts=[
    {
        pic:'https://www.rei.com/dam/rinckenberger_111815_4771_finger_crack_climbing_lg.jpg',
        title:"How to Climb Finger Cracks ?",
        intro:"If you have basic crack climbing technique but are ready to step it up to the next level, it’s time to learn how to climb a finger crack......",
        pages: "/finger-cracks"
    },
    {
        pic:'https://www.mwv-icefest.com/wp-content/uploads/2014/01/Anchors2.jpg',
        title:"Snow Anchors for Mountaineering",
        intro:"When you’re mountaineering, you’ll build snow anchors for added protection when traveling on a glacier, crossing steep slopes......",
        pages:"/Snow-Anchors-for-Mountaineering"
    },
    {
        pic:'https://www.rei.com/dam/van_dragt_061819_0461_snow_travel_hero_lg.jpg?t=ea16by9xs',
        title:"Snow Travel Techniques for Mountaineering",
        intro:"Knowing how to safely and efficiently travel on snow slopes is a fundamental skill......",
        pages:"/Snow-Travel-Techniques-for-Mountaineering"
    },
    {
        pic:'https://www.rei.com/dam/van_dragt_061819_0759_crampons_hero_lg.jpg',
        title:"How to Use Crampons",
        intro:"Whether you’re summitting a big mountain or crossing a snowfield while hiking at higher elevations......",
        pages:"/How-to-Use-Crampons"
    },
    {
        pic:'https://www.mountaineering.scot/assets/contentimages/WP12-10173-20160321150656.jpeg',
        title:"How to Use an Ice Axe for Mountaineering",
        intro:"The ice axe, for many, is a mountaineering symbol that evokes images of rugged glaciated peaks and above-the-cloud summits.......",
        pages:"/How-to-Use-an-Ice-Axe-for-Mountaineering"
    },
    {
        pic:'https://www.rei.com/dam/content_080516_0033_trad_climbing_basics_lg.jpg?t=ea16by9xs' ,
        title:"Trad Climbing Basics" ,
        intro:"Traditional or trad climbing.The term didn't exist until the birth of pre-bolted climbing routes, or sport climbing........",
        pages:"/Trad-Climbing-Basics"
    },
    {
        pic:'https://www.rei.com/dam/van_dragt_061819_0286_route_finding_mountain.jpg',
        title:"Route Finding and Navigation for Mountaineering",
        intro:"Good route finding and navigation starts before you set foot on the mountain........",
        pages:"/Route-Finding-and-Navigation-for-Mountaineering"
    },
    {
        pic:'https://www.rei.com/dam/van_dragt_071119_0386_party_size.jpg',
        title:"Glacier and Roped Travel for Mountaineering",
        intro:"If you have dreams of scaling a glaciated peak like Mount Rainier or Denali, you’ll need to know how to travel across.......",
        pages:"/Glacier-and-Roped-Travel-for-Mountaineering"
    },
    {
        pic:'https://www.rei.com/dam/van_dragt_071119_0752_crevasse_rescue.jpg',
        title:"Crevasse Rescue Skills",
        intro:"Rescue skills are critical in mountaineering. As you’re traveling on glaciated terrain,.......",
        pages:"/Crevasse-Rescue-Skills"
    },
    {
        pic:'https://www.rei.com/dam/rinckenberger_111815_4788_getting_started_crack_climbing_lg.jpg',
        title:"Getting Started Crack Climbing" ,
        intro:"A crack that runs up a cliff face presents an obvious line to follow while climbing........",
        pages:"/Getting-Started-Crack-Climbing"
    },
    {
        pic:'https://mountainknowhow.com/wp-content/uploads/2019/01/Quad-4.jpg',
        title:"How to Build Anchors for Climbing" ,
        intro:"A climbing anchor is a system made up of individual anchor points that are linked together to create a master point .......",
        pages:"/How-to-Build-Anchors-for-Climbing"
    },
    {
        pic:'https://www.rei.com/dam/harnois_061516_0508_main_lg.jpg',
        title:"How to Belay" ,
        intro:"Typically, every roped climber clinging to a rock face or gym wall has a partner performing a critical role on the ground........",
        pages:"/How-to-Belay"
    },
    {
        pic:'https://www.denverpost.com/wp-content/uploads/2016/04/20130216__DSCN0439p1.jpg?w=600' ,
        title:"Avalanche Rescue Overview" ,
        intro:"Anyone who enjoys winter recreation and ventures beyond carefully managed environments (like ski resorts) needs to be both avalanche aware and rescue ready........",
        pages:"/Avalanche-Rescue-Overview"
    }


]
const techniques =()=>{
    return(
            <div className='gears'>
            {posts.map((post)=>(
                <Link className='intro' to={post.pages}>
                    <IntroComponent pic={post.pic} title={post.title} intro={post.intro} ></IntroComponent>
                </Link>
            ))}
            </div> 
    )
}
export default techniques;