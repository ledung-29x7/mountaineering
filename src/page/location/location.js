import React from 'react';
import { Link } from 'react-router-dom';
import '../css/intros.css'
import IntroComponent from '../../components/introComponent';
import Taybac from '../../img/location/vietnam/north.jpg'
const Location =()=>{
    return(
        <div className='locations'>
            <Link className='intro' to={`/SonDoongCave`}>
                <IntroComponent pic={Taybac} title="The largest cave in the world" intro='A little-known fact is that Vietnam is currently the country that owns the largest cave in the world - Son Doong Cave....' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/Complete-Guide-to-Mount-Everest`}>
                <IntroComponent pic={Taybac} title="Complete Guide to Mount Everest" intro='Mount Everest is located between the border between Nepal and Tibet on the roof of the world in the Himalayas....' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/`}>
                <IntroComponent pic={Taybac} title="Địa điểm leo núi ở miền bắc" intro='...' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/`}>
                <IntroComponent pic={Taybac} title="Địa điểm leo núi ở miền bắc" intro='...' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/`}>
                <IntroComponent pic={Taybac} title="Địa điểm leo núi ở miền bắc" intro='...' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/`}>
                <IntroComponent pic={Taybac} title="Địa điểm leo núi ở miền bắc" intro='...' ></IntroComponent>
            </Link>
        </div>
    )
}
export default Location;