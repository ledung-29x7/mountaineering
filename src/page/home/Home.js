import React from 'react';
import './Home.css'
import Support from '../../components/support';
import { Link } from 'react-router-dom';
import Intro_small from '../../components/intro_small';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
const Home = ()=>{
    const spanStyle = {
        // padding: '20px',
        // background: '#efefef',
        color: '#fff',
        'font-size':'24px',
        'font-weight': '700',
        'text-decoration':'none',
        'padding':'20px',
        'background-color':'rgba(0,0,0,0.5)'
      }
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      }

      // slider outstanding
      const slideImages = [
        {
          url: 'https://rockclimbeveryday.com/wp-content/uploads/2016/01/Rock-Climbing-Equipment.jpg',
          caption: 'Gear Climbing',
          pages: '/gear'
        },
        {
          url: 'https://www.rei.com/dam/rinckenberger_111815_4771_finger_crack_climbing_lg.jpg?t=ea16by9lg',
          caption: 'How to Climb Finger Cracks ?',
          pages: '/finger-cracks'
        },
        {
          url: 'https://media.baoquangninh.vn/upload/image/202201/medium/1932439_6123d0e54971ad0f26471f602462b73b.jpg',
          caption: 'Explore Son Doong cave',
          pages: '/SonDoongCave'
        },
      ];
      // slider News
      const slideImages2 = [
        {
          url: "./News/1.jpg" ,
          caption: "Letter to IFSC Cites Disappointment Over NEOM Beach Games",
          pages: "/Letter-to-IFSC-Cites-Disappointment-Over-NEOM-Beach-Games"
        },
        {
          url: "./News/2.jpg",
          caption: "Jakob Schubert Offers a Rare Upgrade",
          pages: '/Jakob-Schubert-Offers-a-Rare-Upgrade'
        },
        {
          url: "./News/4.jpg",
          caption: "Kai Lightner Just Did His Hardest Route in Eight Years",
          pages: "/Kai-Lightner-Just-Did-His-Hardest-Route-in-Eight-Years"
        },
      ];


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
        },{
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
      ]
    return(
        <div className='home_container'>
            <div className='left'>
                        <h3 className='items'>Outstanding</h3>
                        <div className="slide-container">
                        <Slide>
                        {slideImages.map((slideImage, index)=> (
                            <div key={index}>
                            <Link className='a_home' to={slideImage.pages}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`, backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
                                <span style={spanStyle}>{slideImage.caption}</span>
                            </div>
                            </Link>
                            </div>
                        ))} 
                        </Slide>
                    </div>
                    <h3 className='items'>News</h3>
                    <div className="slide-container">
                        <Slide>
                        {slideImages2.map((slideImage2, index)=> (
                            <div key={index}>
                            <Link className='a_home' to={slideImage2.intros}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage2.url})`, backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
                                <span style={spanStyle}>{slideImage2.caption}</span>
                            </div>
                            </Link>
                            </div>
                        ))} 
                        </Slide>
                    </div>
                    <div className='intro_small items'>
                        {posts.map((post)=>(
                        <Link className='a_home' to={post.pages}>
                            <Intro_small className="small" pic={post.pic} title={post.title} ></Intro_small>
                        </Link>
                        ))}
                    </div>
        </div>
        <div className='right'>
            <h3 className='items2'>Mountain Climbing Experience</h3>
            <Support></Support>
        </div>
        
      </div>
    )
}
export default Home;