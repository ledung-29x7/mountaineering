import IntroComponent from '../../components/introComponent'
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/intros.css';
import img1 from '../../img/gear/1/Dungculeonui3.jpg'
const gear =()=>{
    return(
        <div className="gears">
        <Link className='intro' to={`/indispensable-tool`}>
            <IntroComponent pic={img1} title="Indispensable tools when going mountain climbing" intro="The basic equipment for rock climbing is not just a reliable companion but also a decisive factor between safety and maximum challenge....."></IntroComponent>
        </Link>
        <Link className='intro' to={`/camping-tents`}>
            <IntroComponent pic={img1} title="All knowledge about camping tents" intro="If you're looking for inflatable tents for sale or courting picnickers or just want a new camping tent for the family....."></IntroComponent>
        </Link>
        <Link className='intro' to={`/stakes`}>
            <IntroComponent pic={img1} title="How should tent stakes be chosen for different terrain surfaces?" intro="If you have a tent, you cannot lack tent stakes. But how to choose tent stakes and how to suit each type of terrain surface....."></IntroComponent>
        </Link>
        <Link className='intro' to={`/backpack`}>
            <IntroComponent pic={img1} title="how to choose the most suitable climbing backpack" intro="Are you planning to go Hiking/Trekking for a long time in the mountains or simply a short picnic? No matter what, first, what you need is to find ....."></IntroComponent>
        </Link>
        <Link className='intro' to={`/carabiners`}>
            <IntroComponent pic={img1} title="Which types of carabiners are used for climbing?" intro="Carabiners are used in a wide variety of situations.This is why there are so many different types available......"></IntroComponent>
        </Link>
        <Link className='intro' to={`/outdoorshoes`}>
            <IntroComponent pic={img1} title="What are outdoor shoes?" intro="What are outdoor shoes ? There are many types of outdoor shoes....."></IntroComponent>
        </Link>
        </div>
    )
}
export default gear;