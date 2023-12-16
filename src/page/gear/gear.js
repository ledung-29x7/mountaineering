import IntroComponent from '../../components/introComponent'
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/intros.css';
import img1 from '../../img/gear/1/Dungculeonui3.jpg'
const gear =()=>{

    const posts=[
        {
            pic:"https://www.rei.com/dam/van_dragt_061819_0174_mountaineering_gear.jpg",
            title:"Indispensable tools when going mountain climbing",
            intro:"The basic equipment for rock climbing is not just a reliable companion but also a decisive factor between safety and maximum challenge.....",
            pages:"/indispensable-tool"
        },
        {
            pic:"https://www.millets.co.uk/templates/millets.co.uk/_images/blog/tent/blog-tent1v3_01.jpg" ,
            title:"All knowledge about camping tents" ,
            intro:"If you're looking for inflatable tents for sale or courting picnickers or just want a new camping tent for the family.....",
            pages:"/camping-tents"
        },
        {
            pic:"https://3pointsofthecompass.files.wordpress.com/2015/09/p9130236_9864_edited-1.jpg",
            title:"How should tent stakes be chosen for different terrain surfaces?",
            intro:"If you have a tent, you cannot lack tent stakes. But how to choose tent stakes and how to suit each type of terrain surface.....",
            pages:"/stakes"
        },
        {
            pic:"https://www.99boulders.com/wp-content/uploads/2019/05/Group-scaled.jpg" ,
            title:"how to choose the most suitable climbing backpack" ,
            intro:"Are you planning to go Hiking/Trekking for a long time in the mountains or simply a short picnic? No matter what, first, what you need is to find .....",
            pages:"/backpack"
        },
        {
            pic:"https://cdn.climbing.com/wp-content/uploads/2015/08/hpcarabinerhandbook.jpg" ,
            title:"Which types of carabiners are used for climbing?" ,
            intro:"Carabiners are used in a wide variety of situations.This is why there are so many different types available......",
            pages:"/carabiners"
        },
        {
            pic:"https://d1nymbkeomeoqg.cloudfront.net/photos/26/6/382128_20894_XL.jpg" ,
            title:"What are outdoor shoes?" ,
            intro:"What are outdoor shoes ? There are many types of outdoor shoes.....",
            pages:"/outdoorshoes"
        },
        {
            pic:"https://d1nymbkeomeoqg.cloudfront.net/photos/26/6/382128_20894_XL.jpg" ,
            title:"Inflatable_Pod_sleeping" ,
            intro:"Mountaineers setting out on multi-day expeditions need somewhere to rest their heads at night.....",
            pages:"/Inflatable_Pod_sleeping"
        },


    ]
    return(
        <div className='knowledges'>
            {posts.map((post)=>(
                <Link className='intro' to={post.pages}>
                    <IntroComponent pic={post.pic} title={post.title} intro={post.intro} ></IntroComponent>
                </Link>
            ))}
            </div>  
       
    )
}
export default gear;