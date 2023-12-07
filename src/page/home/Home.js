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
        'padding-top':'200px'
      }
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      }
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
          pages: '/location'
        },
      ];
    return(
        <div className='home_container'>
            <div className='left'>
                        <h3 className='items'>Outstanding</h3>
                        <div className="slide-container">
                        <Slide>
                        {slideImages.map((slideImage, index)=> (
                            <div key={index}>
                            <Link className='a' to={slideImage.pages}>
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
                        {slideImages.map((slideImage, index)=> (
                            <div key={index}>
                            <Link className='a' to={slideImage.intros}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`, backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
                                <span style={spanStyle}>{slideImage.caption}</span>
                            </div>
                            </Link>
                            </div>
                        ))} 
                        </Slide>
                    </div>
                    <div className='intro_small items'>
                    <div>
                        <Link className='a'>
                            <Intro_small className="small" pic="https://ims.baoyenbai.com.vn/NewsImg/2_2014/107917_14-2leo%20nui.jpg" title='Leo núi mạo hiểm' ></Intro_small>
                        </Link>
                    </div>
                    <div>
                        <Link className='a'>
                            <Intro_small className="small" pic="https://ims.baoyenbai.com.vn/NewsImg/2_2014/107917_14-2leo%20nui.jpg" title='Leo núi mạo hiểm' ></Intro_small>
                        </Link>
                    </div>
                    <div>
                        <Link className='a'>
                            <Intro_small className="small" pic="https://ims.baoyenbai.com.vn/NewsImg/2_2014/107917_14-2leo%20nui.jpg" title='Leo núi mạo hiểm' ></Intro_small>
                        </Link>
                    </div>
                    <div>
                        <Link className='a'>
                            <Intro_small className="small" pic="https://ims.baoyenbai.com.vn/NewsImg/2_2014/107917_14-2leo%20nui.jpg" title='Leo núi mạo hiểm' ></Intro_small>
                        </Link>
                    </div>
                    <div>
                        <Link className='a'>
                            <Intro_small className="small" pic="https://ims.baoyenbai.com.vn/NewsImg/2_2014/107917_14-2leo%20nui.jpg" title='Leo núi mạo hiểm' ></Intro_small>
                        </Link>
                    </div>
                    </div>
                    <h3 className='items'>hello</h3>
        </div>
        <div className='right'>
            <h3 className='items2'>Mountain Climbing Experience</h3>
            <Support></Support>
        </div>
        
      </div>
    )
}
export default Home;