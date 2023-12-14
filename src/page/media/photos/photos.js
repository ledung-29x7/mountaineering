import React from "react";
import '../../css/intros.css'
import { Link } from "react-router-dom";
import IntroComponent from "../../../components/introComponent";


const Photos =()=>{
    const posts =[
        {
            pic:"https://quangbinhtourism.vn/wp-content/uploads/2020/02/h_hen_nie_5_zing_7_-1920x1281.jpg",
            title:"Miss H'Hen Nie and her journey to explore Son Doong cave",
            intro:"H'Hen Niê's expedition covered a distance of more than 20km and lasted for 4 days with the presence of Howard Limbert - Head......",
            pages:"/Miss-HHen-Nie-and-her-journey-to-explore-Son-Doong-cave"
        },
        {
            pic:"img/photos/entertainment/Film-reel.jpg",
            title:"Some mountaineering movies",
            intro:"Some movies you can watch at home......",
            pages:"/Mountaineering-Movies"
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
export default Photos;