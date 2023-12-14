import React from "react";
import '../../css/intros.css'
import { Link } from "react-router-dom";
import IntroComponent from "../../../components/introComponent";


const Videos =()=>{
    const posts =[
        {
            pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVx3fIGP421VIcenahL1SkGYugLyw8Pq-hattx7h5qcKtcF4Z1nNSvB-P6ifGxsqjkuiU&usqp=CAU",
            title:"Chris Sharmas First Ascent of Es Pontás Mallorca",
            intro:"Chris Sharma envisioned a line up the underside of this free-standing limestone arch off the coast of Mallorca.......",
            pages:"/Chris-Sharmas-First-Ascent-of-Es-Pontas-Mallorca"
        },
        {
            pic:"https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/04/Sharma-sleeping-lion.jpg",
            title:"Chris Sharmas Sleeping Lion Project",
            intro:"Chris Sharma bolted this spectacular line in Siurana, Spain, and spent two years trying to make the first ascent. Here's a raw, first-person look at his attempts......",
            pages:"/Chris-Sharmas-Sleeping-Lion-Project"
        },
        {
            pic:"https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/04/Sharma-sleeping-lion.jpg",
            title:"Weekend Whipper: Too Pumped to Clip!",
            intro:"Chris Sharma bolted this spectacular line in Siurana, Spain, and spent two years trying to make the first ascent. Here's a raw, first-person look at his attempts......",
            pages:"/Too-Pumped-to-Clip!"
        },
        {
            pic:"https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/04/Sharma-sleeping-lion.jpg",
            title:"Weekend Whipper: A Reminder to Make Your Friends Hang Draws",
            intro:"Chris Sharma bolted this spectacular line in Siurana, Spain, and spent two years trying to make the first ascent. Here's a raw, first-person look at his attempts......",
            pages:"/Hang-Reminder"
        },
        {
            pic:"https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/04/Sharma-sleeping-lion.jpg",
            title:"Weekend Whipper: A Reminder to Not Let the Rope Get Behind Your Leg",
            intro:"Chris Sharma bolted this spectacular line in Siurana, Spain, and spent two years trying to make the first ascent. Here's a raw, first-person look at his attempts......",
            pages:"/Rope-Behind-Leg"
        },
        {
            pic:"https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/04/Sharma-sleeping-lion.jpg",
            title:"Weekend Whipper: Stacking It On the World’s Most Famous Boulder",
            intro:"Chris Sharma bolted this spectacular line in Siurana, Spain, and spent two years trying to make the first ascent. Here's a raw, first-person look at his attempts......",
            pages:"/Stacking-On-World-Most-Famous-Boulder"
        },
        {
            pic:"https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/04/Sharma-sleeping-lion.jpg",
            title:"Weekend Whipper: Ice Climber Falls With Rope Between Legs—Mid Figure Four",
            intro:"Chris Sharma bolted this spectacular line in Siurana, Spain, and spent two years trying to make the first ascent. Here's a raw, first-person look at his attempts......",
            pages:"/Ice-Fall-With-Rope"
        },
        {
            pic:"https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/04/Sharma-sleeping-lion.jpg",
            title:"Weekend Whipper: Have You Ever “Forgotten” You Were on Lead?",
            intro:"Chris Sharma bolted this spectacular line in Siurana, Spain, and spent two years trying to make the first ascent. Here's a raw, first-person look at his attempts......",
            pages:"/Forgotten-Lead"
        },
        {
            pic:"https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/04/Sharma-sleeping-lion.jpg",
            title:"Weekend Whipper: Why Belayers Should Always Wear a Helmet",
            intro:"Chris Sharma bolted this spectacular line in Siurana, Spain, and spent two years trying to make the first ascent. Here's a raw, first-person look at his attempts......",
            pages:"/Should-Wear-Helmet"
        },
        {
            pic:"https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/04/Sharma-sleeping-lion.jpg",
            title:"Weekend Whipper: Huge Air Time in El Salto, Mexico",
            intro:"Chris Sharma bolted this spectacular line in Siurana, Spain, and spent two years trying to make the first ascent. Here's a raw, first-person look at his attempts......",
            pages:"/Air-Time-In-Mexico"
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
    );
}
export default Videos;