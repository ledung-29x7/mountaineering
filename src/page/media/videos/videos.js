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