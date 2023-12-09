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
          <Link>
            <Intro_small pic="https://vnn-imgs-f.vgcloud.vn/2020/02/03/06/hoa-hau-h-hen-nie-va-hanh-trinh-tham-hiem-hang-son-doong-3.jpg" title="Miss H'Hen Nie and her journey to explore Son Doong cave" ></Intro_small>
          </Link>
          <Link>
            <Intro_small pic="https://ims.baoyenbai.com.vn/NewsImg/2_2014/107917_14-2leo%20nui.jpg" title='Leo núi mạo hiểm' ></Intro_small>
          </Link>
          <Link>
            <Intro_small pic="https://ims.baoyenbai.com.vn/NewsImg/2_2014/107917_14-2leo%20nui.jpg" title='Leo núi mạo hiểm' ></Intro_small>
          </Link>
          <Link>
            <Intro_small pic="https://ims.baoyenbai.com.vn/NewsImg/2_2014/107917_14-2leo%20nui.jpg" title='Leo núi mạo hiểm' ></Intro_small>
          </Link>
          <Link>
            <Intro_small pic="https://ims.baoyenbai.com.vn/NewsImg/2_2014/107917_14-2leo%20nui.jpg" title='Leo núi mạo hiểm' ></Intro_small>
          </Link>
          <Link>
            <Intro_small pic="https://ims.baoyenbai.com.vn/NewsImg/2_2014/107917_14-2leo%20nui.jpg" title='Leo núi mạo hiểm' ></Intro_small>
          </Link>
      </div>

      </div>
    )
}
export default support;