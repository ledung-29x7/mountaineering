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
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
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
          <Link>
            <Intro_small pic="https://ims.baoyenbai.com.vn/NewsImg/2_2014/107917_14-2leo%20nui.jpg" title='Leo núi mạo hiểm' ></Intro_small>
          </Link>
      </div>

      </div>
    )
}
export default support;