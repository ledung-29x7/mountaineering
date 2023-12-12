import React from "react";
import Intro_small from "./intro_small";
import { Link } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';


const spanStyle = {
  // padding: '20px',
  // background: '#efefef',
  color: '#fff',
  'font-size':'24px',
  'font-weight': '700',
  'text-decoration':'none',
  'padding-top':'200px'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  width: '400px',
  height: '350px'
}
const slideImages = [
  {
    url: 'https://vnn-imgs-f.vgcloud.vn/2020/02/03/06/hoa-hau-h-hen-nie-va-hanh-trinh-tham-hiem-hang-son-doong-3.jpg',
    caption: "Miss H'Hen Nie and her journey to explore Son Doong cave"
  },
  {
    url: 'https://www.climber.co.uk/images/News%202023/20230331_Sharma_Sleeping_Lion.jpg',
    caption: "Chris Sharma's Sleeping Lion Project"
  },
  {
    url: 'https://news.coreyrich.com/wp-content/uploads/2021/04/200606240205CR_c1-copy.jpg',
    caption: 'Chris Sharma First Ascent of Es Pontás Mallorca'
  },
];

const posts =[
  {
    pic:"https://www.rei.com/dam/van_dragt_061819_0174_mountaineering_gear.jpg",
    title:"Indispensable tools when going mountain climbing",
    intro:"The basic equipment for rock climbing is not just a reliable companion but also a decisive factor between safety and maximum challenge.....",
    pages:"/indispensable-tool"
  },
  {
    pic:"/location/intro/3.jpeg",
    title:"Mont Blanc is the highest peak in the Western Alps",
    intro:"Find out all about mountaineering and climbing to the Mont Blanc summit — about the routes, huts, and the how to prepare for this once-in-a-lifetime experience.",
    pages: "/Mont-Blanc-is-the-highest-peak-in-the-Western-Alps"
  },
  {
    pic : "/location/intro/1.jpeg",
    title : "The largest cave in the world",
    intro : "A little-known fact is that Vietnam is currently the country that owns the largest cave in the world - Son Doong Cave....",
    pages: "/SonDoongCave"
  },
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

const support =()=>{
    return(
      <div style={{width:'400px'}}>
        <div style={{width:'400px', height:'350px'}} className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <Link style={{textDecoration:'none'}}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
              </Link>
            </div>
          ))} 
        </Slide>
      </div>

      <div>
      {posts.map((post)=>(
                        <Link className='a_home' to={post.pages}>
                            <Intro_small className="small" pic={post.pic} title={post.title} ></Intro_small>
                        </Link>
                        ))}
      </div>

      </div>
    )
}
export default support;