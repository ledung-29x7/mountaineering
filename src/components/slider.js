import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const SliderComponent = (props)=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
    }
    const backgroud = props.backgroud;
    const title = props.title
    return(
        <div>
            <Slider {...settings}>
      <div style={{backgroundImage:`url(${backgroud})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <h2 style={{textAlign:'center'}}>{title}</h2>
      </div>
    </Slider>
        </div>
    )
}
export default SliderComponent;